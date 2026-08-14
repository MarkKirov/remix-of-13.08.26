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

if [ "$LOCAL" = "$REMOTE" ] && [ "${FORCE:-0}" != "1" ] && [ -f "$APP_DIR/dist/server/index.mjs" ]; then
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


echo "==> Публикация сборки"
rm -rf "$APP_DIR/dist.new"
cp -r "$REPO_DIR/dist" "$APP_DIR/dist.new"
rm -rf "$APP_DIR/dist.old"
[ -d "$APP_DIR/dist" ] && mv "$APP_DIR/dist" "$APP_DIR/dist.old"
mv "$APP_DIR/dist.new" "$APP_DIR/dist"
rm -rf "$APP_DIR/dist.old"

echo "==> Настройка прокси для медиа Lovable Assets"
cat > /etc/nginx/conf.d/komilfo-assets.conf <<'EOF'
# Asset pointers in the repository use this same-origin path. On Lovable hosting
# it is handled by the platform; on our server nginx forwards it to asset storage.
location ^~ /__l5e/assets-v1/ {
    proxy_pass https://d7c25a86-11ce-4ac7-afce-4c384aa3ed13.lovableproject.com;
    proxy_ssl_server_name on;
    proxy_set_header Host d7c25a86-11ce-4ac7-afce-4c384aa3ed13.lovableproject.com;
    proxy_set_header Accept-Encoding "";
    proxy_connect_timeout 20s;
    proxy_read_timeout 120s;
    proxy_cache_valid 200 1h;
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
