import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

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
            <p className="font-semibold text-neutral-900 mb-1">
              Мы используем файлы cookie
            </p>
            <p>
              Продолжая пользоваться сайтом, вы соглашаетесь на обработку
              персональных данных и использование файлов cookie в соответствии
              с{" "}
              <a
                href="/privacy"
                className="underline hover:no-underline"
                style={{ color: BRAND }}
              >
                Политикой конфиденциальности
              </a>
              .
            </p>
          </div>
          <button
            onClick={() => setVisible(false)}
            aria-label="Закрыть"
            className="shrink-0 rounded-full p-1 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-4 flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
          <button
            onClick={() => setVisible(false)}
            className="px-4 py-2 rounded-full text-sm font-medium text-neutral-700 border border-neutral-300 hover:bg-neutral-50 transition"
          >
            Отклонить
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: BRAND }}
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
