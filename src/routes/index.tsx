import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Plus } from "lucide-react";
import heroVideo from "@/assets/komilfo_hero_v2.mp4.asset.json";
import doctorConsultation from "@/assets/doctor-consultation.jpg.asset.json";
import productPhilosophy from "@/assets/product-philosophy.png.asset.json";
import serviceEsthetic from "@/assets/service_esthetic.png.asset.json";
import serviceMedical from "@/assets/service_medical.png.asset.json";
import serviceHardware from "@/assets/service_hardware.png.asset.json";
import serviceMassage from "@/assets/service-massage.jpeg.asset.json";
import comparisonBg from "@/assets/comparison-bg.png.asset.json";
import headerLogo from "@/assets/header_logo.svg.asset.json";
import consultationBg from "@/assets/consultation-bg.png.asset.json";
import teamPhoto from "@/assets/team.jpg";
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

type Procedure = {
  name: string;
  price: string;
  preparations: string[];
  detailsLabel?: string;
  device?: string;
};

const medicalProcedures: Procedure[] = [
  {
    name: "Ботулинотерапия",
    price: "от 3 900 ₽",
    preparations: ["Препарат — уточняется", "Препарат — уточняется"],
  },
  {
    name: "Биоревитализация. Биорепарация",
    price: "от 6 500 ₽",
    preparations: ["Препарат — уточняется", "Препарат — уточняется"],
  },
  {
    name: "Гидрорезерв губ",
    price: "от 8 900 ₽",
    preparations: ["Препарат — уточняется"],
  },
  {
    name: "Увеличение объёма губ",
    price: "от 12 000 ₽",
    preparations: ["Препарат — уточняется"],
  },
  {
    name: "Лечение гипергидроза",
    price: "от 15 000 ₽",
    preparations: ["Препарат — уточняется"],
  },
  {
    name: "Армирование кожи полимолочной кислотой",
    price: "от 18 000 ₽",
    preparations: ["Препарат — уточняется"],
  },
];

