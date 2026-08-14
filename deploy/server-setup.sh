#!/usr/bin/env bash
# Одноразовая настройка сервера Timeweb (Ubuntu). Запускать на сервере от root:
#   bash server-setup.sh
# Модель деплоя: сервер САМ забирает код с GitHub (git pull по таймеру), входящий SSH не нужен.
set -euo pipefail

APP_DIR=/var/www/app
REPO_DIR="$APP_DIR/repo"
REPO_URL="${REPO_URL:-https://github.com/MarkKirov/remix-of-13.08.26.git}"
BRANCH="${BRANCH:-main}"
SERVICE=komilfo-app
DOMAIN="${DOMAIN:-_}"   # DOMAIN=example.ru bash server-setup.sh

echo "==> Пакеты"
apt-get update -y
apt-get install -y curl git unzip nginx ca-certificates

echo "==> Node.js 22"
if ! command -v node >/dev/null || [ "$(node -v | cut -d. -f1)" != "v22" ]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

echo "==> Bun"
export PATH="/root/.bun/bin:$PATH"
if ! command -v bun >/dev/null; then
  curl -fsSL https://bun.sh/install | bash
fi

echo "==> Каталог приложения"
mkdir -p "$APP_DIR/dist"

echo "==> Файл окружения $APP_DIR/.env"
if [ ! -f "$APP_DIR/.env" ]; then
  cat > "$APP_DIR/.env" <<'EOF'
PORT=3000
HOST=127.0.0.1
SUPABASE_URL=https://vmknkraslubyrgfzhjnm.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_ivCe6_M17J6fX_KJ-E1oPQ_k-rpQJ6w
SUPABASE_PROJECT_ID=vmknkraslubyrgfzhjnm
VITE_SUPABASE_URL=https://vmknkraslubyrgfzhjnm.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_ivCe6_M17J6fX_KJ-E1oPQ_k-rpQJ6w
VITE_SUPABASE_PROJECT_ID=vmknkraslubyrgfzhjnm
EOF
  chmod 600 "$APP_DIR/.env"
fi

echo "==> Клонирование репозитория"
if [ ! -d "$REPO_DIR/.git" ]; then
  git clone --branch "$BRANCH" "$REPO_URL" "$REPO_DIR"
fi

echo "==> systemd сервис приложения"
cat > /etc/systemd/system/$SERVICE.service <<EOF
[Unit]
Description=Komilfo TanStack Start app
After=network.target

[Service]
Type=simple
WorkingDirectory=$APP_DIR
EnvironmentFile=$APP_DIR/.env
ExecStart=/usr/bin/node $APP_DIR/dist/server/index.mjs
Restart=always
RestartSec=3
User=root

[Install]
WantedBy=multi-user.target
EOF

echo "==> systemd сервис + таймер автодеплоя (каждые 2 минуты)"
cat > /etc/systemd/system/komilfo-deploy.service <<EOF
[Unit]
Description=Pull deploy Komilfo from GitHub
After=network-online.target

[Service]
Type=oneshot
Environment=REPO_URL=$REPO_URL
Environment=BRANCH=$BRANCH
ExecStart=/bin/bash $REPO_DIR/deploy/deploy.sh
EOF

cat > /etc/systemd/system/komilfo-deploy.timer <<'EOF'
[Unit]
Description=Check GitHub for new commits every 2 minutes

[Timer]
OnBootSec=1min
OnUnitActiveSec=2min
AccuracySec=15s
Unit=komilfo-deploy.service

[Install]
WantedBy=timers.target
EOF

systemctl daemon-reload
systemctl enable $SERVICE
systemctl enable --now komilfo-deploy.timer

echo "==> nginx reverse proxy"
cat > /etc/nginx/sites-available/$SERVICE <<EOF
server {
    listen 80;
    server_name $DOMAIN;

    client_max_body_size 20m;

    location ^~ /__l5e/assets-v1/ {
        root /var/www/app/media-root;
        try_files \$uri =404;
        access_log off;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
ln -sf /etc/nginx/sites-available/$SERVICE /etc/nginx/sites-enabled/$SERVICE
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo "==> Первый деплой"
FORCE=1 bash "$REPO_DIR/deploy/deploy.sh"

echo "==> Готово. Сайт: http://$(curl -s ifconfig.me || echo SERVER_IP)/"
echo "Логи деплоя:      journalctl -u komilfo-deploy -f"
echo "Логи приложения:  journalctl -u $SERVICE -f"
