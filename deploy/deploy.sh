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
bun install --frozen-lockfile

echo "==> Сборка"
set -a
[ -f "$APP_DIR/.env" ] && . "$APP_DIR/.env"
set +a
NITRO_PRESET=node_server bun run build

echo "==> Публикация сборки"
rm -rf "$APP_DIR/dist.new"
cp -r "$REPO_DIR/dist" "$APP_DIR/dist.new"
rm -rf "$APP_DIR/dist.old"
[ -d "$APP_DIR/dist" ] && mv "$APP_DIR/dist" "$APP_DIR/dist.old"
mv "$APP_DIR/dist.new" "$APP_DIR/dist"
rm -rf "$APP_DIR/dist.old"

echo "==> Перезапуск $SERVICE"
systemctl restart "$SERVICE"
sleep 2
systemctl is-active "$SERVICE"
echo "==> Готово: $(git rev-parse --short HEAD)"