function ProcedureRow({ procedure }: { procedure: Procedure }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group">
      <div
        className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white pl-5 pr-2 py-2 transition-all hover:border-[color:var(--brand-color)]"
        style={{ ["--brand-color" as string]: BRAND }}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-1 items-center gap-3 text-left"
          aria-expanded={open}
        >
          <span
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all"
            style={{
              borderColor: BRAND,
              color: BRAND,
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
            aria-hidden
          >
            <Plus className="h-3.5 w-3.5" />
          </span>
          <span className="font-body flex-1 text-sm font-normal text-neutral-900 md:text-base">
            {procedure.name}
          </span>
          <span
            className="font-caption hidden shrink-0 text-sm font-bold uppercase tracking-[0.14em] md:inline"
            style={{ color: BRAND }}
          >
            {procedure.price}
          </span>
        </button>
        <button
          type="button"
          className="font-caption ml-2 shrink-0 rounded-full px-4 py-2 text-[10px] font-normal uppercase tracking-[0.14em] text-white transition-colors md:px-5 md:text-[11px]"
          style={{ backgroundColor: BRAND }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C24CBA")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
        >
          Записаться
        </button>
      </div>

      <div
        className="grid transition-all duration-500 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
          <div className="overflow-hidden">
            <div className="mx-4 mt-2 rounded-2xl bg-neutral-100 px-5 py-4 md:mx-8 md:px-6 md:py-5">
              {procedure.preparations.length > 0 && (
                <>
                  <p className="font-caption mb-2 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    {procedure.detailsLabel ?? "Препараты"}
                  </p>
                  <ul className="space-y-1.5">
                    {procedure.preparations.map((p, i) => (
                      <li
                        key={i}
                        className="font-body flex items-center gap-2 text-sm text-neutral-700"
                      >
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: BRAND }}
                        />
                        {p}
                      </li>
                    ))}
                    <li className="font-caption pt-1 text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                      Список пополняется
                    </li>
                  </ul>
                </>
              )}
              {procedure.device && (
                <div className={procedure.preparations.length > 0 ? "mt-4 border-t border-neutral-200 pt-3" : ""}>
                  <p className="font-caption mb-1 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    Аппарат
                  </p>
                  <p className="font-body text-sm text-neutral-700">
                    {procedure.device}
                  </p>
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

function MedicalCosmetologyContent() {
  return (
    <div className="space-y-2.5">
      {medicalProcedures.map((p) => (
        <ProcedureRow key={p.name} procedure={p} />
      ))}
    </div>
  );
}

const hardwareProcedures: Procedure[] = [
  {
    name: "Лазерное удаление папиллом, кератом, фибром",
    price: "по запросу",
    detailsLabel: "Показания",
    preparations: [],
    device: "Fotona (Фотона)",
  },
  {
    name: "Лазерное удаление сосудов",
    price: "по запросу",
    detailsLabel: "Показания",
    preparations: ["Купероз", "Сосудистые звёздочки"],
  },
  {
    name: "Лазерное омоложение",
    price: "по запросу",
    detailsLabel: "Эффект",
    preparations: ["Выравнивание рельефа кожи", "Улучшение тонуса и текстуры"],
  },
  {
    name: "Лазерная шлифовка рубцов",
    price: "по запросу",
    detailsLabel: "Показания",
    preparations: ["Постакне", "Рубцы", "Растяжки"],
  },
  {
    name: "СМАС-лифтинг на аппарате Ulthera",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: ["Ulthera — ультразвуковой SMAS-лифтинг"],
  },
  {
    name: "Фототерапия IPL на аппарате Viora V30",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: ["Viora V30 — IPL-фототерапия"],
  },
  {
    name: "Аппаратный массаж Icoon Laser Med",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Laser Med",
  },
  {
    name: "Аппаратный массаж Beauty Liner",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Beauty Liner",
  },
  {
    name: "Аппаратный массаж для лица и шеи LPG",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "LPG",
  },
  {
    name: "Микротоковая терапия",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Аппарат уточняется",
  },
  {
    name: "Лазерная эпиляция на аппарате Mediostar Monolith",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Mediostar Monolith",
  },
  {
    name: "Биостимуляция для коррекции фигуры на аппарате Futura Pro",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Futura Pro",
  },
  {
    name: "Водная чистка лица HydraFacial",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "HydraFacial",
  },
];

function HardwareCosmetologyContent() {
  return (
    <div className="space-y-2.5">
      {hardwareProcedures.map((p) => (
        <ProcedureRow key={p.name} procedure={p} />
      ))}
    </div>
  );
}

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
    {
      title: "Массаж",
      image: serviceMassage.url,
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
          style={{ objectPosition: "center calc(55% - 60px)" }}
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[#AE31A6]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center md:px-8 md:py-20">
          <div className="md:-translate-y-10">
            <h2 className="font-display whitespace-pre-line text-xl leading-[1.25] tracking-[0.01em] text-[#e5e5e5] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] md:text-3xl lg:text-4xl">
              {"Подберём персональную\u00a0\nстратегию вашей естественной красоты"}
            </h2>
            <button
              type="button"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-xs font-normal uppercase tracking-[0.1em] transition-all md:mt-10 md:px-6 md:py-3"
              style={{ borderColor: BRAND, color: "#fff", backgroundColor: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              <span>Записаться на консультацию</span>
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

          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-7 lg:grid-cols-4">
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
                {s.title === "Врачебная\nкосметология" ? (
                  <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle
                        className="font-display text-2xl md:text-3xl"
                        style={{ color: BRAND }}
                      >
                        Врачебная косметология
                      </DialogTitle>
                      <DialogDescription className="font-body pt-1 text-sm leading-relaxed text-neutral-500">
                        Выберите процедуру, чтобы увидеть используемые препараты и записаться на приём.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-5">
                      <MedicalCosmetologyContent />
                    </div>
                  </DialogContent>
                ) : s.title === "Аппаратная\nкосметология" ? (
                  <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle
                        className="font-display text-2xl md:text-3xl"
                        style={{ color: BRAND }}
                      >
                        Аппаратная косметология
                      </DialogTitle>
                      <DialogDescription className="font-body pt-1 text-sm leading-relaxed text-neutral-500">
                        Выберите процедуру, чтобы увидеть подробности и записаться на приём.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-5">
                      <HardwareCosmetologyContent />
                    </div>
                  </DialogContent>
                ) : (
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
                )}
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
              Ваше желанное отражение в зеркале —{"\n"}
              это не просто «уколы красоты»
            </h2>
            <p className="font-body mt-6 text-sm font-light leading-relaxed text-[#d4d4d4] md:mt-8 md:text-base">
              Мы создаём комплексную стратегию, комбинируем методики, чтобы сохранять вашу естественную молодость и индивидуальность.
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

      {/* Блок знакомства с командой */}
      <section className="relative bg-white py-20 text-neutral-900 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Текст */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6 md:space-y-8">
                <div className="inline-block">
                  <span className="font-caption flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    <span className="h-px w-12 bg-current" />
                    Доверие и красота
                  </span>
                </div>
                <h2 className="font-display text-3xl leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
                  Ваша лучшая подруга{" "}
                  <span style={{ color: BRAND }}>порекомендует</span> нас вам
                </h2>
                <p className="font-body text-lg font-light leading-relaxed text-neutral-600 md:text-xl">
                  В вопросе красоты вашей лучшей подругой станет наш специалист.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: BRAND }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#C24CBA";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = BRAND;
                    }}
                  >
                    <span className="font-caption">Давайте познакомимся</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Фото команды */}
            <div className="relative order-1 lg:order-2">
              <div
                className="absolute -top-10 -right-10 h-64 w-64 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: BRAND }}
              />
              <div className="relative z-10">
                <div className="rotate-[-1deg] overflow-hidden rounded-3xl shadow-[0_32px_64px_-16px_rgba(174,49,166,0.2)] transition-transform duration-700 hover:rotate-0">
                  <img
                    src={teamPhoto}
                    alt="Команда специалистов клиники Комильфо"
                    width={1024}
                    height={1280}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 max-w-xs rotate-2 rounded-2xl border border-neutral-100 bg-white/90 p-6 shadow-xl backdrop-blur-xl md:-left-12 md:p-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex -space-x-3">
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-neutral-200" />
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-neutral-300" />
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-neutral-400" />
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white"
                        style={{ backgroundColor: BRAND }}
                      >
                        +12
                      </div>
                    </div>
                    <div>
                      <p className="font-display text-base font-semibold text-neutral-900">
                        Наши специалисты
                      </p>
                      <p className="font-caption mt-1 text-[10px] uppercase tracking-wider text-neutral-500">
                        Комильфо Эксперт
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -top-6 -right-6 h-24 w-24 rounded-tr-3xl border-t-2 border-r-2"
                  style={{ borderColor: BRAND }}
                />
              </div>
            </div>
          </div>
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
            Ваша уверенность в безопасности{"\n"}
            <span style={{ color: BRAND }}>— это тоже часть красивого отражения</span>
          </h2>
          <p className="font-body mt-6 max-w-4xl whitespace-pre-line text-sm font-light leading-relaxed text-[#c4c4c4] md:mt-8 md:text-base">
            Настоящий психологический комфорт появляется тогда, когда вы на сто процентов уверены в квалифицированных специалистах, подлинных препаратах, соблюдении санитарных норм.
          </p>

          <div className="mt-10 rounded-3xl bg-black/40 p-6 backdrop-blur-md ring-1 ring-white/10 md:mt-14 md:p-10">
            <div className="hidden grid-cols-2 gap-8 border-b border-white/15 pb-5 md:grid">
              <div className="font-display text-lg tracking-[0.01em]" style={{ color: BRAND }}>
                Профессиональная медицина MD — «Комильфо»
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
                  them: "Незарегистрированный контрафакт из Интернета — риск для здоровья и жизни.",
                },
                {
                  us: "Сертифицированная медицинская техника. С регулярным техническим обслуживанием.",
                  them: "Дешевые китайские аппараты, которые по документам являются бытовыми и не имеют допуска к медицинским процедурам.",
                },
                {
                  us: "Медицинский подход, сертифицированные специалисты, строгое ведение медицинской документации на каждом приёме.",
                  them: "Работа «вслепую» без документов на руках, фальшивые дипломы из принтера.",
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
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-end justify-center px-6 py-16 text-left md:px-8 md:py-20">
          <div className="text-left">
            <h2 className="font-display max-w-xl whitespace-pre-line text-2xl leading-[1.15] tracking-[0.01em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] md:text-3xl lg:text-4xl" style={{ color: BRAND }}>
              Вы достойны профессионального{"\n"}
              отношения к вашему здоровью
            </h2>
            <p className="font-body mt-4 max-w-lg whitespace-pre-line text-base font-light leading-relaxed text-[#c4c4c4] md:mt-5 md:text-lg">
              Подберём персональную стратегию{"\n"}
              вашей естественной красоты на встрече с косметологом
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
              <span>Записаться на консультацию</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
