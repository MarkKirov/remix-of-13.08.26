#!/usr/bin/env bash
# Pull-деплой: сервер сам забирает код с GitHub, собирает и перезапускает приложение.
# Запуск вручную:  bash /var/www/app/repo/deploy/deploy.sh
# Автоматически:   systemd timer komilfo-deploy.timer (каждые 2 минуты)
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/MarkKirov/remix-of-13.08.26.git}"
BRANCH="${BRANCH:-main}"
APP_DIR=/var/www/app
REPO_DIR="$APP_DIR/repo"
SERVICE=komilfo-app
export PATH="/root/.bun/bin:$PATH"

mkdir -p "$APP_DIR"

if [ ! -d "$REPO_DIR/.git" ]; then
  git clone --branch "$BRANCH" "$REPO_URL" "$REPO_DIR"
fi

cd "$REPO_DIR"
git remote set-url origin "$REPO_URL"
git fetch --prune origin "$BRANCH"

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse "origin/$BRANCH")

if [ "$LOCAL" = "$REMOTE" ] \
  && [ "${FORCE:-0}" != "1" ] \
  && [ -f "$APP_DIR/dist/server/index.mjs" ] \
  && grep -q 'location \^~ /__l5e/assets-v1/' /etc/nginx/sites-available/$SERVICE 2>/dev/null \
  && grep -q 'gzip_types .*text/javascript' /etc/nginx/sites-available/$SERVICE 2>/dev/null; then
  echo "Изменений нет ($LOCAL) — деплой не нужен."
  exit 0
fi

echo "==> Обновляю код: $LOCAL -> $REMOTE"
git reset --hard "origin/$BRANCH"

echo "==> Зависимости"
RUNNER=bun
if ! bun install --frozen-lockfile; then
  echo "bun install не удался — ставлю через npm"
  rm -rf node_modules
  npm install --no-audit --no-fund
  RUNNER=npm
fi

echo "==> Сборка ($RUNNER)"
set -a
[ -f "$APP_DIR/.env" ] && . "$APP_DIR/.env"
set +a
NITRO_PRESET=node_server "$RUNNER" run build

echo "==> Синхронизация медиа на сервер"
# .asset.json remains in GitHub, while the binary is downloaded automatically
# during deployment. Browsers never need to contact the external asset host.
python3 <<'PY'
from pathlib import Path
import json
import os
import time
import urllib.request

repo = Path("/var/www/app/repo")
media_root = Path("/var/www/app/media-root")
upstream = "https://d7c25a86-11ce-4ac7-afce-4c384aa3ed13.lovableproject.com"
assets = []

for pointer in repo.rglob("*.asset.json"):
    data = json.loads(pointer.read_text())
    url = data.get("url", "")
    if not url.startswith("/__l5e/assets-v1/"):
        continue
    assets.append((url, int(data.get("size", 0))))

for index, (url, expected_size) in enumerate(assets, 1):
    target = media_root / url.lstrip("/")
    if target.exists() and (not expected_size or target.stat().st_size == expected_size):
        continue
    target.parent.mkdir(parents=True, exist_ok=True)
    temporary = target.with_suffix(target.suffix + ".download")
    for attempt in range(1, 5):
        try:
            request = urllib.request.Request(upstream + url, headers={"User-Agent": "KomilfoDeploy/1.0"})
            with urllib.request.urlopen(request, timeout=120) as response, temporary.open("wb") as output:
                while chunk := response.read(1024 * 1024):
                    output.write(chunk)
            if expected_size and temporary.stat().st_size != expected_size:
                raise RuntimeError(f"размер {temporary.stat().st_size}, ожидался {expected_size}")
            os.replace(temporary, target)
            break
        except Exception as error:
            temporary.unlink(missing_ok=True)
            if attempt == 4:
                raise SystemExit(f"Не удалось скачать {url}: {error}")
            time.sleep(attempt * 3)

print(f"Медиа готовы: {len(assets)} файлов")
PY


echo "==> Публикация сборки"
rm -rf "$APP_DIR/dist.new"
cp -r "$REPO_DIR/dist" "$APP_DIR/dist.new"
rm -rf "$APP_DIR/dist.old"
[ -d "$APP_DIR/dist" ] && mv "$APP_DIR/dist" "$APP_DIR/dist.old"
mv "$APP_DIR/dist.new" "$APP_DIR/dist"
rm -rf "$APP_DIR/dist.old"

echo "==> Настройка локальной раздачи медиа"
python3 <<'PY'
from pathlib import Path
import re

path = Path("/etc/nginx/sites-available/komilfo-app")
text = path.read_text()
gzip_types = (
    "    gzip_types text/plain text/css text/javascript application/javascript "
    "application/json application/xml image/svg+xml font/woff2;"
)
assets_location = '''    location ^~ /assets/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Accept-Encoding "";
        gzip on;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
'''
if "gzip_comp_level" not in text:
    text = text.replace(
        "    client_max_body_size 20m;",
        "    client_max_body_size 20m;\n"
        "    gzip on;\n"
        "    gzip_comp_level 5;\n"
        "    gzip_min_length 1024;\n"
        "    gzip_proxied any;\n" + gzip_types,
        1,
    )
else:
    # Always refresh the MIME list: TanStack serves JS as text/javascript,
    # which the previous list did not compress.
    text = re.sub(r"[ \t]*gzip_types [^;]*;", gzip_types, text, count=1)
if "gzip_vary on;" not in text:
    text = text.replace("    gzip_proxied any;", "    gzip_proxied any;\n    gzip_vary on;", 1)
if "location ^~ /assets/" not in text:
    text = text.replace("    location / {", assets_location + "\n    location / {", 1)
path.write_text(text)
PY


cat > /etc/nginx/conf.d/komilfo-assets.conf <<'EOF'
# Media is mirrored automatically by deploy.sh and served without an external CDN.
location ^~ /__l5e/assets-v1/ {
    root /var/www/app/media-root;
    try_files $uri =404;
    access_log off;
    expires 30d;
    add_header Cache-Control "public, immutable";
}
EOF

# nginx does not allow a location block directly in conf.d/http context.
# Insert the generated block into this site's server block before location /.
ASSET_BLOCK=$(cat /etc/nginx/conf.d/komilfo-assets.conf)
rm -f /etc/nginx/conf.d/komilfo-assets.conf
python3 - "$ASSET_BLOCK" <<'PY'
from pathlib import Path
import sys

path = Path("/etc/nginx/sites-available/komilfo-app")
text = path.read_text()
start = text.find("    location ^~ /__l5e/assets-v1/")
if start != -1:
    end = text.find("\n    location / {", start)
    if end == -1:
        raise SystemExit("Не найден основной location nginx")
    text = text[:start] + text[end + 1:]
block = "\n".join(f"    {line}" if line else "" for line in sys.argv[1].splitlines())
text = text.replace("    location / {", block + "\n\n    location / {", 1)
path.write_text(text)
PY
nginx -t
systemctl reload nginx

echo "==> Перезапуск $SERVICE"
systemctl restart "$SERVICE"
sleep 2
systemctl is-active "$SERVICE"
echo "==> Готово: $(git rev-parse --short HEAD)"
