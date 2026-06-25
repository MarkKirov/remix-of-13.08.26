import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/komilfo_hero_v2.mp4.asset.json";

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
  title: React.ReactNode;
  paragraphs: string[];
  cta: string;
};

const slides: Slide[] = [
  {
    title: (
      <>
        Не меняем внешность, а{"\n"}
        <span style={{ color: BRAND }}>сохраняем</span> красоту
      </>
    ),
    paragraphs: [
      "Проектируем персональную стратегию сохранения вашей естественной красоты.",
      "Опираемся на глубокую медицинскую диагностику, а не слепые тренды.",
      "Уходим от шаблонов, уколов и модных процедур.",
    ],
    cta: "Забрать персональную стратегию",
  },
  {
    title: (
      <>
        Чистая медицина и абсолютная безопасность{"\n"}
        <span style={{ color: BRAND }}>вместо подвальных рисков</span>
      </>
    ),
    paragraphs: [
      "Не продаём процедуры — отвечаем за ваше здоровье и красоту.",
      "Собираем анамнез и проводим диагностику, защищая от аллергии, шрамов и рубцов.",
      "Применяем сертифицированные препараты и медицинское оборудование.",
    ],
    cta: "Записаться на безопасную диагностику",
  },
  {
    title: (
      <>
        Создаём <span style={{ color: BRAND }}>индивидуальный</span> план жизни для кожи{"\n"}
        вместо разовых уколов
      </>
    ),
    paragraphs: [
      "Официально ставим диагноз и ведём историю болезни.",
      "Бережно сохраняем вашу природную индивидуальность и естественность.",
      "Комбинируем методы на базе вашей анатомии и физиологии.",
    ],
    cta: "Получить план сохранения молодости на десятилетия",
  },
];

function Index() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 12000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: 1 | -1) =>
    setActive((i) => (i + dir + slides.length) % slides.length);

  return (
    <div className="bg-neutral-950 text-white">
      {/* Первый экран — видео на всю высоту viewport с текстом поверх */}
      <section className="relative h-screen min-h-screen overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        {/* Дескриптор — тонким начертанием прямо поверх видео */}
        <header className="absolute inset-x-0 top-0 z-20 w-full pt-6 md:pt-8">
          <div className="mx-auto max-w-6xl px-6 text-center text-white">
            {/* Здесь позже будет прозрачный логотип */}
            <p className="font-caption text-[10px] uppercase tracking-[0.14em] text-white/90 md:text-xs">
              17 лет сохраняем вашу природную красоту и индивидуальность
            </p>
            <p className="font-caption text-[10px] uppercase tracking-[0.14em] text-white/75 mt-1">
              без комплексов и рисков для здоровья
            </p>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex h-full min-h-screen max-w-6xl items-center px-6 pt-20 pb-8 md:px-8 md:pb-12 md:pt-24">
          <div className="flex w-full items-center gap-6 md:gap-10">
            {/* Стрелка назад */}
            <button
              type="button"
              aria-label="Предыдущий слайд"
              onClick={() => go(-1)}
              className="shrink-0 grid h-9 w-9 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition-colors md:h-10 md:w-10"
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

            {/* Слайды + точки */}
            <div className="min-w-0 flex-1 px-1 md:px-2">
              {/* Слайды — все рендерятся в одной grid-ячейке, без скачков высоты */}
              <div className="grid">
                {slides.map((s, i) => (
                  <article
                    key={i}
                    aria-hidden={i !== active}
                    style={{ gridArea: "1 / 1 / 2 / 2" }}
                    className={`flex flex-col justify-between transition-opacity duration-700 ease-out ${
                      i === active ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="pb-6 md:pb-8">
                      <h1 className="font-display max-w-4xl whitespace-pre-line text-2xl leading-[1.15] tracking-[0.01em] text-[#d4d4d4] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] md:text-3xl lg:text-5xl">
                        {s.title}
                      </h1>

                      <ul className="mt-6 max-w-2xl space-y-3 md:mt-8 md:space-y-4">
                        {s.paragraphs.map((p, j) => (
                          <li key={j} className="font-body flex gap-4 text-sm font-light leading-relaxed text-[#c4c4c4] md:text-base">
                            <span
                              aria-hidden
                              className="mt-2 h-2 w-2 shrink-0 rounded-full ring-2 ring-white/30 md:mt-2.5"
                              style={{ backgroundColor: BRAND }}
                            />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="group inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-xs font-medium uppercase tracking-[0.1em] transition-all"
                        style={{
                          borderColor: BRAND,
                          color: "#fff",
                          backgroundColor: BRAND,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#C24CBA";
                          e.currentTarget.style.borderColor = "#C24CBA";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = BRAND;
                          e.currentTarget.style.borderColor = BRAND;
                        }}
                      >
                        <span>{s.cta}</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
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

            {/* Стрелка вперёд */}
            <button
              type="button"
              aria-label="Следующий слайд"
              onClick={() => go(1)}
              className="shrink-0 grid h-9 w-9 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition-colors md:h-10 md:w-10"
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
          </div>
        </div>
      </section>
    </div>
  );
}
