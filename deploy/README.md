# Деплой на сервер Timeweb через GitHub Actions

Схема: Lovable → GitHub (авто-синхронизация) → GitHub Actions → сервер Timeweb (Node + nginx).

## 1. Подключить GitHub к Lovable
В редакторе Lovable: меню «+» в чате → GitHub → Connect project → выбрать репозиторий
`MarkKirov/remix-of-13.08.26`. После этого каждое изменение из Lovable автоматически
попадает в ветку `main`.

## 2. Настроить сервер (один раз)
В консоли сервера (root):

```bash
curl -fsSL https://raw.githubusercontent.com/MarkKirov/remix-of-13.08.26/main/deploy/server-setup.sh -o setup.sh
DOMAIN=ваш-домен.ру bash setup.sh
```

Скрипт установит Node.js 22, nginx, создаст `/var/www/app`, systemd-сервис
`komilfo-app` и reverse proxy на порт 3000.

Затем заполнить `/var/www/app/.env`:

```
PORT=3000
HOST=127.0.0.1
SUPABASE_URL=<из .env проекта>
SUPABASE_PUBLISHABLE_KEY=<из .env проекта>
SUPABASE_PROJECT_ID=<из .env проекта>
```

## 3. SSH-ключ для деплоя
На локальной машине (или на сервере):

```bash
ssh-keygen -t ed25519 -f deploy_key -N ""
```

- Содержимое `deploy_key.pub` → добавить в `/root/.ssh/authorized_keys` на сервере.
- Содержимое `deploy_key` (приватный) → в GitHub секрет `SSH_PRIVATE_KEY`.

## 4. Секреты репозитория GitHub
Settings → Secrets and variables → Actions → New repository secret:

| Имя | Значение |
| --- | --- |
| `SSH_HOST` | IP сервера (например 91.186.196.204) |
| `SSH_USER` | `root` |
| `SSH_PORT` | `22` (необязательно) |
| `SSH_PRIVATE_KEY` | приватный ключ деплоя |
| `VITE_SUPABASE_URL` | из `.env` проекта |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | из `.env` проекта |
| `VITE_SUPABASE_PROJECT_ID` | из `.env` проекта |
| `SUPABASE_URL` | из `.env` проекта |
| `SUPABASE_PUBLISHABLE_KEY` | из `.env` проекта |
| `SUPABASE_PROJECT_ID` | из `.env` проекта |

## 5. Первый деплой
Actions → «Deploy to Timeweb» → Run workflow. Далее деплой запускается автоматически
при каждом push в `main` (то есть при каждом изменении из Lovable).

После деплоя на сервере:

```bash
systemctl start komilfo-app
systemctl status komilfo-app
journalctl -u komilfo-app -f
```

## 6. HTTPS (после привязки домена)

```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d ваш-домен.ру -d www.ваш-домен.ру
```

## Примечания
- Сборка в CI идёт с `NITRO_PRESET=node_server`, поэтому получается обычный Node-сервер
  (`dist/server/index.mjs`), а не Cloudflare-бандл.
- База данных остаётся в Lovable Cloud. Если её тоже нужно перенести на свой сервер —
  это отдельная задача (self-hosted Supabase или Postgres).
