import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Комильфо — 17 лет сохраняем вашу природную красоту" },
      {
        name: "description",
        content:
          "Комильфо — клиника, где сохраняют естественную красоту без рисков для здоровья. Медицинская диагностика, персональная стратегия, сертифицированные препараты.",
      },
      { property: "og:title", content: "Комильфо — сохраняем вашу природную красоту" },
      {
        property: "og:description",
        content:
          "17 лет сохраняем вашу природную красоту и индивидуальность — без комплексов и рисков для здоровья.",
      },
    ],
  }),
  component: Index,
});

const BRAND = "#AE31A6";

type Slide = {
  title: string;
  paragraphs: string[];
  cta: string;
};

const slides: Slide[] = [
  {
    title: "Не меняем внешность, а сохраняем красоту",
    paragraphs: [
      "Проектируем персональную стратегию сохранения вашей естественной красоты.",
      "Опираемся на глубокую медицинскую диагностику, а не слепые тренды из Интернета.",
      "Уходим от шаблонов, уколов и модных процедур ради вашего психологического комфорта.",
    ],
    cta: "Забрать персональную стратегию сохранения естественной красоты",
  },
  {
    title: "Чистая медицина и абсолютная безопасность вместо подвальных рисков",
    paragraphs: [
      "Мы не продаём процедуры — мы отвечаем за ваше здоровье и красоту.",
      "Собираем исчерпывающий анамнез и проводим диагностику, защищая ваш организм от непредсказуемых реакций на препарат, шрамов и рубцов.",
      "Применяем только сертифицированные препараты с жёстким контролем маркировки и медицинское оборудование.",
    ],
    cta: "Записаться на безопасную диагностику",
  },
  {
    title: "Создаём индивидуальный план жизни для кожи, а не продаём разовые уколы",
    paragraphs: [
      "Мы официально ставим диагноз и ведём историю болезни с базой фотографий, ювелирно отслеживая, как услуги интегрируются в ваш организм.",
      "Бережно сохраняем и консервируем ту индивидуальность и естественность, которую вам изначально дала природа.",
      "Комбинируем методы, совершенствуя анатомию и физиологию кожи как органа.",
    ],
    cta: "Получить план сохранения молодости на десятилетия",
  },
];

function Index() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Дескриптор */}
      <header
        style={{ backgroundColor: BRAND }}
        className="w-full text-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-5 text-center">
          {/* Здесь позже будет логотип */}
          <p className="text-base md:text-lg font-medium leading-snug">
            17 лет сохраняем вашу природную красоту и индивидуальность
          </p>
          <p className="text-sm md:text-base opacity-90 mt-1">
            без комплексов и рисков для здоровья
          </p>
        </div>
      </header>

      {/* Первый экран — слайдшоу */}
      <section className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="relative min-h-[420px] md:min-h-[460px]">
          {slides.map((s, i) => (
            <article
              key={i}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
                {s.title}
              </h1>
              <div className="mt-6 space-y-4 text-base md:text-lg text-neutral-700 leading-relaxed">
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  style={{ backgroundColor: BRAND }}
                  className="inline-flex items-center justify-center rounded-full px-7 py-4 text-white text-sm md:text-base font-medium shadow-sm transition-opacity hover:opacity-90"
                >
                  {s.cta}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Навигация по слайдам */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Слайд ${i + 1}`}
              onClick={() => setActive(i)}
              className="h-2.5 rounded-full transition-all"
              style={{
                width: i === active ? 32 : 10,
                backgroundColor: i === active ? BRAND : "#E5E5E5",
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
