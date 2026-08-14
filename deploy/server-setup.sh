#!/usr/bin/env bash
# Одноразовая настройка сервера Timeweb (Ubuntu). Запускать на сервере от root:
#   bash server-setup.sh
set -euo pipefail

APP_DIR=/var/www/app
SERVICE=komilfo-app
DOMAIN="${DOMAIN:-_}"   # DOMAIN=example.ru bash server-setup.sh

echo "==> Пакеты"
apt-get update -y
apt-get install -y curl rsync nginx ca-certificates

echo "==> Node.js 22"
if ! command -v node >/dev/null || [ "$(node -v | cut -d. -f1)" != "v22" ]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

echo "==> Каталог приложения"
mkdir -p "$APP_DIR/.output"

echo "==> Файл окружения $APP_DIR/.env (заполнить значениями!)"
if [ ! -f "$APP_DIR/.env" ]; then
  cat > "$APP_DIR/.env" <<'EOF'
PORT=3000
HOST=127.0.0.1
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_PROJECT_ID=
EOF
  chmod 600 "$APP_DIR/.env"
fi

echo "==> systemd сервис"
cat > /etc/systemd/system/$SERVICE.service <<EOF
[Unit]
Description=Komilfo TanStack Start app
After=network.target

[Service]
Type=simple
WorkingDirectory=$APP_DIR
EnvironmentFile=$APP_DIR/.env
ExecStart=/usr/bin/node $APP_DIR/.output/server/index.mjs
Restart=always
RestartSec=3
User=root

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable $SERVICE

echo "==> nginx reverse proxy"
cat > /etc/nginx/sites-available/$SERVICE <<EOF
server {
    listen 80;
    server_name $DOMAIN;

    client_max_body_size 20m;

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

echo "==> Готово. Дальше:"
echo "1) Заполнить $APP_DIR/.env"
echo "2) Добавить публичный SSH-ключ деплоя в /root/.ssh/authorized_keys"
echo "3) Запустить деплой в GitHub Actions, затем: systemctl start $SERVICE"
