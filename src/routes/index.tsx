import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/komilfo_hero_v2.mp4.asset.json";
import doctorConsultation from "@/assets/doctor-consultation.jpg.asset.json";
import productPhilosophy from "@/assets/product-philosophy.png.asset.json";
import serviceEsthetic from "@/assets/service_esthetic.png.asset.json";
import serviceMedical from "@/assets/service_medical.png.asset.json";
import serviceHardware from "@/assets/service_hardware.png.asset.json";
import comparisonBg from "@/assets/comparison-bg.png.asset.json";
import headerLogo from "@/assets/header_logo.svg.asset.json";
import consultationBg from "@/assets/consultation-bg.png.asset.json";
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
      { title: "Комильфо — 17 лет сохраняем вашу естественную красоту" },
      {
        name: "description",
        content:
          "Комильфо — клиника, где сохраняют естественную красоту без рисков для здоровья. Медицинская диагностика, персональная стратегия, сертифицированные препараты.",
      },
      { property: "og:title", content: "Комильфо — сохраняем вашу естественную красоту" },
      {
        property: "og:description",
        content:
          "17 лет сохраняем вашу естественную красоту и индивидуальность — без комплексов и рисков для здоровья.",
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
        <span style={{ color: BRAND }}>сохраняем</span> естественную красоту
      </>
    ),
    paragraphs: [
      "Подбираем методики, которые подходят именно вам.",
      "Проектируем персональную стратегию сохранения вашей\nестественной красоты.",
    ],
    cta: "Забрать персональную стратегию",
  },
  {
    title: (
      <>
        Медицинский подход и безопасность{"\n"}
        <span style={{ color: BRAND }}>вместо подпольных процедур</span>
      </>
    ),
    paragraphs: [
      "Вы не получите то, что вы хотите, но мы дадим то, что необходимо именно вам.",
      "Используем различные методики, сохраняя индивидуальный подход.",
      "Работаем на медицинском оборудовании и с сертифицированными препаратами.",
    ],
    cta: "Записаться на безопасную диагностику",
  },
  {
    title: (
      <>
        Создаём <span style={{ color: BRAND }}>индивидуальный</span> план жизни для кожи
      </>
    ),
    paragraphs: [
      "Сохраняем историю ваших обращений.",
      "Поддерживаем вашу природную индивидуальность и естественность.",
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
      title: "Врачебная\nкосметология",
      image: serviceHardware.url,
    },
    {
      title: "Эстетическая\nкосметология",
      image: serviceEsthetic.url,
    },
    {
      title: "Аппаратная\nкосметология",
      image: serviceMedical.url,
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

        {/* Дескриптор и логотип — тонким начертанием прямо поверх видео */}
        <header className="absolute inset-x-0 top-0 z-20 w-full pt-4 md:pt-6">
          <div className="mx-auto flex max-w-6xl items-start px-6 md:px-8">
            <img
              src={headerLogo.url}
              alt="Camille Four"
              className="w-40 shrink-0 md:w-52"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <div className="flex-1 text-center">
              <p className="font-caption text-[9px] uppercase tracking-[0.14em] text-white/90 md:text-[10px]">
                17 лет сохраняем вашу естественную красоту и индивидуальность
              </p>
              <p className="font-caption text-[9px] uppercase tracking-[0.14em] text-white/75 mt-1 md:text-[10px]">
                без комплексов и рисков для здоровья
              </p>
            </div>
            <div className="w-24 shrink-0 md:w-36" aria-hidden="true" />
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


      {/* Второй экран — призыв на бесплатную диагностику */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <img
          src={consultationBg.url}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 55%" }}
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[#AE31A6]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center md:px-8 md:py-20">
          <div className="md:-translate-y-10">
            <h2 className="font-display whitespace-pre-line text-xl leading-[1.25] tracking-[0.01em] text-[#e5e5e5] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] md:text-3xl lg:text-4xl">
              {"Подберём персональную\u00a0\nстратегию вашей красоты"}
              <span className="font-body my-2 block text-sm font-light leading-relaxed text-[#c4c4c4] md:my-3 md:text-base">
                и проведём аудит вашей внешности на основе вашего генотипа
              </span>
            </h2>
            <button
              type="button"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-xs font-normal uppercase tracking-[0.1em] transition-all md:mt-10 md:px-6 md:py-3"
              style={{ borderColor: BRAND, color: "#fff", backgroundColor: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              <span>Записаться на бесплатную консультацию</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
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
                    className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-translate-y-1"
                    style={{ backgroundColor: BRAND }}
                  >
                    {/* Обёртка изображения — уменьшается при наведении, открывая рамку */}
                    <div
                      className="absolute inset-0 overflow-hidden rounded-2xl transition-all duration-700 group-hover:inset-3 group-hover:rounded-xl"
                    >
                      {s.image ? (
                        <img
                          src={s.image}
                          alt=""
                          className="h-full w-full scale-105 object-cover grayscale-0 saturate-[1.2] transition-all duration-700 group-hover:scale-100 group-hover:grayscale"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-neutral-400" />
                      )}
                      {/* Нейтральное затемнение снизу для читаемости текста */}
                      <div
                        className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-80"
                        style={{
                          background: "linear-gradient(180deg, rgba(20,20,20,0.25) 0%, rgba(20,20,20,0.55) 60%, rgba(20,20,20,0.85) 100%)",
                        }}
                      />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-between p-7 text-left md:p-8">
                      <h3 className="font-body whitespace-pre-line text-xl leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] md:text-2xl lg:text-[1.7rem]">
                        {s.title}
                      </h3>
                      <span
                        className="mt-5 self-end inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-[10px] font-normal uppercase tracking-[0.14em] text-white backdrop-blur-sm opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white group-hover:text-neutral-900 md:text-xs"
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

      {/* Четвёртый экран — философия продукта: текст / изображение */}
      <section className="relative flex min-h-screen flex-col overflow-hidden md:flex-row">
        {/* Левая половина — розовый фон с текстом */}
        <div
          className="flex w-full items-center justify-center px-8 py-16 md:w-1/2 md:px-12 lg:px-20"
          style={{ backgroundColor: BRAND }}
        >
          <div className="max-w-xl">
            <h2 className="font-display text-2xl leading-[1.15] tracking-[0.01em] text-[#f5f5f5] drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)] md:text-3xl lg:text-4xl">
              Наш продукт — не препарат в шприце,{"\n"}
              а ваше уверенное отражение в зеркале
            </h2>
            <p className="font-body mt-6 text-sm font-light leading-relaxed text-[#d4d4d4] md:mt-8 md:text-base">
              Мы создаём комплексную стратегию, комбинируем методы, чтобы на десятилетия сохранять вашу естественную молодость и индивидуальность.
            </p>
            <p className="font-body mt-4 text-sm font-light leading-relaxed text-[#d4d4d4] md:text-base">
              Поэтому мы не бросаем вас после процедуры, а строго проверяем результат и следим за тем, как услуга интегрировалась в ваш организм.
            </p>
          </div>
        </div>

        {/* Правая половина — изображение */}
        <div className="relative h-[60vh] w-full md:h-auto md:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={productPhilosophy.url}
            alt="Косметологическая процедура в клинике Комильфо"
            decoding="async"
          />
        </div>
      </section>

      {/* Сравнительная таблица — Комильфо vs нелегальные кабинеты */}
      <section className="relative overflow-hidden">
        <img
          src={comparisonBg.url}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 30%" }}
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#AE31A6]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
          <h2 className="font-display text-2xl leading-[1.1] tracking-[0.01em] text-[#e5e5e5] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] md:text-4xl lg:text-5xl">
            Ваше спокойствие и безопасность{"\n"}
            <span style={{ color: BRAND }}>— это тоже часть красивого отражения</span>
          </h2>
          <p className="font-body mt-6 max-w-4xl whitespace-pre-line text-sm font-light leading-relaxed text-[#c4c4c4] md:mt-8 md:text-base">
            Настоящий психологический комфорт появляется тогда, когда вы на 100% уверены в стерильности, подлинности препаратов и квалификации врача.{"\n"}
            У нелегальных кабинетов правила игры совершенно другие.
          </p>

          <div className="mt-10 rounded-3xl bg-black/40 p-6 backdrop-blur-md ring-1 ring-white/10 md:mt-14 md:p-10">
            <div className="hidden grid-cols-2 gap-8 border-b border-white/15 pb-5 md:grid">
              <div className="font-display text-lg tracking-[0.01em]" style={{ color: BRAND }}>
                Профессиональная медицина «Комильфо»
              </div>
              <div className="font-caption text-[10px] uppercase tracking-[0.18em] text-white/60">
                Нелегальные кабинеты
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {[
                {
                  us: (
                    <>
                      Строго сертифицированные препараты с контролем госбиомаркировки <span className="font-medium" style={{ color: BRAND }}>«Честный Знак»</span>.
                    </>
                  ),
                  them: "Незарегистрированный контрафакт из интернета — риск тяжёлой аллергии и удушья.",
                },
                {
                  us: "Серьёзная медицинская техника, регулярно проходящая официальное ТО.",
                  them: "Дешёвые китайские аппараты, которые по документам являются «бытовыми».",
                },
                {
                  us: "Официальный диагноз, история болезни и проверка результата на каждом приёме.",
                  them: "Работа «вслепую» без документов на руках, фальшивые дипломы из принтера.",
                },
                {
                  us: (
                    <>
                      <span className="font-medium" style={{ color: BRAND }}>Исключён:</span> тактика подбирается индивидуально по генотипу, без рисков шрамирования.
                    </>
                  ),
                  them: (
                    <>
                      В лучшем случае — <span className="font-medium text-white">пожизненный шрам</span>, внутренние рубцы, в худшем — смерть.
                    </>
                  ),
                },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 gap-3 py-6 md:grid-cols-2 md:gap-8 md:py-7">
                  <div className="font-body text-sm font-light leading-relaxed text-[#e5e5e5] md:text-base">
                    <div className="mb-1 font-caption text-[10px] uppercase tracking-[0.18em] md:hidden" style={{ color: BRAND }}>
                      Комильфо
                    </div>
                    {row.us}
                  </div>
                  <div className="font-body text-sm font-light leading-relaxed text-white/55 md:text-base">
                    <div className="mb-1 font-caption text-[10px] uppercase tracking-[0.18em] text-white/40 md:hidden">
                      Нелегальные кабинеты
                    </div>
                    {row.them}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Экран призыва с фоновым изображением */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center top" }}
          src={doctorConsultation.url}
          alt="Врач клиники Комильфо"
          decoding="async"
        />
        {/* Затемнение с розоватым оттенком */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[#AE31A6]/10" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/25 to-transparent" />

        {/* Контент */}
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-end justify-center px-6 py-16 text-right md:px-8 md:py-20">
          <h2 className="font-display max-w-xl whitespace-normal text-2xl leading-[1.15] tracking-[0.01em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] md:text-3xl lg:text-4xl" style={{ color: BRAND }}>
            Не рискуйте здоровьем
          </h2>
          <p className="font-body mt-4 max-w-lg text-base font-light leading-relaxed text-[#c4c4c4] md:mt-5 md:text-lg">
            мы бесплатно подберём персональную стратегию вашей красоты на встрече с косметологом
          </p>

          <button
            type="button"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-xs font-normal uppercase tracking-[0.1em] transition-all md:mt-10 md:px-7 md:py-3 md:text-sm"
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
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
}
