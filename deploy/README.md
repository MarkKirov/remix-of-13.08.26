# Деплой на сервер Timeweb (pull-модель)

Схема: Lovable → GitHub (autodeploy) → **сервер сам** делает `git pull`, собирает и перезапускает приложение.
Никаких SSH-ключей в GitHub и никаких входящих подключений на сервер не нужно. Репозиторий может быть публичным.

## 1. Настройка сервера (один раз)

На сервере под root:

```bash
apt-get update -y && apt-get install -y git
git clone https://github.com/MarkKirov/remix-of-13.08.26.git /var/www/app/repo
bash /var/www/app/repo/deploy/server-setup.sh
```

Скрипт сам:

- установит Node.js 22, Bun, git, nginx;
- создаст `/var/www/app/.env` с публичными ключами бэкенда;
- создаст сервис приложения `komilfo-app` (порт 3000, nginx проксирует 80 → 3000);
- создаст таймер `komilfo-deploy.timer` — каждые 2 минуты проверяет новые коммиты в `main`;
- выполнит первый деплой.

Если репозиторий приватный — сделайте его публичным (Settings → General → Change visibility),
это самый простой вариант.

## 2. Как работает автодеплой

1. Вы просите изменения в Lovable → коммит уходит в GitHub.
2. Через ≤2 минуты таймер на сервере видит новый коммит, тянет его, собирает (`NITRO_PRESET=node_server bun run build`) и перезапускает `komilfo-app`.
3. Если коммитов нет — деплой пропускается (ничего не пересобирается).

## 3. Полезные команды

```bash
# запустить деплой прямо сейчас
systemctl start komilfo-deploy

# принудительная пересборка
FORCE=1 bash /var/www/app/repo/deploy/deploy.sh

# логи
journalctl -u komilfo-deploy -f
journalctl -u komilfo-app -f

# статус
systemctl status komilfo-app
systemctl list-timers | grep komilfo
```

## 4. Домен и HTTPS (позже)

```bash
DOMAIN=example.ru bash /var/www/app/repo/deploy/server-setup.sh
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d example.ru -d www.example.ru
```

## Примечания

- GitHub Actions (`.github/workflows/deploy.yml`) теперь только проверяет сборку — деплой делает сервер.
- Сборка идёт на сервере, нужно ≥2 ГБ RAM. Если сборка падает по памяти — добавьте swap:
  `fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile`
- Вместо таймера можно повесить вебхук GitHub, но таймер надёжнее при блокировках сети.
