import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/komilfo_main.mp4.asset.json";

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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: 1 | -1) =>
    setActive((i) => (i + dir + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Дескриптор */}
      <header
        style={{ backgroundColor: BRAND }}
        className="relative z-20 w-full text-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-5 text-center">
          {/* Здесь позже будет логотип */}
          <p className="font-display text-base md:text-lg leading-snug uppercase tracking-[0.08em]">
            17 лет сохраняем вашу природную красоту и индивидуальность
          </p>
          <p className="font-display text-xs md:text-sm opacity-90 mt-2 uppercase tracking-[0.18em]">
            без комплексов и рисков для здоровья
          </p>
        </div>
      </header>

      {/* Первый экран — слайдшоу */}
      <section className="relative overflow-hidden">
        {/* Видео фон */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Затемнение */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-16 py-20 md:py-32 min-h-[640px]">
        {/* Стрелки */}
        <button
          type="button"
          aria-label="Предыдущий слайд"
          onClick={() => go(-1)}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-11 w-11 md:h-12 md:w-12 rounded-full border border-white/40 bg-white/10 backdrop-blur text-white transition-colors"
          style={{ transition: "background-color .2s, color .2s, border-color .2s" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = BRAND;
            e.currentTarget.style.borderColor = BRAND;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "";
            e.currentTarget.style.borderColor = "";
          }}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Следующий слайд"
          onClick={() => go(1)}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-11 w-11 md:h-12 md:w-12 rounded-full border border-white/40 bg-white/10 backdrop-blur text-white transition-colors"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = BRAND;
            e.currentTarget.style.borderColor = BRAND;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "";
            e.currentTarget.style.borderColor = "";
          }}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Слайды — все рендерятся в одной grid-ячейке, без скачков высоты */}
        <div className="grid">
          {slides.map((s, i) => (
            <article
              key={i}
              aria-hidden={i !== active}
              style={{ gridArea: "1 / 1 / 2 / 2" }}
              className={`transition-opacity duration-700 ease-out ${
                i === active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <h1 className="font-display text-3xl md:text-5xl leading-[1.15] uppercase tracking-[0.01em] text-white max-w-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                {s.title}
              </h1>

              <ul className="mt-10 space-y-5 max-w-3xl">
                {s.paragraphs.map((p, j) => (
                  <li key={j} className="flex gap-4 text-base md:text-lg text-white/90 leading-relaxed">
                    <span
                      aria-hidden
                      className="mt-2.5 h-2 w-2 shrink-0 rounded-full ring-2 ring-white/30"
                      style={{ backgroundColor: BRAND }}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <button
                  type="button"
                  className="group inline-flex items-center gap-3 rounded-full border-2 px-8 py-4 text-sm md:text-base font-medium uppercase tracking-[0.12em] transition-all"
                  style={{
                    borderColor: BRAND,
                    color: "#fff",
                    backgroundColor: BRAND,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = BRAND;
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  <span>{s.cta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Навигация по слайдам */}
        <div className="mt-14 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Слайд ${i + 1}`}
              onClick={() => setActive(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === active ? 40 : 16,
                backgroundColor: i === active ? BRAND : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}
