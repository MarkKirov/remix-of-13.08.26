#!/usr/bin/env bash
# Прикрепление домена к этому серверу + бесплатный SSL (Let's Encrypt).
# Запуск на сервере:
#   bash /var/www/app/repo/deploy/setup-domain.sh komilfocentr.ru
# ВАЖНО: сначала A-записи домена (@ и www) должны указывать на IP этого сервера.
set -euo pipefail

DOMAIN="${1:-komilfocentr.ru}"
SERVER_IP="$(curl -s -4 https://api.ipify.org || true)"

echo "==> Домен: $DOMAIN"
echo "==> IP этого сервера: ${SERVER_IP:-неизвестен}"

RESOLVED="$(getent ahostsv4 "$DOMAIN" | awk '{print $1; exit}' || true)"
echo "==> $DOMAIN сейчас указывает на: ${RESOLVED:-нет A-записи}"

if [ -n "$SERVER_IP" ] && [ "$RESOLVED" != "$SERVER_IP" ]; then
  echo "!!! A-запись домена не указывает на этот сервер."
  echo "!!! Сначала поменяйте A-записи (@ и www) на $SERVER_IP, затем запустите скрипт снова."
  echo "!!! Продолжаю только настройку nginx (без SSL)."
  SKIP_SSL=1
else
  SKIP_SSL=0
fi

CONF=/etc/nginx/sites-available/komilfo-app
if [ -f "$CONF" ]; then
  sed -i "s/^\(\s*\)server_name .*/\1server_name ${DOMAIN} www.${DOMAIN};/" "$CONF"
  nginx -t && systemctl reload nginx
  echo "==> nginx настроен на ${DOMAIN} и www.${DOMAIN}"
else
  echo "!!! Не найден $CONF — сначала выполните deploy/server-setup.sh"
  exit 1
fi

if [ "$SKIP_SSL" = "0" ]; then
  apt-get update -y
  apt-get install -y certbot python3-certbot-nginx
  certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos \
    --register-unsafely-without-email --redirect
  systemctl reload nginx
  echo "==> Готово: https://$DOMAIN"
else
  echo "==> SSL пропущен. После смены DNS запустите скрипт повторно."
fi
