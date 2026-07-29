import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import privacyPolicy from "@/assets/privacy-policy.pdf.asset.json";

const STORAGE_KEY = "komilfo_cookie_consent_v1";
const BRAND = "#AE31A6";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ accepted: true, date: new Date().toISOString() })
      );
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Согласие на использование файлов cookie"
      className="fixed inset-x-3 bottom-3 z-[100] sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-md"
    >
      <div className="rounded-2xl border border-black/10 bg-white shadow-2xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div
            className="shrink-0 rounded-full p-2 text-white"
            style={{ backgroundColor: BRAND }}
            aria-hidden
          >
            <Cookie className="w-5 h-5" />
          </div>
          <div className="flex-1 text-sm text-neutral-700 leading-relaxed">
            <p>
              Мы используем файлы Cookie, сервис web-аналитики Яндекс.Метрика. Во время
              посещения сайта Медико-эстетического центра «Комильфо» вы соглашаетесь с тем,
              что мы обрабатываем ваши персональные данные с использованием метрических
              программ в порядке, установленном{" "}
              <a
                href={privacyPolicy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
                style={{ color: BRAND }}
              >
                Политикой обработки и защиты персональных данных
              </a>
              . Если вы не хотите, чтобы ваши данные обрабатывались, покиньте сайт.
            </p>
            <p className="mt-3 font-medium text-neutral-900">Ознакомлен(а), согласен(на)</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={accept}
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: BRAND }}
          >
            Подтвердить
          </button>
        </div>

      </div>
    </div>
  );
}
