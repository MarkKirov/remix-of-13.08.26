# Автодеплой: Lovable → GitHub → сервер Timeweb

Схема: Lovable пушит код в GitHub (`main`) → GitHub Actions собирает Node-сборку → rsync на сервер `91.186.196.204` → systemd-сервис `komilfo-app` за nginx.

Секрет нужен ровно ОДИН: `SSH_PRIVATE_KEY`. Всё остальное (адрес сервера, публичные ключи бэкенда) уже прописано открыто в `.github/workflows/deploy.yml` — это publishable-значения, их не нужно скрывать. Репозиторий можно держать публичным.

## 1. Подключить GitHub

В Lovable: **GitHub → Connect** и выбрать репозиторий `MarkKirov/remix-of-13.08.26`. После этого каждое изменение автоматически уходит в `main`.

## 2. Настроить сервер (один раз)

В консоли сервера от root:

```bash
curl -fsSL https://raw.githubusercontent.com/MarkKirov/remix-of-13.08.26/main/deploy/server-setup.sh -o /root/server-setup.sh
bash /root/server-setup.sh
```

Скрипт установит Node.js 22, nginx, создаст `/var/www/app/.env` (уже заполнен), systemd-сервис и reverse proxy на порт 3000.

## 3. SSH-ключ для деплоя

На сервере:

```bash
ssh-keygen -t ed25519 -f /root/.ssh/deploy_key -N ""
cat /root/.ssh/deploy_key.pub >> /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys
cat /root/.ssh/deploy_key      # ЭТО скопировать целиком
```

В GitHub: **Settings → Secrets and variables → Actions → New repository secret**

- Name: `SSH_PRIVATE_KEY`
- Value: весь приватный ключ, включая строки `-----BEGIN...` и `-----END...`

## 4. Запустить деплой

GitHub → **Actions → Deploy to Timeweb → Run workflow**. Дальше деплой идёт автоматически при каждом пуше.

После первого деплоя на сервере:

```bash
systemctl start komilfo-app
systemctl status komilfo-app
```

Сайт откроется по адресу http://91.186.196.204

## 5. Домен и HTTPS (позже)

Когда домен будет готов:

```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d example.ru -d www.example.ru
```

## Диагностика

```bash
journalctl -u komilfo-app -n 100 --no-pager   # логи приложения
nginx -t && systemctl reload nginx            # проверка nginx
```
