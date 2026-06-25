import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/komilfo_hero_v2.mp4.asset.json";
import secondImage from "@/assets/komilfo_second.png.asset.json";
import serviceEsthetic from "@/assets/service_esthetic.png.asset.json";
import serviceMedical from "@/assets/service_medical.png.asset.json";
import serviceHardware from "@/assets/service_hardware.png.asset.json";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      "Собираем анамнез и проводим диагностику,\nзащищая от аллергии, шрамов и рубцов.",
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

  const services = [
    {
      title: "Эстетическая\nкосметология",
      image: serviceEsthetic.url,
    },
    {
      title: "Врачебная\nкосметология",
      image: serviceMedical.url,
    },
    {
      title: "Аппаратная\nкосметология",
      image: serviceHardware.url,
    },
  ];

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
                            <span className="whitespace-pre-line">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="group inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-xs font-normal uppercase tracking-[0.1em] transition-all"
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

      {/* Второй экран — призыв с фоновым изображением */}
      <section className="relative min-h-[80vh] overflow-hidden">
        {/* Фоновое изображение */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 25%" }}
          src={secondImage.url}
          alt="Косметолог делает массаж лица"
          decoding="async"
        />
        {/* Затемнение с розоватым оттенком */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#AE31A6]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        {/* Контент */}
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-start px-6 pt-20 pb-16 text-center md:px-8 md:pt-28 md:pb-20 lg:pt-36">

          <h2 className="font-display max-w-3xl whitespace-normal text-2xl leading-[1.15] tracking-[0.01em] text-[#c4c4c4] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] md:text-3xl lg:text-4xl">
            Бесплатно подберем персональную <span className="whitespace-nowrap">стратегию вашей красоты</span>
          </h2>
          <p className="font-body mt-5 max-w-3xl text-base font-light leading-relaxed text-[#b8b8b8] md:mt-6 md:text-lg">
            и проведем аудит вашей внешности на основе вашего генотипа
          </p>

          <button
            type="button"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border-2 px-8 py-4 text-sm font-normal uppercase tracking-[0.1em] transition-all md:mt-12 md:px-10 md:py-5 md:text-base"
            style={{
              borderColor: BRAND,
              color: "#fff",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = BRAND;
              e.currentTarget.style.borderColor = BRAND;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = BRAND;
            }}
          >
            <span>Записаться на бесплатную консультацию</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Третий экран — услуги на сером фоне */}
      <section className="relative bg-neutral-200 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2
            className="font-display text-center text-3xl tracking-[0.01em] md:text-4xl lg:text-5xl"
            style={{ color: BRAND }}
          >
            Наши услуги
          </h2>
          <p className="font-caption mt-3 text-center text-[10px] uppercase tracking-[0.18em] text-neutral-500 md:text-xs">
            Выберите направление, чтобы узнать подробнее
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-7">
            {services.map((s) => (
              <Dialog key={s.title}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-translate-y-1"
                  >
                    {s.image ? (
                      <img
                        src={s.image}
                        alt=""
                        className="absolute inset-0 h-full w-full scale-105 object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-neutral-400" />
                    )}
                    {/* Розовое затемнение в фирменном цвете */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, rgba(20,20,20,0.45) 0%, ${BRAND}55 60%, ${BRAND}88 100%)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute inset-0 flex flex-col items-center justify-end p-7 text-center md:p-8">
                      <h3 className="font-display whitespace-pre-line text-xl leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] md:text-2xl lg:text-[1.7rem]">
                        {s.title}
                      </h3>
                      <span
                        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-[10px] font-normal uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-neutral-900 md:text-xs"
                      >
                        Подробнее
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl" style={{ color: BRAND }}>
                      {s.title.replace("\n", " ")}
                    </DialogTitle>
                    <DialogDescription className="font-body pt-2 text-sm leading-relaxed text-neutral-600">
                      Здесь скоро появится подробное описание услуг, методик и
                      специалистов этого направления. Заглушка для предпросмотра.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
