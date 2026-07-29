import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Plus, ChevronUp, ChevronDown, X, FileText, FileDown } from "lucide-react";
import heroVideo from "@/assets/komilfo_hero_v2.mp4.asset.json";
import doctorConsultation from "@/assets/doctor-consultation.jpg.asset.json";
import productPhilosophy from "@/assets/injection-beauty.png.asset.json";
import serviceEsthetic from "@/assets/esthetic-cosmetology.png.asset.json";
import serviceMedical from "@/assets/apparatnaya-cosmetology.png.asset.json";
import serviceHardware from "@/assets/service_hardware.png.asset.json";
import serviceVrachebnaya from "@/assets/service_vrachebnaya.png.asset.json";
import serviceMassage from "@/assets/massage.png.asset.json";
import comparisonBg from "@/assets/comparison-bg.png.asset.json";
import headerLogo from "@/assets/header_logo.svg.asset.json";
import mdKomilfoLogo from "@/assets/md-komilfo-logo.png.asset.json";
import consultationBg from "@/assets/consultation-bg.png.asset.json";
import specialistZhuravleva from "@/assets/specialist-zhuravleva.jpg.asset.json";
import specialistTonkih from "@/assets/specialist-tonkih.jpg.asset.json";
import specialistKorabelshchikova from "@/assets/specialist-korabelshchikova.jpg.asset.json";
import specialistVolokitina from "@/assets/specialist-volokitina.jpg.asset.json";
import specialistSushkova from "@/assets/specialist-sushkova.jpg.asset.json";
import specDmitrievskaya from "@/assets/spec-dmitrievskaya.jpg.asset.json";
import specSkachkova from "@/assets/specialist-skachkova.jpg.asset.json";
import spec5 from "@/assets/spec-5.jpg.asset.json";
import specialistDarmira from "@/assets/specialist-darmira.jpg.asset.json";
import specialistBescherevnykh from "@/assets/specialist-bescherevnykh.jpg.asset.json";
import specialistMoiseenko from "@/assets/specialist-moiseenko.jpg.asset.json";
import specialistPopova from "@/assets/specialist-popova.jpg.asset.json";
import teamImage from "@/assets/team.jpg.asset.json";
import teamSlide1 from "@/assets/team-slide-1.jpg.asset.json";
import teamSlide2 from "@/assets/team-slide-2.jpg.asset.json";
import teamSlide3 from "@/assets/team-slide-3.jpg.asset.json";
import privacyPolicy from "@/assets/privacy-policy.pdf.asset.json";
import docFz323 from "@/assets/fz-323.docx.asset.json";
import docPravila736 from "@/assets/pravila-736.docx.asset.json";
import docZakon23001 from "@/assets/zakon-2300-1.docx.asset.json";
import docPostanovlenie2463 from "@/assets/postanovlenie-2463.pdf.asset.json";
import docPoryadokKosmetologiya from "@/assets/poryadok-kosmetologiya.docx.asset.json";
import docPoryadokDermatovenerologiya from "@/assets/poryadok-dermatovenerologiya.docx.asset.json";
import docPoryadokAkusherstvoGinekologiya from "@/assets/poryadok-akusherstvo-ginekologiya.docx.asset.json";
import docPamyatkaPrava from "@/assets/pamyatka-prava-pacientov.pdf.asset.json";
import docKontrolOrgany from "@/assets/kontroliruyushchie-organy.docx.asset.json";
import docPrikaz789n from "@/assets/prikaz-789n.docx.asset.json";
import docPrikaz1050n from "@/assets/prikaz-1050n.docx.asset.json";
import docShablonZayavleniya from "@/assets/shablon-zayavleniya.pdf.asset.json";
import docShablonKopiya from "@/assets/shablon-zayavleniya-kopiya.pdf.asset.json";
import docObrazecKopiya from "@/assets/obrazec-zayavleniya-kopiya.pdf.asset.json";
import docVidyMedpomoshchi from "@/assets/polozhenie-vidy-medpomoshchi.pdf.asset.json";
import docPravilaZapisi from "@/assets/pravila-zapisi.pdf.asset.json";
import docPravilaPodgotovki from "@/assets/pravila-podgotovki.docx.asset.json";
import docSvedeniyaObrazovanie from "@/assets/svedeniya-obrazovanie.docx.asset.json";
import docFz326 from "@/assets/fz-326.docx.asset.json";
import docPostanovlenie890 from "@/assets/postanovlenie-890.pdf.asset.json";
import docPraysKomilfo from "@/assets/prays-komilfo.xls.asset.json";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LeadDialogProvider, useLeadDialog } from "@/components/LeadDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Комильфо — 17 лет сохраняем вашу естественную красоту" },
      {
        name: "description",
        content:
          "Комильфо — клиника, где сохраняют естественную красоту без рисков для здоровья. Медицинская диагностика, персональная стратегия, сертифицированные препараты.",
      },
      { property: "og:title", content: "Комильфо — 17 лет сохраняем вашу естественную красоту" },
      {
        property: "og:description",
        content:
          "Комильфо — клиника, где сохраняют естественную красоту без рисков для здоровья. Медицинская диагностика, персональная стратегия, сертифицированные препараты.",
      },
    ],
  }),
  component: () => (
    <LeadDialogProvider>
      <Index />
    </LeadDialogProvider>
  ),
});

const BRAND = "#7A6E8F";

type SubService = { name: string; price: string };

type SubGroup = { title: string; items: SubService[] };

type Procedure = {
  name: string;
  price: string;
  preparations: string[];
  detailsLabel?: string;
  device?: string;
  subServices?: SubService[];
  groups?: SubGroup[];
  note?: string;
  description?: string;
};


const medicalProcedures: Procedure[] = [
  {
    name: "Ботулинотерапия",
    price: "от 150 ₽ / 1 ед.",
    preparations: ["Диспорт (Франция)", "НовакутанБТА (Корея)", "Релатокс (Россия)"],
    description:
      "Современная инъекционная процедура локального расслабления мимических мышц препаратами на основе очищенного ботулотоксина, направленная на безопасное и эффективное разглаживание морщин с сохранением естественной мимики лица.",
  },
  {
    name: "Биоревитализация. Биорепарация",
    price: "от 6 300 ₽",
    preparations: ["Novacutan (Франция)", "Atlantis (Россия)", "Bellarti (Россия)", "MiraLine (Корея)"],
    description:
      "Подкожные инъекции препарата на основе гиалуроновой кислоты для омоложения, оздоровления и улучшения тонуса кожи.",
  },
  {
    name: "Коллагентерапия",
    price: "от 6 800 ₽",
    preparations: ["Linerase (Италия)", "AgentCol (Италия)", "Сферо гель (Россия)"],
    description:
      "Инъекционная методика, направленная на стимуляцию собственного коллагена кожи для повышения плотности, упругости и естественного омоложения тканей.",
  },
  {
    name: "Контурная пластика и объёмное моделирование лица",
    price: "от 11 000 ₽",
    preparations: ["Belotero (Швейцария)", "QT fill plus (Корея)", "Radiesse (США)"],
    description:
      "Инъекционная коррекция черт лица и восстановление объёмов филлерами на основе гиалуроновой кислоты и гидроксиапатита кальция — для гармоничных, естественных пропорций.",
  },
  {
    name: "Гидрорезерв губ",
    price: "от 11 000 ₽",
    preparations: ["Belotero (Швейцария)", "QT fill plus (Корея)"],
    description:
      "Инъекционная процедура глубокого увлажнения губ на основе гиалуроновой кислоты — восстанавливает водный баланс, возвращает мягкость и естественный цвет без изменения объёма.",
  },
  {
    name: "Увеличение объёма губ",
    price: "от 11 000 ₽",
    preparations: ["Belotero (Швейцария)", "QT fill plus (Корея)"],
    description:
      "Безопасная инъекционная процедура на основе гиалуроновой кислоты, направленная на эстетическую коррекцию формы, глубокое увлажнение тканей и создание гармоничного, чувственного объёма с сохранением максимально естественного вида ваших губ.",
  },
  {
    name: "Лечение гипергидроза",
    price: "от 100 ₽ / 1 ед.",
    preparations: ["Диспорт (Франция)", "Релатокс (Россия)"],
    description:
      "Современная инъекционная процедура для лечения повышенной потливости подмышек, стоп, постоянно холодных и влажных рук. Области повышенного потоотделения обкалывают точечными микроинъекциями препарата Ботокс, Диспорт.",
  },
  {
    name: "Коллагенстимуляция",
    price: "от 18 000 ₽",
    preparations: ["PLLA28 (Корея)", "Radiesse (США)"],
    description:
      "Передовая инъекционная методика глубокого омоложения, которая запускает мощный процесс выработки собственного коллагена, обеспечивая восстановление упругости тканей, устранение дряблости и создание стойкого, прочного каркаса лица.",
  },
  {
    name: "Плазмотерапия Cortexil PRP",
    price: "от 7 150 ₽",
    preparations: ["Cortexil PRP"],
    description:
      "Плазмотерапия Cortexil PRP — это инъекционная процедура, запускающая процесс регенерации, ревитализации (омоложения) кожи, нормализующая тканевое дыхание, водный баланс, стимулирующая выработку фибробластами кожи коллагена, эластина, гиалуроновой кислоты. Благодаря этому кожа молодеет, исчезают морщинки, рубцы, шрамы, пигментные пятна, веснушки. Отмечается подтяжка контура лица.",
    subServices: [
      { name: "Инъекционное введение лекарственных препаратов в очаг поражения кожи. Аутостимуляция PRP Cortexil 10 ml 1 шр", price: "7 150 ₽" },
      { name: "Инъекционное введение лекарственных препаратов в очаг поражения кожи. Аутостимуляция PRP Cortexil 1 шр", price: "10 450 ₽" },
    ],
  },

  {
    name: "Озонотерапия",
    price: "от 600 ₽",
    preparations: [],
    description:
      "Передовая методика комплексного оздоровления и моделирования контуров лица и тела с помощью терапевтических доз медицинского озона. В нашем центре процедура проводится в нескольких форматах: внутривенные капельницы для глубокого детокса организма, точечные подкожные инъекции для лечения кожи от прыщей и пигментации, безоперационная озоновая липосакция для эффективного уменьшения локальных жировых отложений.",
    subServices: [
      { name: "Внутривенное капельное введение озонированного физиологического раствора", price: "900 ₽" },
      { name: "Малая аутогемоозонотерапия", price: "600 ₽" },
      { name: "Озонотерапия в косметологии", price: "" },
      { name: "Озоновая липосакция внешней поверхности бедра", price: "700 ₽" },
      { name: "Озоновая липосакция внутренней поверхности бедра", price: "700 ₽" },
      { name: "Озоновая липосакция воротниковой зоны", price: "700 ₽" },
      { name: "Озоновая липосакция голени", price: "700 ₽" },
      { name: "Озоновая липосакция живота", price: "700 ₽" },
      { name: "Озоновая липосакция овала лица", price: "600 ₽" },
      { name: "Озоновая липосакция рук", price: "700 ₽" },
      { name: "Озоновая липосакция ягодиц", price: "700 ₽" },
      { name: "Озоновая терапия волосистой части головы", price: "700 ₽" },
      { name: "Озоновая терапия кожи плеча", price: "500 ₽" },
      { name: "Озоновое лечение кожи спины", price: "900 ₽" },
      { name: "Озоновое лечение растяжек (одна зона)", price: "700 ₽" },
      { name: "Озоновый лифтинг кожи внешней поверхности бедра", price: "700 ₽" },
      { name: "Озоновый лифтинг кожи внутренней поверхности бедра", price: "700 ₽" },
      { name: "Озоновый лифтинг кожи голени", price: "700 ₽" },
      { name: "Озоновый лифтинг кожи лица и шеи", price: "700 ₽" },
      { name: "Озоновый лифтинг кожи рук", price: "700 ₽" },
      { name: "Озоновый лифтинг кожи ягодиц", price: "700 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Процедурный кабинет",
    price: "от 400 ₽",
    detailsLabel: "Услуги",
    preparations: [],
    subServices: [
      { name: "Взятие крови из периферической вены (Забор крови для лабораторных исследований)", price: "400 ₽" },
      { name: "Инъекции и капельное введение препаратов — Внутримышечное введение лекарственных препаратов", price: "400 ₽" },
      { name: "Инъекции и капельное введение препаратов — Внутримышечное введение лекарственных препаратов, акупунктурное введение препарата Лаеннек в/м 2,0 мл", price: "3 050 ₽" },
      { name: "Инъекции и капельное введение препаратов — Внутривенное введение лекарственных препаратов", price: "400 ₽" },
      { name: "Инъекции и капельное введение препаратов — Внутривенное капельное введение лекарственных препаратов", price: "600 ₽" },
      { name: "Внутривенное капельное введение лекарственных препаратов — Капельница «Доброе Утро» Detox Premium", price: "2 900 ₽" },
      { name: 'Внутривенное капельное введение лекарственных препаратов — Капельница красоты "Золушка"', price: "5 500 ₽" },
      { name: "Внутривенное капельное введение лекарственных препаратов — Капельница Лаеннек, 1 процедура", price: "5 500 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Анализы крови",
    price: "по запросу",
    detailsLabel: "Категории анализов",
    preparations: [],
    groups: [
      {
        title: "Вирусные инфекции",
        items: [
          { name: "Определение антител класса M (Anti-HAV IgM) к вирусному гепатиту A (Hepatitis A virus) в крови", price: "660 ₽" },
          { name: "Определение иммуноглобулин E (IgE общий) в крови", price: "570 ₽" },
          { name: "Определение антител к вирусному гепатиту A (Hepatitis A virus) в крови суммарно", price: "810 ₽" },
          { name: "Определение антигена (HbsAg) к вирусу гепатита B (Hepatitis B virus) в крови, качественное исследование", price: "250 ₽" },
          { name: "Определение антигена (HbsAg) к вирусу гепатита B (Hepatitis B virus) в крови, количественное исследование", price: "1 500 ₽" },
          { name: "Определение антигена (HbsAg) к вирусу гепатита B (Hepatitis B virus) в крови суммарно", price: "510 ₽" },
          { name: "Определение антител к e-антигену (Anti-HBe) вируса гепатита B (Hepatitis B virus) в крови суммарно", price: "850 ₽" },
          { name: "Определение антител к e-антигену (Anti-HBe) вируса гепатита B (Hepatitis B virus) в крови", price: "800 ₽" },
          { name: "Определение антител класса M (Anti-HBc IgM) к ядерному антигену (HbcAg) вируса гепатита B (Hepatitis B virus) в крови", price: "600 ₽" },
          { name: "Определение антител классов к ядерному антигену (HbcAg) вируса гепатита B (Hepatitis B virus) в крови суммарно", price: "500 ₽" },
          { name: "Определение суммарных антител классов M и G (anti-HCV IgM и anti-HCV IgG) к вирусному гепатиту C (Hepatitis C virus) в крови", price: "300 ₽" },
          { name: "Определение антител классов G (anti-HCV IgG) к вирусному гепатиту C (Hepatitis C virus) в крови иммуноблоттинг", price: "6 300 ₽" },
          { name: "Определение антител классов M (anti-HCV IgM) к вирусному гепатиту C (Hepatitis C virus) в крови", price: "510 ₽" },
          { name: "Определение антител класса G (IgG) к коронавирусу SARS-CoV-2 (COVID-19) количественное исследование", price: "1 125 ₽" },
          { name: "Определение антител класса M (IgM) к коронавирусу SARS-CoV-2 (COVID-19) методом ИФА (определение острой фазы коронавируса) качественное исследование", price: "975 ₽" },
          { name: "Определение антител класса G (IgG) к коронавирусу SARS-CoV-2 (COVID-19) методом ИФА (определение иммунного ответа к коронавирусу) качественное исследование", price: "975 ₽" },
          { name: "Определение антител класса G к вирусу простого герпеса 2 типа (Herpes simplex virus 2) в крови", price: "540 ₽" },
          { name: "Определение антител класса M к вирусу простого герпеса 1 и 2 типа (Herpes simplex virus 1,2) в крови", price: "510 ₽" },
          { name: "Исследование уровня антител классов M, G (IgM, IgG) к вирусу иммунодефицита человека ВИЧ-1/2 и антигена p24 (Human immunodeficiency virus HIV 1/2 + Agp24) в крови", price: "300 ₽" },
          { name: "Определение антител к бледной трепонеме (Treponema pallidum) в реакции пассивной гемагглютинации (РПГА) в сыворотке крови", price: "720 ₽" },
          { name: "Определение антител к бледной трепонеме (Treponema pallidum) в крови (IgG+IgM)", price: "480 ₽" },
          { name: "Определение антител к бледной трепонеме (Treponema pallidum) в крови (IgM)", price: "720 ₽" },
          { name: "Определение антител класса G (igG) к цитомегаловирусу в крови", price: "450 ₽" },
          { name: "Определение антител класса M IgM к цитомегаловирусу в крови", price: "500 ₽" },
          { name: "Определение антител класса IgG к вирусу кори в крови", price: "570 ₽" },
          { name: "Определение антител класса IgG к вирусу краснухи (Rubella virus) в крови", price: "735 ₽" },
          { name: "Определение антител класса IgM к вирусу краснухи (Rubella virus) в крови", price: "825 ₽" },
        ],
      },
      {
        title: "Гормоны и биогенные амины",
        items: [
          { name: "Исследование уровня инсулина плазмы крови", price: "600 ₽" },
          { name: "Исследование уровня паратиреоидного гормона в крови", price: "540 ₽" },
          { name: "Исследование уровня общего трийодтиронина (Т3) в крови", price: "320 ₽" },
          { name: "Исследование уровня свободного трийодтиронина (СТ3) в крови", price: "320 ₽" },
          { name: "Исследование уровня свободного тироксина (СТ4) в крови", price: "320 ₽" },
          { name: "Исследование уровня общего тироксина (Т4) сыворотки крови", price: "360 ₽" },
          { name: "Исследование уровня тиреотропного гормона (ТТГ) в крови", price: "320 ₽" },
          { name: "Исследование уровня соматотропного гормона в крови", price: "650 ₽" },
          { name: "Исследование уровня адренокортикотропного гормона (АКТГ) в крови", price: "570 ₽" },
          { name: "Исследование уровня альдостерона в крови", price: "1 050 ₽" },
          { name: "Исследование уровня свободного тестостерона в крови", price: "930 ₽" },
          { name: "Исследование индекса свободных андрогенов в крови", price: "1 400 ₽" },
          { name: "Исследование уровня общего тестостерона в крови", price: "375 ₽" },
          { name: "Исследование уровня эритропоэтина в крови", price: "1 050 ₽" },
          { name: "Исследование уровня гистамина в крови", price: "4 500 ₽" },
          { name: "Исследование уровня пролактина в крови", price: "360 ₽" },
          { name: "Исследование уровня хорионического гонадотропина (ХГЧ) в крови", price: "690 ₽" },
          { name: "Исследование уровня тироксин-связывающего альбумина в крови (Тест поглощения тиреоидных гормонов)", price: "1 600 ₽" },
          { name: "Исследование уровня олигомерного матриксного белка хряща (неколлагеновый гликопротеин) в крови", price: "5 100 ₽" },
          { name: "Исследование уровня тиреоглобулина в крови", price: "530 ₽" },
          { name: "Исследование уровня серотонина, его предшественников и метаболитов в крови", price: "2 250 ₽" },
          { name: "Исследование уровня лютеинизирующего гормона в сыворотке крови", price: "330 ₽" },
          { name: "Исследование уровня фолликулостимулирующего гормона в сыворотке крови", price: "330 ₽" },
          { name: "Исследование уровня общего кортизола в крови", price: "420 ₽" },
          { name: "Исследование уровня 17-гидроксипрогестерона (17-ОН-прогестерон) в крови", price: "560 ₽" },
          { name: "Исследование уровня андростендиона в крови", price: "750 ₽" },
          { name: "Исследование уровня 3-андростендиол глюкуронида в крови", price: "1 650 ₽" },
          { name: "Исследование уровня дегидроэпиандростерона сульфата (ДГЭА-С) в крови", price: "450 ₽" },
          { name: "Исследование уровня дегидротестостерона в крови", price: "1 100 ₽" },
          { name: "Исследование уровня прогестерона в крови", price: "420 ₽" },
          { name: "Исследование уровня общего эстрадиола (E2) в крови", price: "420 ₽" },
          { name: "Исследование уровня лептина в крови", price: "1 150 ₽" },
          { name: "Исследование уровня глобулина, связывающего половые гормоны, в крови", price: "550 ₽" },
          { name: "Исследование уровня/активности изоферментов щелочной фосфатазы (Остаза) в крови", price: "19 500 ₽" },
          { name: "Исследование уровня ингибина B в крови", price: "2 350 ₽" },
          { name: "Исследование уровня инсулиноподобного ростового фактора I в крови", price: "1 500 ₽" },
          { name: "Исследование уровня C-пептида в крови", price: "620 ₽" },
          { name: "Исследование уровня кальцитонина в крови", price: "990 ₽" },
          { name: "Исследование уровня остеокальцина в крови", price: "850 ₽" },
          { name: "Исследование уровня антимюллерова гормона (AMH/MIS) в крови", price: "1 770 ₽" },
          { name: "Исследование уровня 25-OH витамина Д2 и 25-OH витамина Д3 в крови — Витамин Д: 25-OH D2 (25-гидроксиэргокальциферол) и 25-OH D3 (25-гидроксихолекальциферол) РАЗДЕЛЬНО", price: "8 850 ₽" },
          { name: "Исследование уровня 25-OH витамина Д в крови", price: "2 100 ₽" },
          { name: "Исследование уровня N-терминального пропептида проколлагена 1-го типа (P1NP) в крови", price: "2 300 ₽" },
          { name: "Исследование уровня бетта-изомеризованного С-концевого телопептида коллагена 1 типа (Beta-Cross Laps) в крови", price: "1 575 ₽" },
          { name: "Определение содержания антител к тиреоглобулину (Анти-ТГ) в сыворотке крови", price: "810 ₽" },
          { name: "Определение содержания антител к тиреопероксидазе (Анти-ТПО) в крови", price: "920 ₽" },
          { name: "Определение содержания антител к рецептору тиреотропного гормона в крови", price: "2 000 ₽" },
          { name: "Определение уровня B12 (цианокобаламин) в крови", price: "850 ₽" },
        ],
      },
      {
        title: "Маркеры опухолевого роста",
        items: [
          { name: "Исследование уровня простатоспецифического антигена свободного в крови — Простатический специфический антиген свободный (ПСА свободный)", price: "500 ₽" },
          { name: "Исследование уровня простатоспецифического антигена общего в крови — Простатический специфический антиген общий (ПСА общий)", price: "500 ₽" },
          { name: "Исследование уровня антигена аденогенных раков CA-125 в крови — CA-125", price: "570 ₽" },
          { name: "Исследование уровня опухолеассоциированного маркера CA 15-3 в крови — CA 15-3", price: "620 ₽" },
          { name: "Исследование уровня опухолеассоциированного маркера CA 242 в крови — CA 242", price: "1 500 ₽" },
        ],
      },
      {
        title: "Общеклиническая гематология",
        items: [
          { name: "Определение активности аланинаминотрансферазы в крови — АЛТ", price: "100 ₽" },
          { name: "Исследование уровня железа в сыворотке крови", price: "130 ₽" },
          { name: "Исследование уровня трансферрина в сыворотке крови", price: "405 ₽" },
          { name: "Исследование уровня С-реактивного белка в сыворотке крови", price: "530 ₽" },
          { name: "Исследование уровня общего белка в крови", price: "100 ₽" },
          { name: "Исследование уровня альбумина в крови", price: "110 ₽" },
          { name: "Исследование уровня мочевины в крови", price: "100 ₽" },
          { name: "Исследование уровня мочевой кислоты в крови", price: "100 ₽" },
          { name: "Исследование уровня креатинина в крови", price: "100 ₽" },
          { name: "Исследование уровня общего билирубина в крови", price: "100 ₽" },
          { name: "Исследование уровня билирубина связанного (конъюгированного) в крови", price: "120 ₽" },
          { name: "Исследование уровня глюкозы в крови", price: "100 ₽" },
          { name: "Исследование уровня триглицеридов в крови", price: "130 ₽" },
          { name: "Исследование уровня холестерина в крови — холестерин общий", price: "130 ₽" },
          { name: "Исследование уровня липопротеинов в крови — Липопротеин (a), Lp(a)", price: "1 150 ₽" },
          { name: "Исследование уровня холестерина липопротеинов высокой плотности в крови — Липопротеины высокой плотности (ЛПВП, HDL)", price: "140 ₽" },
          { name: "Исследование уровня холестерина липопротеинов низкой плотности в крови — Липопротеины низкой плотности (ЛПНП, LDL) — прямое определение", price: "170 ₽" },
          { name: "Исследование уровня общего кальция в крови", price: "130 ₽" },
          { name: "Исследование уровня неорганического фосфора в крови", price: "130 ₽" },
          { name: "Определение активности аспартатаминотрансферазы — АСТ", price: "120 ₽" },
          { name: "Определение активности амилазы в крови", price: "140 ₽" },
          { name: "Определение активности щелочной фосфатазы в крови", price: "130 ₽" },
          { name: "Исследование уровня ферритина в крови", price: "480 ₽" },
          { name: "Исследование уровня церулоплазмина в крови", price: "1 000 ₽" },
          { name: "Исследование уровня фолиевой кислоты в сыворотке крови", price: "530 ₽" },
          { name: "Исследование уровня гликированного гемоглобина в крови (Гликогемоглобин HbA1c)", price: "340 ₽" },
          { name: "Исследование уровня общего магния в сыворотке крови", price: "130 ₽" },
          { name: "Исследование уровня желчных кислот в крови", price: "1 720 ₽" },
          { name: "Определение активности липазы в сыворотке крови", price: "230 ₽" },
          { name: "Определение активности холинэстеразы в крови", price: "200 ₽" },
          { name: "Определение активности амилазы панкреатической в крови", price: "200 ₽" },
          { name: "Исследование уровня ионизированного кальция в крови", price: "190 ₽" },
          { name: "Исследование уровня гомоцистеина в крови", price: "1 100 ₽" },
          { name: "Исследование уровня апопротеина A1 в крови", price: "350 ₽" },
          { name: "Исследование уровня апопротеина B1 в крови", price: "350 ₽" },
          { name: "Исследование уровня гликированного гемоглобина в крови", price: "350 ₽" },
          { name: "Исследование скорости оседания эритроцитов — СОЭ", price: "150 ₽" },
          { name: "Определение основных групп по системе AB0 и определение антигена D системы Резус (резус-фактор)", price: "530 ₽" },
          { name: "Определение железосвязывающей способности сыворотки крови", price: "210 ₽" },
          { name: "Дифференцированный подсчёт лейкоцитов (Лейкоцитарная формула)", price: "260 ₽" },
          { name: "Определение антистрептолизина-О в сыворотке крови", price: "280 ₽" },
          { name: "Определение содержания ревматоидного фактора в крови", price: "240 ₽" },
          { name: "Определение содержания антител к кардиолипину в крови IgG (колич.)", price: "800 ₽" },
          { name: "Определение содержания антител к кардиолипину в крови IgM (колич.)", price: "800 ₽" },
          { name: "Определение содержания антител к бета2-гликопротеину в крови IgG (колич.)", price: "800 ₽" },
          { name: "Определение содержания антител к бета2-гликопротеину в крови IgM (колич.)", price: "800 ₽" },
          { name: "Определение волчаночного антикоагулянта", price: "650 ₽" },
          { name: "Коагулограмма (ориентировочное исследование системы гомеостаза) расширенная — протромбин по Квику (МНО), АЧТВ, тромбиновое время, фибриноген, антитромбин III, D-димер", price: "1 850 ₽" },
          { name: "Коагулограмма (ориентировочное исследование системы гомеостаза) — протромбин по Квику (МНО), АЧТВ, тромбиновое время, фибриноген", price: "1 100 ₽" },
          { name: "Общий (клинический) анализ крови развёрнутый — Женское здоровье: ТТГ, Т4, Т3, Ант.к тиреопероксидазе, Ант.к тиреоглобулину, Лютеинизирующий, Фолликулостимулирующий, Эстрадиол, Прогестерон, Пролактин, Антимюллеров, 17ОНПрогестерон, Тестостерон, ГСПГ, Кортизол", price: "21 500 ₽" },
          { name: 'Общий (клинический) анализ крови развёрнутый — «Щитовидная железа — расширенный»: ТТГ, Т4, Т3, Т4, Т3, Ант.к ТПО, Антитела к ТГ, Ат к рецепторам ТТГ, Тиреоглобулин', price: "4 400 ₽" },
          { name: "Общий (клинический) анализ крови развёрнутый с определением уровня электролитов Калий, Натрий и Хлор в сыворотке крови", price: "190 ₽" },
          { name: "Общий (клинический) анализ крови развёрнутый — Инфекции для госпитализации (комплексное исследование): ВИЧ-Комбо (Ат к ВИЧ1, 2 + АГ), Ат к Treponema pallidum (IgG+IgM), HBsAg (Гепатит B), Ат к вирусу гепатита C (Анти-HCV, суммарные)", price: "850 ₽" },
          { name: "Общий (клинический) анализ крови развёрнутый", price: "300 ₽" },
        ],
      },
    ],
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Анализы мочи",
    price: "по запросу",
    detailsLabel: "Виды анализа",
    preparations: [],
    subServices: [
      { name: "Общий (клинический) анализ мочи", price: "240 ₽" },
      { name: "Микробиологическое (культуральное) исследование мочи на бактериальные патогены с применением автоматизированного посева — Посев мочи на микрофлору с определением чувствительности к антибиотикам", price: "840 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Консультация врача-косметолога",
    price: "1 800 ₽",
    preparations: [],
    description: "Индивидуальный приём у врача-косметолога: разбор состояния кожи, обсуждение запросов и подбор оптимальной программы ухода или процедур.",
  },
];

function ProcedureRow({ procedure }: { procedure: Procedure }) {
  const [open, setOpen] = useState(false);
  const { open: openLead } = useLeadDialog();
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
        </button>
        <span
          className="font-caption hidden shrink-0 text-sm font-bold uppercase tracking-[0.14em] md:inline"
          style={{ color: BRAND }}
        >
          {procedure.price}
        </span>
        <button
          type="button"
          onClick={() => openLead(`Записаться: ${procedure.name}`)}
          className="font-caption ml-2 shrink-0 rounded-full px-4 py-2 text-[10px] font-normal uppercase tracking-[0.14em] text-white transition-colors md:px-5 md:text-[11px]"
          style={{ backgroundColor: BRAND }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5E5470")}
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
              {procedure.description && (
                <p className={`font-body whitespace-pre-line text-[13px] leading-relaxed text-neutral-700 md:text-sm${procedure.preparations.length > 0 || procedure.device || procedure.subServices || procedure.groups ? " mb-4 border-b border-neutral-200 pb-4" : ""}`}>
                  {procedure.description}
                </p>
              )}
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
              {procedure.subServices && procedure.subServices.length > 0 && (
                <div className={procedure.preparations.length > 0 || procedure.device ? "mt-4 border-t border-neutral-200 pt-3" : ""}>
                  <p className="font-caption mb-2 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    Весь список услуг
                  </p>
                  <ul className="divide-y divide-neutral-200">
                    {procedure.subServices.map((s, i) => (
                      <li
                        key={i}
                        className="font-body flex items-start justify-between gap-4 py-2 text-sm text-neutral-700"
                      >
                        <span className="flex-1">{s.name}</span>
                        <span
                          className="font-caption shrink-0 text-xs font-bold uppercase tracking-[0.12em]"
                          style={{ color: BRAND }}
                        >
                          {s.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {procedure.groups && procedure.groups.length > 0 && (
                <div className={procedure.preparations.length > 0 || procedure.device || procedure.subServices ? "mt-4 border-t border-neutral-200 pt-3" : ""}>
                  <p className="font-caption mb-2 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    Категории
                  </p>
                  <div className="space-y-2">
                    {procedure.groups.map((g) => (
                      <SubGroupRow key={g.title} group={g} />
                    ))}
                  </div>
                </div>
              )}
              <div
                className="mt-4 rounded-xl border-l-2 px-4 py-3"
                style={{ borderColor: BRAND, backgroundColor: "rgba(122,110,143,0.08)" }}
              >
                <p className="font-body text-[13px] leading-relaxed text-neutral-700 md:text-sm">
                  {procedure.note ??
                    "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур."}
                </p>
              </div>
            </div>

          </div>
      </div>

      {open && (
        <div
          role="button"
          tabIndex={0}
          onMouseDown={() => setOpen(false)}
          className="relative z-10 mx-auto mb-1 mt-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 font-caption text-[10px] uppercase tracking-[0.14em] text-neutral-500 transition-colors hover:text-neutral-900"
        >
          <ChevronUp className="h-3.5 w-3.5" />
          Свернуть
        </div>
      )}
    </div>
  );
}

function SubGroupRow({ group }: { group: SubGroup }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-neutral-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 px-4 py-2.5 text-left"
        aria-expanded={open}
      >
        <span
          className="inline-flex h-4 w-4 shrink-0 items-center justify-center transition-transform"
          style={{
            color: BRAND,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden
        >
          <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
        <span className="font-body flex-1 text-sm font-medium text-neutral-900">
          {group.title}
        </span>
        <span className="font-caption text-[10px] uppercase tracking-[0.14em] text-neutral-400">
          {group.items.length}
        </span>
      </button>
      <div
        className="grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <ul className="divide-y divide-neutral-200 border-t border-neutral-200 px-4 py-2">
            {group.items.map((s, i) => (
              <li
                key={i}
                className="font-body flex items-start justify-between gap-4 py-2 text-sm text-neutral-700"
              >
                <span className="flex-1">{s.name}</span>
                <span
                  className="font-caption shrink-0 text-xs font-bold uppercase tracking-[0.12em]"
                  style={{ color: BRAND }}
                >
                  {s.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


function PriceFileNote() {
  return (
    <div className="px-4 pt-4 md:px-8">
      <a
        href={docPraysKomilfo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-medium transition-colors hover:bg-neutral-50"
        style={{ borderColor: BRAND, color: BRAND }}
      >
        <FileDown className="h-4 w-4" />
        Полный прайс 2026 (Excel)
      </a>
    </div>
  );
}

function MedicalCosmetologyContent() {
  return (
    <div className="space-y-2.5">
      {medicalProcedures.map((p) => (
        <ProcedureRow key={p.name} procedure={p} />
      ))}
      <PriceFileNote />
    </div>
  );
}

const hardwareProcedures: Procedure[] = [
  {
    name: "Удаление папиллом, фибром и кератом на аппарате Fotona и методом электрокоагуляции",
    price: "от 310 ₽",
    detailsLabel: "Показания",
    preparations: [],
    device: "Fotona (Фотона)",
    description:
      "это современный, безопасный и высокоточный способ деликатного избавления от доброкачественных новообразований. Сочетание передовых лазерных технологий и классической электрокоагуляции позволяет врачу подобрать оптимальное решение для каждого случая.",
  },

  {
    name: "Лазерное удаление сосудов",
    price: "от 3 400 ₽",
    detailsLabel: "Показания",
    preparations: ["Купероз", "Сосудистые звёздочки"],
    description:
      "Лазерное удаление сосудов на неодимовом аппарате FriendlyLight Neo — это высокоэффективная и комфортная процедура точечного устранения купероза, сосудистых сеточек и «звёздочек», возвращающая лицу ровный, здоровый тон без повреждения кожи и периода реабилитации.",
  },

  {
    name: "Лазерное омоложение",
    price: "от 6 600 ₽",
    detailsLabel: "Эффект",
    preparations: ["Выравнивание рельефа кожи", "Улучшение тонуса и текстуры"],
    description:
      "Лазерное омоложение на аппарате FriendlyLight Neo неодим — это инновационный, эффективный и безопасный метод лазерной подтяжки лица, направленный на мощную стимуляцию омолаживающих процессов в глубоких слоях дермы.",
  },

  {
    name: "Лазерная шлифовка рубцовой ткани на аппарате Fotona эрбиевый YAG лазер",
    price: "от 1 800 ₽",
    detailsLabel: "Показания",
    preparations: ["Постакне", "Рубцы", "Растяжки"],
    description:
      "это высокоточная и безопасная процедура послойного обновления кожи, т.е. контролируемая микротравма, запускает в организме активные процессы регенерации: фибробласты начинают синтезировать новый коллаген, ускоряется обновление клеток кожи, формируется более ровный и эластичный кожный покров. Визуально рубец становится менее выраженным, структура кожи — более гладкой.",
  },

  {
    name: "Эстетическая лазерная шлифовка аппаратом Fotona",
    price: "от 5 800 ₽",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Fotona — эрбиевый YAG-лазер",
    description:
      "это премиальная процедура глубокого обновления кожи, которая эффективно стирает признаки старения, выравнивает поверхность кожи и помогает достигать эффекта «бархатной кожи».",
  },

  {
    name: "СМАС-лифтинг",
    price: "от 13 200 ₽",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "LIFTERA — ультразвуковой SMAS-лифтинг",
    description:
      "SMAS-лифтинг на аппарате LIFTERA — ультразвуковая процедура, позволяющая проработать не только поверхностные слои кожи, но и связки и мышечный аппарат, благодаря чему достигается ярко выраженный и стойкий эффект подтяжки лица.",
  },

  {
    name: "Фототерапия IPL на аппарате Viora V30",
    price: "от 1 800 ₽",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Viora V30 — IPL-фототерапия",
    description:
      "терапия, которая помогает справиться с первыми и очевидными признаками фотостарения, а также процедура способна значительно улучшить качество кожи.",
  },

  {
    name: "Аппаратный массаж Icoon Laser Med",
    price: "от 1 650 ₽",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Laser Med",
    description:
      "Аппаратный массаж на аппарате ICOON LAZER MED — это механическая стимуляция тела благодаря вакуумной технике. Массаж способствует качественной коррекции фигуры без операции — мощный лифтинг, быстрое омоложение, моделирование фигуры, улучшение качества жизни.",
    subServices: [
      { name: "Вакуумный массаж кожи — ICOONE LASER MED лицо (10 мин)", price: "1 650 ₽" },
      { name: "Вакуумный массаж кожи — ICOONE LASER MED лицо (10 процедур по 30 мин)", price: "27 500 ₽" },
      { name: "Вакуумный массаж кожи — ICOONE LASER MED лицо, шея, декольте (30 мин)", price: "3 000 ₽" },
      { name: "Вакуумный массаж кожи — ICOONE LASER MED тела (10 мин)", price: "1 650 ₽" },
      { name: "Вакуумный массаж кожи — ICOONE LASER MED тела (10 процедур по 60 мин)", price: "41 800 ₽" },
      { name: "Вакуумный массаж кожи — ICOONE LASER MED тела (30 мин)", price: "2 750 ₽" },
      { name: "Вакуумный массаж кожи — ICOONE LASER MED тела (60 мин)", price: "4 400 ₽" },
      { name: "Вакуумный массаж кожи — Костюм ICOON", price: "1 350 ₽" },
    ],
  },

  {
    name: "Аппаратный массаж для лица и шеи LPG Mobilift",
    price: "от 1 400 ₽",
    detailsLabel: "Аппарат",
    preparations: [],
    description:
      "Аппаратный массаж лица и шеи на аппарате LPG Mobilift — механическая стимуляция тканей с помощью специальной манипулы, оснащённой пульсирующим вакуумом и моторизованными крылышками. Деликатные микровибрации проникают в глубокие слои кожи и «пробуждают» клетки-фибробласты, возобновляя естественную выработку коллагена, эластина и гиалуроновой кислоты, одновременно усиливая микроциркуляцию и лимфодренаж.",
  },

  {
    name: "Микротоковая терапия",
    price: "от 900 ₽",
    preparations: [],
    description:
      "Микротоковая терапия лица — это комфортная аппаратная процедура с мощным лимфодренажным действием, которая эффективно снимает отечность и стимулирует обменные процессы. Мягкое воздействие токовых импульсов совместно с токопроводящей сывороткой значительно улучшают тонус кожи и обеспечивают выраженный лифтинг-эффект, возвращая лицу свежесть и чёткие контуры.",
  },

  {
    name: "Биостимуляция для коррекции фигуры на аппарате Futura Pro",
    price: "от 900 ₽",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Futura Pro",
    description:
      "Под воздействием электрического поля, света и ультразвука в тканях активизируются естественные физиологические процессы. В результате воздействия токовых волн происходит формирование контуров тела, лечение целлюлита, улучшение формы груди, лимфодренаж, уменьшение жировых отложений, улучшение тонуса кожи, повышение работоспособности мышц, уменьшение количества морщин, детоксикация.",
  },

  {
    name: "Ультрафонофорез кожи, лица и шеи",
    price: "от 900 ₽",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Аппарат уточняется",
    description:
      "Ультрафонофорез лица и тела — это эффективная аппаратная процедура, в которой ультразвуковые волны благодаря специальной сыворотке обеспечивают максимально глубокое проникновение в кожу активных компонентов. Данная методика целенаправленно работает на комплексное улучшение качества кожи и безоперационное моделирование контуров, и безболезненное устранение проблемы второго подбородка.",
  },

  {
    name: "Лазерная эпиляция на аппарате Mediostar Monolith",
    price: "от 1 100 ₽",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Mediostar Monolith",
    description:
      "Лазерная эпиляция на аппарате Mediostar Monolith — удаление нежелательных волос с помощью диодного лазера. Очень тонкий лазерный луч разрушает меланин в волосе и в волосяной луковице. Волосы отмирают, а разрушенная волосяная луковица больше не может восстановить волос.",
    subServices: [
      { name: "Проведение эпиляции лазерной MONOLITH — подготовка к процедуре, бритьё (1 зона)", price: "660 ₽" },
      { name: "Проведение эпиляции лазерной MONOLITH — подготовка к процедуре, бритьё (всё тело)", price: "1 200 ₽" },
      { name: "Проведение эпиляции лазерной, бакенбарды MONOLITH", price: "2 200 ₽" },
      { name: "Проведение эпиляции лазерной, бёдра MONOLITH", price: "7 100 ₽" },
      { name: "Проведение эпиляции лазерной, бёдра (мужчина) MONOLITH", price: "7 800 ₽" },
      { name: "Проведение эпиляции лазерной, верхняя губа MONOLITH", price: "1 700 ₽" },
      { name: "Проведение эпиляции лазерной, глубокое бикини женское MONOLITH", price: "7 000 ₽" },
      { name: "Проведение эпиляции лазерной, глубокое бикини мужское MONOLITH", price: "8 300 ₽" },
      { name: "Проведение эпиляции лазерной, голени MONOLITH", price: "7 200 ₽" },
      { name: "Проведение эпиляции лазерной, голени (мужчина) MONOLITH", price: "7 900 ₽" },
      { name: "Проведение эпиляции лазерной, грудь женская MONOLITH", price: "3 200 ₽" },
      { name: "Проведение эпиляции лазерной, грудь мужская MONOLITH", price: "4 400 ₽" },
      { name: "Проведение эпиляции лазерной, декольте MONOLITH", price: "4 200 ₽" },
      { name: "Проведение эпиляции лазерной, дополнительная вспышка MONOLITH", price: "400 ₽" },
      { name: "Проведение эпиляции лазерной, живот женский MONOLITH", price: "2 800 ₽" },
      { name: "Проведение эпиляции лазерной, живот мужской MONOLITH", price: "4 200 ₽" },
      { name: "Проведение эпиляции лазерной, затылок MONOLITH", price: "2 200 ₽" },
      { name: "Проведение эпиляции лазерной, кисти рук MONOLITH", price: "1 800 ₽" },
      { name: "Проведение эпиляции лазерной, крестец (копчик) MONOLITH", price: "1 800 ₽" },
      { name: "Проведение эпиляции лазерной, линия бикини MONOLITH", price: "4 200 ₽" },
      { name: "Проведение эпиляции лазерной, межбровье MONOLITH", price: "1 300 ₽" },
      { name: "Проведение эпиляции лазерной, ноги полностью MONOLITH", price: "9 300 ₽" },
      { name: "Проведение эпиляции лазерной, ноги полностью (мужчина) MONOLITH", price: "10 200 ₽" },
      { name: "Проведение эпиляции лазерной, ореолы молочных желёз MONOLITH", price: "1 700 ₽" },
      { name: "Проведение эпиляции лазерной, пальцы ног MONOLITH", price: "1 100 ₽" },
      { name: "Проведение эпиляции лазерной, плечи мужские MONOLITH", price: "6 000 ₽" },
      { name: "Проведение эпиляции лазерной, подбородок MONOLITH", price: "2 200 ₽" },
      { name: "Проведение эпиляции лазерной, подмышечные впадины MONOLITH", price: "4 200 ₽" },
      { name: "Проведение эпиляции лазерной, подмышечные впадины (мужчина) MONOLITH", price: "4 600 ₽" },
      { name: "Проведение эпиляции лазерной, подъём стопы MONOLITH", price: "1 600 ₽" },
      { name: "Проведение эпиляции лазерной, руки до локтя MONOLITH", price: "4 600 ₽" },
      { name: "Проведение эпиляции лазерной, руки до локтя (мужчина) MONOLITH", price: "5 000 ₽" },
      { name: "Проведение эпиляции лазерной, руки полностью MONOLITH", price: "6 500 ₽" },
      { name: "Проведение эпиляции лазерной, руки полностью (мужчина) MONOLITH", price: "7 100 ₽" },
      { name: "Проведение эпиляции лазерной, скулы и щёки MONOLITH", price: "3 400 ₽" },
      { name: "Проведение эпиляции лазерной, спина полностью женская MONOLITH", price: "5 300 ₽" },
      { name: "Проведение эпиляции лазерной, спина полностью мужская MONOLITH", price: "6 600 ₽" },
      { name: "Проведение эпиляции лазерной, шея женская MONOLITH", price: "3 000 ₽" },
      { name: "Проведение эпиляции лазерной, шея мужская MONOLITH", price: "3 200 ₽" },
      { name: "Проведение эпиляции лазерной, ягодицы MONOLITH", price: "4 600 ₽" },
    ],
  },

  {
    name: "Чистка лица на аппарате HydraFacial",
    price: "от 2 950 ₽",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "HydraFacial",
    description:
      "это вакуумное отшелушивание ороговевших частиц кожи в совокупности с использованием мультифункциональных сывороток. Чистка производится специальными сменными насадками. Благодаря данной технологии кожа остаётся чистой, увлажнённой и напитанной надолго.",
    subServices: [
      { name: "Очищение кожи лица и шеи — программа для мужчин на аппарате HydraFacial® (специальная)", price: "8 500 ₽" },
      { name: "Очищение кожи лица и шеи — программа лечение пигментации на аппарате HydraFacial®", price: "7 200 ₽" },
      { name: "Очищение кожи лица и шеи — программа лечение проблемной кожи на аппарате HydraFacial® (с ручной чисткой)", price: "7 200 ₽" },
      { name: "Очищение кожи лица и шеи — программа очищение и обновление на аппарате HydraFacial® (с гликолевым пилингом)", price: "6 600 ₽" },
      { name: "Очищение кожи лица и шеи — программа очищение и увлажнение на аппарате HydraFacial® (базовая)", price: "6 000 ₽" },
      { name: "Очищение кожи лица и шеи — программа очищение, увлажнение и питание на аппарате HydraFacial®", price: "6 600 ₽" },
      { name: 'Очищение кожи лица и шеи — программа "Перед балом" на аппарате HydraFacial®', price: "6 600 ₽" },
      { name: "Очищение кожи лица и шеи — программа по телу декольте на аппарате HydraFacial®", price: "4 900 ₽" },
      { name: "Очищение кожи лица и шеи — программа по телу кисти рук на аппарате HydraFacial®", price: "4 900 ₽" },
      { name: "Очищение кожи лица и шеи — программа по телу колени на аппарате HydraFacial®", price: "4 900 ₽" },
      { name: "Очищение кожи лица и шеи — программа по телу локти на аппарате HydraFacial®", price: "4 900 ₽" },
      { name: "Очищение кожи лица и шеи — программа по телу шея на аппарате HydraFacial®", price: "4 900 ₽" },
      { name: "Очищение кожи лица и шеи — программа революционное обновление и омоложение на аппарате HydraFacial® (полная программа)", price: "8 500 ₽" },
      { name: "Очищение кожи лица и шеи — программа экспресс очищение на аппарате HydraFacial® (подготовка к инъекционным и уходовым процедурам)", price: "2 950 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  }
];


function HardwareCosmetologyContent() {
  return (
    <div className="space-y-2.5">
      {hardwareProcedures.map((p) => (
        <ProcedureRow key={p.name} procedure={p} />
      ))}
      <PriceFileNote />
    </div>
  );
}

const estheticProcedures: Procedure[] = [
  {
    name: "Дерматологические пилинги",
    price: "от 950 ₽",
    detailsLabel: "Аппаратные пилинги",
    preparations: [],
    description:
      "Дерматологические пилинги — это аппаратные и профессиональные методики бережного обновления кожи, подбираемые врачом индивидуально под тип и состояние кожи. Процедуры деликатно отшелушивают ороговевшие клетки, стимулируют регенерацию и улучшают текстуру и тон лица.",
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Химические пилинги лица",
    price: "от 950 ₽",
    detailsLabel: "Виды пилингов",
    preparations: [],
    description:
      "Химические пилинги лица — это воздействие на поверхностные и средние слои кожи различными химическими агентами. Высокоэффективная процедура контролируемого обновления кожи с помощью специально подобранных составов на основе органических кислот. Методика деликатно отшелушивает ороговевшие клетки, активизирует процессы естественной регенерации и глубокого очищения, возвращая лицу безупречную гладкость, ровный тон и здоровое сияние.",
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Уходы по лицу",
    price: "от 350 ₽",
    detailsLabel: "Виды уходов",
    preparations: [],
    description:
      "Уходы по лицу — это персонализированный комплекс профессиональных неинвазивных процедур, с использованием профессиональной косметики брендов Academie, Dermafime, Keenwell. Уход направлен на питание и поддержание здоровья кожи. Программы включают инновационную карбокситерапию для интенсивного насыщения клеток кислородом, а также премиальные увлажняющие процедуры, которые мгновенно стирают следы усталости, возвращая лицу безупречную свежесть, тонус и естественное сияние.",
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Чистка спины",
    price: "4 000 ₽",
    preparations: [],
    description:
      "Чистка спины — высокоэффективная процедура глубокого очищения кожи от ороговевших клеток, комедонов и избытка себума в этой труднодоступной зоне. Методика эффективно предотвращает появление воспалений, нормализует работу сальных желёз и возвращает коже спины безупречную гладкость, чистоту и здоровый вид.",
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Чистка лица",
    price: "от 330 ₽",
    preparations: [],
    description:
      "Чистка лица — это процесс глубокого очищения кожи мануальным или аппаратным методом. Во время процедуры происходит поверхностное отшелушивание отмерших клеток кожи, удаляются воспалительные элементы (комедоны), стимулируется кровообращение и обменные процессы в коже, что приводит к нормализации работы сальных желёз. Способы чистки: мануальная (то есть пальцами); механическая (с помощью специальной ложки Унна); УЗ-чистка (обусловлена воздействием высокого звукового воздействия); чистка с использованием специальных лечебных препаратов (используются лечебные линии «Academie» и «Keenwell»).",
  },
  {
    name: "Эпиляция горячим и тёплым воском",
    price: "от 440 ₽",
    detailsLabel: "Зоны эпиляции",
    preparations: [],
    description:
      "Эпиляция горячим и тёплым воском — это классическая профессиональная методика деликатного удаления нежелательных волос с корнем, которая гарантирует безупречную гладкость кожи на срок до нескольких недель. Благодаря индивидуальному подбору премиальных восковых составов под разные зоны тела процедура проходит максимально комфортно, обеспечивая коже бережный уход и шелковистость.",
    subServices: [
      { name: "Эпиляция горячим воском — глубокое бикини", price: "1 000 ₽" },
      { name: "Эпиляция горячим воском — классическое бикини", price: "950 ₽" },
      { name: "Эпиляция горячим воском — над верхней губой", price: "440 ₽" },
      { name: "Эпиляция горячим воском — подмышечные впадины", price: "880 ₽" },
      { name: "Эпиляция горячим воском — полное бикини", price: "1 450 ₽" },
      { name: "Эпиляция тёплым воском — бёдра", price: "770 ₽" },
      { name: "Эпиляция тёплым воском — голени", price: "660 ₽" },
      { name: "Эпиляция тёплым воском — руки до локтя", price: "660 ₽" },
      { name: "Эпиляция тёплым воском — руки полностью", price: "1 000 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Прокол ушей пистолетом",
    price: "от 600 ₽",
    detailsLabel: "Услуги",
    preparations: [],
    subServices: [
      { name: "Косметический пирсинг — Прокол одной мочки уха пистолетом", price: "1 500 ₽" },
      { name: "Косметический пирсинг — Прокол ушей пистолетом", price: "2 000 ₽" },
      { name: "Косметический пирсинг — Серьга Studex для прокола тип 1", price: "600 ₽" },
      { name: "Косметический пирсинг — Серьга Studex для прокола тип 2", price: "2 100 ₽" },
      { name: "Косметический пирсинг — Серьга Studex для прокола тип 3", price: "3 000 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Окрашивание, коррекция и ламинирование бровей",
    price: "от 1 500 ₽",
    detailsLabel: "Услуги",
    preparations: [],
    description:
      "Окрашивание, коррекция и ламинирование бровей — окрашивание хной обеспечит вашему взгляду выразительность и избавит вас от необходимости в ежедневных подкрашиваниях. В нашем центре используется хна BROW HENNA — бестселлер в стойком окрашивании бровей.",
    subServices: [
      { name: "Архитектура бровей", price: "1 500 ₽" },
      { name: "Долговременная укладка бровей", price: "2 200 ₽" },
      { name: "Окрашивание бровей", price: "по запросу" },
      { name: "Коррекция бровей", price: "по запросу" },
      { name: "Ламинирование бровей", price: "по запросу" },
    ],
  },
  {
    name: "Маникюр и педикюр",
    price: "от 100 ₽",
    detailsLabel: "Услуги",
    preparations: [],
    description:
      "Маникюр и педикюр — это профессиональный комплексный уход за руками и стопами, сочетающий в себе безупречную эстетику и строгое соблюдение медицинских стандартов безопасности. Процедуры направлены на поддержание здоровья кожи и ногтей, восстановление их мягкости и создание идеального, завершённого образа.",
    subServices: [
      { name: "Женский маникюр", price: "1 500 ₽" },
      { name: "Маникюр с покрытием", price: "2 500 ₽" },
      { name: "Френч", price: "550 ₽" },
      { name: "Педикюр женский", price: "2 300 ₽" },
      { name: "Педикюр с покрытием", price: "3 200 ₽" },
      { name: "Мужской маникюр", price: "1 500 ₽" },
      { name: "Мужской педикюр", price: "2 500 ₽" },
      { name: "Дизайн / снятие лака", price: "100 ₽" },
      { name: "Маска для рук", price: "200 ₽" },
      { name: "Основа", price: "100 ₽" },
      { name: "Японский маникюр", price: "2 000 ₽" },
      { name: "Ремонт ногтя", price: "350 ₽" },
      { name: "Покрытие лаком клиента", price: "300 ₽" },
      { name: "Полное снятие гель-лака", price: "600 ₽" },
      { name: "Обработка трещин", price: "400 ₽" },
      { name: "Обработка стержневой мозоли", price: "100 ₽" },
      { name: "Протезирование ногтевой пластины", price: "300 ₽" },
      { name: "Укрепление гелем ногти", price: "600 ₽" },
    ],
  },
];

function EstheticCosmetologyContent() {
  return (
    <div className="space-y-2.5">
      {estheticProcedures.map((p) => (
        <ProcedureRow key={p.name} procedure={p} />
      ))}
      <PriceFileNote />
    </div>
  );
}

const massageProcedures: Procedure[] = [

  {
    name: "Ручной эстетический массаж",
    price: "от 600 ₽",
    detailsLabel: "Виды и услуги",
    preparations: [],
    description:
      "Эстетический массаж — это совокупность массажных техник, целью которых является как косметическое, так и оздоровительное воздействие на организм. Техника эстетического массажа способна помочь вам не только предупредить различные заболевания, но и улучшить свой внешний вид, поднять настроение и повысить работоспособность.\n\nНаш специалист владеет различными видами ручного массажа:\n• спортивный\n• точечный\n• расслабляющий\n• оздоровительный\n• тонизирующий\n• баночный\n• креольский\n• антицеллюлитный\n• медовый\n• шиатцу\n• гуаша\n\nМассаж лица:\n• буккальный\n• скульптурно-буккальный\n• точечный\n• шиатцу\n• классический\n• гуаша",
    subServices: [
      { name: "Выполнение косметического массажа лица, шеи и зоны декольте — Воротниковой зоны женский", price: "800 ₽" },
      { name: "Выполнение косметического массажа лица, шеи и зоны декольте — Воротниковой зоны мужской", price: "900 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Массаж волосистой части головы", price: "800 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Антицеллюлитный женский", price: "2 300 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Антицеллюлитный женский (2 категория)", price: "2 600 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Антицеллюлитный ягодицы и бёдра", price: "2 000 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Детокс со скрабированием (ноги, ягодицы, живот)", price: "2 800 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Живот", price: "1 000 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Лимфодренажный женский «Лёгкие ножки»", price: "1 200 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Ноги мужской", price: "1 500 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Расслабляющий женский", price: "2 500 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Расслабляющий женский (2 категория)", price: "2 800 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Расслабляющий мужской", price: "3 000 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Рук", price: "600 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Спины женский", price: "1 500 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — Спины женский (2 категория)", price: "1 800 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
  {
    name: "Обёртывание тела",
    price: "от 300 ₽",
    detailsLabel: "Виды обёртываний",
    preparations: [],
    description:
      "Обёртывание тела — это профессиональная SPA-процедура, направленная на интенсивное обновление и укрепление кожи, коррекцию фигуры, снижение объёмов, лимфодренаж и глубокое увлажнение. Индивидуально подобранная программа помогает решить конкретную задачу: от антицеллюлитного эффекта и лифтинга до детокса и релакса.",
    subServices: [
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — BODY H4 PLUS — программа интенсивного обновления и укрепления кожи", price: "4 700 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — C30 уменьшение целлюлита и повышение эластичности", price: "4 700 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — DRAIN O2 интенсивный лимфодренаж и уменьшение объёма", price: "6 000 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Minceur Marine", price: "2 800 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Вандажное обёртывание", price: "6 700 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Восковые (горячие) аппликации 1 зона", price: "300 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Контрастное обёртывание «Двойной эффект»", price: "2 500 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Криообёртывание ног №1", price: "550 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Криообёртывание ног №2", price: "1 100 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Лифтинг программа «Сила минерала»", price: "4 200 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Лифтинг программа «ТонусМарин» живот, бёдра, ягодицы", price: "3 000 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Лифтинг программа «Шоколадное моделирование» груди", price: "3 200 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Лифтинг программа «Шоколадное моделирование» живот+я.п.бёдра", price: "4 400 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Лифтинг программа «Шоколадное моделирование» живот+п.п.бёдра", price: "4 400 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Обёртывание антиварикозное", price: "2 800 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Обёртывание «Бархатное»", price: "3 400 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Обёртывание «Детокс»", price: "6 900 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Обёртывание «Шоколадное удовольствие»", price: "6 000 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — «Плоский живот» программа", price: "1 700 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Сеанс кедровая фитобочка", price: "800 ₽" },
      { name: "Выполнение различных видов обёртывания тела либо его отдельных частей — Холодное обёртывание", price: "3 300 ₽" },
      { name: "Нанесение активного концентрата 5 мл", price: "660 ₽" },
      { name: "Нанесение активного концентрата HISTOMER LIPO LYTIC 3 мл", price: "500 ₽" },
      { name: "Подготовка к массажу (скрабирование тела)", price: "1 000 ₽" },
      { name: "Подготовка к массажу (скрабирование тела) 2 категория", price: "1 350 ₽" },
      { name: "Подготовка к массажу (скрабирование тела мужское)", price: "1 100 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур.",
  },
];


function MassageContent() {
  return (
    <div className="space-y-2.5">
      {massageProcedures.map((p) => (
        <ProcedureRow key={p.name} procedure={p} />
      ))}
      <PriceFileNote />
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
      "Мы умеем говорить «нет» процедурам, которые вам не подходят\nили могут навредить.",
      "Мы дорожим вашим здоровьем и используем технологии\nс доказанной безопасностью.",
    ],
    cta: "Получить индивидуальный план ухода",
  },
  {
    title: (
      <>
        Медицинский подход и безопасность{"\n"}
        <span style={{ color: BRAND }}>вместо подпольных процедур</span>
      </>
    ),
    paragraphs: [
      "Сохраняем вашу естественную красоту и индивидуальность\nбез комплексов и рисков для здоровья.",
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
      "Подбираем методики, которые подходят именно вам.",
      "Поддерживаем вашу природную индивидуальность и естественность.",
    ],
    cta: "Получить план сохранения молодости на десятилетия",
  },
];

type Specialist = {
  id: number;
  name: string;
  role: string;
  focus: string;
  about: string;
  education: string;
  image: string;
};

const specialists: Specialist[] = [
  {
    id: 1,
    name: "Журавлёва Евгения",
    role: "Главный врач центра, врач дерматолог",
    focus: "Врач-косметолог, специалист по лазерным технологиям, инъекционным методикам, методике плазмолифтинга, озонотерапевт.",
    about: "",
    education: "",
    image: specialistZhuravleva.url,
  },
  {
    id: 2,
    name: "Мамонтова Марина",
    role: "Врач дерматолог, врач-косметолог, специалист по лазерным и инъекционным методикам",
    focus: "",
    about: "",
    education: "",
    image: spec5.url,
  },
  {
    id: 3,
    name: "Тонких Ирина",
    role: "Медицинская сестра по косметологии",
    focus: "",
    about: "",
    education: "",
    image: specialistTonkih.url,
  },
  {
    id: 4,
    name: "Корабельщикова Анна",
    role: "Медицинская сестра по косметологии",
    focus: "",
    about: "",
    education: "",
    image: specialistKorabelshchikova.url,
  },
  {
    id: 5,
    name: "Попова Наталья",
    role: "Медицинская сестра, подолог, специалист по маникюру и педикюру",
    focus: "",
    about: "",
    education: "",
    image: specialistPopova.url,
  },
  {
    id: 6,
    name: "Дмитриевская Анна",
    role: "Медицинская сестра по косметологии",
    focus: "",
    about: "",
    education: "",
    image: specDmitrievskaya.url,
  },
  {
    id: 7,
    name: "Скачкова Людмила",
    role: "Специалист по эстетическому массажу",
    focus: "",
    about: "",
    education: "",
    image: specSkachkova.url,
  },
  {
    id: 8,
    name: "Волокитина Ольга",
    role: "Медицинская сестра процедурного кабинета",
    focus: "",
    about: "",
    education: "",
    image: specialistVolokitina.url,
  },
  {
    id: 9,
    name: "Дармина Марина",
    role: "Медицинская сестра процедурного кабинета",
    focus: "",
    about: "",
    education: "",
    image: specialistDarmira.url,
  },
  {
    id: 10,
    name: "Сушкова Юлия",
    role: "Администратор",
    focus: "",
    about: "",
    education: "",
    image: specialistSushkova.url,
  },
  {
    id: 11,
    name: "Бесчеревных Ирина",
    role: "Администратор",
    focus: "",
    about: "",
    education: "",
    image: specialistBescherevnykh.url,
  },
  {
    id: 12,
    name: "Моисеенко Мария",
    role: "Администратор",
    focus: "",
    about: "",
    education: "",
    image: specialistMoiseenko.url,
  },
];

function SpecialistsBlock() {
  const [active, setActive] = useState(0);
  const [infoOpen, setInfoOpen] = useState(false);
  const s = specialists[active];
  const go = (dir: 1 | -1) => setActive((i) => (i + dir + specialists.length) % specialists.length);

  return (
    <section
      className="relative overflow-hidden py-20 text-neutral-900 md:py-28"
      style={{ background: "linear-gradient(135deg, #CFC5E0 0%, #E6DEEF 50%, #B8ADCE 100%)" }}
    >
      {/* Soft lavender background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div
          className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)" }}
        />
        <div
          className="absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 70%)" }}
        />
        <div
          className="absolute left-1/3 top-0 h-[24rem] w-[24rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(203,193,217,0.55) 0%, rgba(203,193,217,0) 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Текст */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <span className="font-caption mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-900/70">
              <span className="h-px w-10 bg-current" />
              Наши специалисты
            </span>
            <div>
              <h2 className="font-display text-3xl font-black uppercase leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
                {s.name.split(" ").map((part, i) => (
                  <span key={i} className="block">
                    {part}
                  </span>
                ))}
              </h2>
              <p className="font-body mt-3 text-sm font-medium uppercase tracking-wider text-neutral-900/80">
                {s.role}
              </p>
              <p className="font-body mt-6 text-base font-light leading-relaxed text-neutral-900">
                {s.focus}
              </p>
            </div>
          </div>

          {/* Фото + подпись */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_60px_-20px_rgba(86,28,74,0.35)] ring-1 ring-white/40">
                <img
                  src={s.image}
                  alt={s.name}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <button
                type="button"
                aria-label="Предыдущий специалист"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg shadow-black/10 backdrop-blur transition-all hover:scale-105 hover:bg-white md:left-3 md:h-10 md:w-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Следующий специалист"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg shadow-black/10 backdrop-blur transition-all hover:scale-105 hover:bg-white md:right-3 md:h-10 md:w-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Аватарки-переключатели */}
          <div className="order-3 lg:col-span-1">
            <div className="flex flex-row items-center justify-center gap-3 lg:flex-col lg:gap-4">
              <button
                type="button"
                aria-label="Предыдущий специалист"
                onClick={() => go(-1)}
                className="hidden h-8 w-8 items-center justify-center rounded-full border border-neutral-900/30 text-neutral-900/70 transition-colors hover:border-neutral-900 hover:text-neutral-900 lg:inline-flex"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
              {specialists.map((sp, i) => (
                <button
                  key={sp.id}
                  type="button"
                  aria-label={`Показать ${sp.name}`}
                  onClick={() => setActive(i)}
                  className={`relative h-12 w-12 overflow-hidden rounded-full transition-all md:h-14 md:w-14 ${i === active ? "ring-2 ring-white ring-offset-2 shadow-[0_0_20px_rgba(122,110,143,0.55)]" : "opacity-60 hover:opacity-100"}`}
                  style={i === active ? { ["--tw-ring-offset-color" as string]: "#CFC5E0", ["--tw-ring-color" as string]: "#ffffff" } : undefined}
                >
                  <img
                    src={sp.image}
                    alt={sp.name}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
              <button
                type="button"
                aria-label="Следующий специалист"
                onClick={() => go(1)}
                className="hidden h-8 w-8 items-center justify-center rounded-full border border-neutral-900/30 text-neutral-900/70 transition-colors hover:border-neutral-900 hover:text-neutral-900 lg:inline-flex"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Сноска — официальная информация */}
        <div className="mt-14 flex justify-center md:mt-20">
          <button
            type="button"
            onClick={() => setInfoOpen(true)}
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-900/25 bg-white/40 px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-neutral-900 backdrop-blur-sm transition-all hover:border-neutral-900/60 hover:bg-white/70"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Официальная информация</span>
          </button>
        </div>
      </div>

      <TeamDisclosureDialog open={infoOpen} onClose={() => setInfoOpen(false)} />
    </section>
  );
}

type ScheduleRow = { name: string; role: string; room: string; hours: string[] };
const scheduleRows: ScheduleRow[] = [
  { name: "Журавлева Евгения Владимировна", role: "Главный врач, врач-косметолог", room: "1", hours: ["пн, вт, чт: 09:00–21:00", "пт: 09:00–18:00*"] },
  { name: "Мамонтова Марина Александровна", role: "Врач-косметолог, врач-дерматолог", room: "2", hours: ["пн, ср, пт: 09:00–21:00", "сб: 10:00–18:00*"] },
  { name: "Дмитриевская Анна Ивановна", role: "Медицинская сестра по косметологии", room: "5", hours: ["Сменный график 2/2*"] },
  { name: "Тонких Ирина Серафимовна", role: "Медицинская сестра по косметологии", room: "7", hours: ["Сменный график 2/2*"] },
  { name: "Корабельщикова Анна Игоревна", role: "Медицинская сестра по косметологии", room: "5", hours: ["Сменный график 2/2*"] },
  { name: "Волокитина Ольга Анатольевна", role: "Медицинская сестра", room: "3", hours: ["Сменный график 2/2*"] },
  { name: "Попова Наталья Александровна", role: "Медицинская сестра, подолог, специалист по маникюру и педикюру", room: "4", hours: ["Сменный график 2/2*"] },
];

type EducationItem = { stage: string; place: string; specialty: string; qualification: string; certificate?: string };
type EducationEntry = { name: string; role: string; items: EducationItem[] };
const educationEntries: EducationEntry[] = [
  {
    name: "Журавлева Евгения Владимировна",
    role: "Главный врач, врач-косметолог",
    items: [
      { stage: "Высшее", place: "Южно-Казахстанская государственная медицинская академия, 1998 г.", specialty: "Лечебное дело", qualification: "Врач" },
      { stage: "Интернатура", place: "ГУВППО «Воронежская государственная медицинская академия им. Н.Н. Бурденко», 1999 г.", specialty: "Терапия", qualification: "Врач-терапевт" },
      { stage: "Профессиональная переподготовка", place: "ГУВППО «Воронежская государственная медицинская академия им. Н.Н. Бурденко», 2003 г.", specialty: "Дерматовенерология", qualification: "Врач-дерматовенеролог", certificate: "Дерматовенерология до 10.03.2025 г." },
      { stage: "Профессиональная переподготовка", place: "ГОУ ВПО «Воронежская государственная медицинская академия имени Н.Н. Бурденко», 2013 г.", specialty: "Косметология", qualification: "Врач-косметолог", certificate: "Косметология до 06.03.2025 г." },
      { stage: "Профессиональная переподготовка", place: "ГОУ ВПО «Воронежская государственная медицинская академия имени Н.Н. Бурденко», 2017 г.", specialty: "Организация здравоохранения и общественное здоровье", qualification: "—", certificate: "до 30.10.2025 г." },
    ],
  },
  {
    name: "Мамонтова Марина Александровна",
    role: "Врач-косметолог, врач-дерматолог",
    items: [
      { stage: "Высшее", place: "ГОУ ВПО «Воронежская государственная медицинская академия имени Н.Н. Бурденко», 2009 г.", specialty: "Лечебное дело", qualification: "Врач" },
      { stage: "Интернатура", place: "ГОУ ВПО «Воронежская государственная медицинская академия имени Н.Н. Бурденко», 2010 г.", specialty: "Дерматовенерология", qualification: "Врач-дерматовенеролог", certificate: "Дерматовенерология до 04.03.2025 г." },
      { stage: "Профессиональная переподготовка", place: "ФГАОУ ВО «РУДН», 2015 г.", specialty: "Косметология", qualification: "Врач-косметолог", certificate: "Косметология до 06.03.2025 г." },
      { stage: "Профессиональная переподготовка", place: "ООО «ЦСО «ПРОФ-РЕСУРС»», 2019 г.", specialty: "Организация здравоохранения и общественное здоровье", qualification: "—", certificate: "до 30.10.2025 г." },
    ],
  },
  {
    name: "Ашурбекова Хадижат Халирбагиновна",
    role: "Медицинская сестра по косметологии",
    items: [
      { stage: "Среднее профессиональное", place: "ФГБОУ ВПО «Московский государственный университет путей сообщения», 2014 г.", specialty: "Сестринское дело", qualification: "Медицинская сестра" },
      { stage: "Профессиональная подготовка", place: "АНО ДПО «ГК Профи», 2020 г.", specialty: "Сестринское дело в косметологии", qualification: "Медицинская сестра по косметологии", certificate: "Сестринское дело в косметологии до 21.12.2025 г." },
    ],
  },
  {
    name: "Тонких Ирина Серафимовна",
    role: "Медицинская сестра по косметологии",
    items: [
      { stage: "Среднее профессиональное", place: "Липецкое медицинское училище, 1986 г.", specialty: "Медицинская сестра", qualification: "Медицинская сестра" },
      { stage: "Профессиональная переподготовка", place: "АНО ДПО «ГК Профи», 2020 г.", specialty: "Сестринское дело в косметологии", qualification: "Медицинская сестра по косметологии", certificate: "Сестринское дело в косметологии до 21.12.2025 г." },
    ],
  },
  {
    name: "Перфилова Анна Игоревна",
    role: "Медицинская сестра по косметологии",
    items: [
      { stage: "Среднее профессиональное", place: "ГАП ОУ «Липецкий медицинский колледж», 2019 г.", specialty: "Акушерское дело", qualification: "Акушерка" },
      { stage: "Профессиональная переподготовка", place: "ГАП ОУ «Липецкий медицинский колледж», 2019 г.", specialty: "Сестринское дело в косметологии", qualification: "Медицинская сестра по косметологии", certificate: "Сестринское дело в косметологии до 04.07.2024 г." },
    ],
  },
  {
    name: "Волокитина Ольга Анатольевна",
    role: "Медицинская сестра",
    items: [
      { stage: "Среднее профессиональное", place: "Липецкое медицинское училище Министерства здравоохранения РСФСР, 1983 г.", specialty: "Медицинская сестра", qualification: "Медицинская сестра", certificate: "Сестринское дело до 17.03.2025 г." },
    ],
  },
  {
    name: "Савина Любовь Николаевна",
    role: "Медицинская сестра",
    items: [
      { stage: "Среднее профессиональное", place: "Узловское медицинское училище, 1978 г.", specialty: "Медицинская сестра", qualification: "Медицинская сестра", certificate: "Сестринское дело до 29.12.2025 г." },
    ],
  },
];

function DisclosureItem({ title, subtitle, children, defaultOpen = false }: { title: string; subtitle?: string; children: React.ReactNode; defaultOpen?: boolean }) {
  return (
    <details
      className="group border-b border-neutral-900/10 last:border-b-0"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 md:py-6">
        <div className="min-w-0">
          <p className="font-display text-base uppercase tracking-wide text-neutral-900 md:text-lg">{title}</p>
          {subtitle ? <p className="font-body mt-1 text-xs font-light text-neutral-900/60 md:text-sm">{subtitle}</p> : null}
        </div>
        <span
          className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-neutral-900/20 text-neutral-900 transition-transform duration-300 group-open:rotate-180"
          aria-hidden
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </summary>
      <div className="pb-6 md:pb-8">{children}</div>
    </details>
  );
}

function TeamDisclosureDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm md:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-t-2xl bg-white shadow-2xl md:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-neutral-900/10 px-5 py-5 md:px-8 md:py-6">
          <div>
            <span className="font-caption text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Официальная информация
            </span>
            <h3 className="font-display mt-2 text-xl font-bold uppercase leading-tight text-neutral-900 md:text-2xl">
              О наших сотрудниках
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-neutral-900/15 text-neutral-700 transition-colors hover:bg-neutral-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[calc(92vh-96px)] overflow-y-auto px-5 py-2 md:px-8">
          {/* График работы */}
          <DisclosureItem title="График работы специалистов" subtitle="Часы приёма и номера кабинетов" defaultOpen>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-900/10 text-[11px] uppercase tracking-wider text-neutral-500">
                    <th className="py-3 pr-4 font-medium">ФИО</th>
                    <th className="py-3 pr-4 font-medium">Должность</th>
                    <th className="py-3 pr-4 font-medium">Кабинет</th>
                    <th className="py-3 font-medium">Дата и время</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleRows.map((r) => (
                    <tr key={r.name} className="border-b border-neutral-900/5 align-top last:border-b-0">
                      <td className="py-4 pr-4 font-medium text-neutral-900">{r.name}</td>
                      <td className="py-4 pr-4 text-neutral-700">{r.role}</td>
                      <td className="py-4 pr-4 text-neutral-700">{r.room}</td>
                      <td className="py-4 text-neutral-700">
                        {r.hours.map((h, i) => (
                          <div key={i}>{h}</div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs font-light leading-relaxed text-neutral-500">
              *Точный график работы специалиста уточняйте у администратора по телефону{" "}
              <a href="tel:+74742900909" className="whitespace-nowrap font-medium" style={{ color: BRAND }}>
                8 (4742) 90-09-09
              </a>
              .
            </p>
          </DisclosureItem>

          {/* Образование */}
          <DisclosureItem
            title="Сведения о профессиональном образовании и квалификации"
            subtitle="Медицинские работники ООО «МЭЦ «Комильфо»"
          >
            <div className="space-y-6">
              {educationEntries.map((e) => (
                <div key={e.name} className="rounded-xl border border-neutral-900/10 p-4 md:p-5">
                  <p className="font-display text-sm uppercase tracking-wide text-neutral-900 md:text-base">{e.name}</p>
                  <p className="font-body mt-1 text-xs font-light text-neutral-500 md:text-sm">{e.role}</p>
                  <ul className="mt-4 space-y-3">
                    {e.items.map((it, i) => (
                      <li key={i} className="grid grid-cols-1 gap-1 border-l-2 pl-4 text-sm md:grid-cols-[180px_1fr] md:gap-4" style={{ borderColor: BRAND }}>
                        <div className="text-[11px] uppercase tracking-wider text-neutral-500">{it.stage}</div>
                        <div className="space-y-1 text-neutral-800">
                          <div>{it.place}</div>
                          <div className="text-neutral-600">
                            <span className="font-medium text-neutral-800">Специальность:</span> {it.specialty} · <span className="font-medium text-neutral-800">Квалификация:</span> {it.qualification}
                          </div>
                          {it.certificate ? (
                            <div className="text-xs text-neutral-500">Сертификат / аккредитация: {it.certificate}</div>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </DisclosureItem>

          {/* Дисклеймер */}
          <DisclosureItem title="Правовая информация и согласия" subtitle="Публикация фото, видео и персональных данных">
            <div className="space-y-4 text-sm font-light leading-relaxed text-neutral-700">
              <p>
                Публикация фотоизображений и видеоматериалов на сайте осуществляется с письменного согласия субъектов персональных данных, либо фотоизображения и видеоматериалы приобретены в соответствии с договорами позирования граждан за плату, либо сгенерированы с использованием нейросетевых технологий. Указанные изображения в том числе могут быть подвергнуты изменениям при помощи графических редакторов и иных программных продуктов. Копирование, публичное воспроизведение, распространение запрещено.
              </p>
              <p>
                Публикация персональных данных (фамилия, имя, отчество (при наличии) медицинского работника, занимаемая должность; сведения из документа об образовании (уровень образования, организация, выдавшая документ об образовании, год выдачи, специальность, квалификация); сведения из сертификата специалиста (специальность, соответствующая занимаемой должности, срок действия); график работы и часы приёма медицинского работника) осуществляется в соответствии с требованиями Закона РФ от 07.02.1992 № 2300-1 «О защите прав потребителей», Правилами предоставления медицинскими организациями платных медицинских услуг, утв. Постановлением Правительства России от 11.05.2023 г. № 736, Приказа Министерства здравоохранения Российской Федерации от 30 декабря 2014 г. № 956н «Об информации, необходимой для проведения независимой оценки качества оказания услуг медицинскими организациями, и требований к содержанию и форме предоставления информации о деятельности медицинских организаций, размещаемой на официальных сайтах Министерства здравоохранения Российской Федерации, органов государственной власти субъектов Российской Федерации, органов местного самоуправления и медицинских организаций в информационно-телекоммуникационной сети «Интернет», а также на основании письменных согласий субъектов персональных данных. Копирование, публичное воспроизведение, распространение запрещено.
              </p>
            </div>
          </DisclosureItem>
        </div>
      </div>
    </div>
  );
}

function TeamTrustBlock() {
  const slides = [teamSlide1.url, teamSlide2.url, teamSlide3.url];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Текст */}
          <div className="lg:col-span-5">
            <span className="font-caption mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <span className="h-px w-10 bg-current" />
              Наша команда
            </span>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
              Ваша лучшая подруга{" "}
              <span style={{ color: BRAND }}>порекомендует</span> нас
            </h2>
            <p className="font-body mt-6 text-base font-light leading-relaxed text-neutral-600 md:text-lg">
              А в вопросе красоты вашей лучшей подругой станет наш специалист. Мы подберём
              протоколы, которые сохранят вашу естественность.
            </p>
            <button
              type="button"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-xs font-normal uppercase tracking-[0.1em] text-white transition-all md:mt-10"
              style={{ borderColor: BRAND, backgroundColor: BRAND }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#5E5470";
                e.currentTarget.style.borderColor = "#5E5470";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = BRAND;
                e.currentTarget.style.borderColor = BRAND;
              }}
              onClick={() => {
                document.getElementById("specialists")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span>Давайте познакомимся</span>
              <ChevronDown className="h-3 w-3 transition-transform group-hover:translate-y-1" />
            </button>
          </div>

          {/* Изображение с плавающей карточкой */}
          <div className="relative lg:col-span-7">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
                {slides.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt="Специалисты клиники Комильфо"
                    width={1024}
                    height={1280}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
                <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {slides.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/60"}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.2)] md:-bottom-6 md:-left-6 md:p-5">
                <p className="font-caption text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                  Наши специалисты
                </p>
                <img
                  src={mdKomilfoLogo.url}
                  alt="МД Комильфо"
                  className="mt-1.5 h-8 w-auto md:h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Index() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { open: openLead } = useLeadDialog();

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
      image: serviceVrachebnaya.url,
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <header className="absolute inset-x-0 top-0 z-20 w-full pt-4 md:pt-6">
          <div className="mx-auto flex max-w-6xl items-start px-6 md:px-8">
            <img
              src={headerLogo.url}
              alt="Camille Four"
              className="w-40 shrink-0 md:w-52"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <div className="flex-1 text-center">
              <p className="font-caption text-[10px] uppercase tracking-[0.16em] text-white/90 md:text-xs">
                Всё так как должно быть
              </p>
              <span className="mx-auto my-1.5 block h-px w-5 bg-white/40 md:my-2 md:w-6" />
              <p className="font-caption text-[9px] uppercase tracking-[0.12em] text-white/70 md:text-[10px]">
                Пн–Пт 9:00–21:00 · Сб 10:00–18:00 · Вс 10:00–16:00
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end text-right">
              <a
                href="tel:89623500909"
                className="font-display text-sm tracking-[0.04em] text-white transition-colors hover:text-white/80 md:text-base"
              >
                8(962)350-09-09
              </a>
              <p className="font-caption mt-1 text-[9px] uppercase tracking-[0.12em] text-white/70 md:text-[10px]">
                г.Липецк ул.Гагарина д.45А 5 этаж
              </p>

              <a
                href="https://vk.com/mdkomilfolip"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/20 md:px-4 md:py-2 md:text-[11px]"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.785 16.241s.288-.032.437-.194c.136-.148.132-.427.132-.427s-.02-1.304.585-1.496c.597-.19 1.363 1.26 2.178 1.817.615.42 1.082.328 1.082.328l2.177-.03s1.14-.071.599-.968c-.044-.074-.314-.66-1.617-1.868-1.365-1.264-1.182-1.058.462-3.24.998-1.332 1.397-2.145 1.272-2.494-.12-.327-.861-.24-.861-.24l-2.45.015s-.181-.025-.316.056c-.132.08-.217.264-.217.264s-.39 1.037-.91 1.921c-1.095 1.871-1.534 1.971-1.713 1.852-.418-.27-.314-1.085-.314-1.663 0-1.808.274-2.562-.534-2.756-.268-.065-.465-.108-1.148-.115-.876-.01-1.618.003-2.04.208-.28.139-.496.448-.364.466.163.022.533.1.729.363.254.34.244 1.103.244 1.103s.163 2.13-.38 2.395c-.373.18-.884-.187-1.982-1.865-.562-.858-.987-1.808-.987-1.808s-.082-.18-.229-.277c-.179-.12-.429-.158-.429-.158l-2.335.016s-.351.01-.48.162c-.116.137-.009.42-.009.42s1.835 4.317 3.912 6.493c1.907 1.999 4.075 1.864 4.075 1.864h.982z" />
                </svg>
                <span>ВКонтакте</span>
              </a>
            </div>
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
                        onClick={() => openLead(s.cta)}
                        className="group inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-xs font-normal uppercase tracking-[0.1em] transition-all"
                        style={{
                          borderColor: BRAND,
                          color: "#fff",
                          backgroundColor: BRAND,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#5E5470";
                          e.currentTarget.style.borderColor = "#5E5470";
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
        <div className="absolute inset-0 bg-[#7A6E8F]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center md:px-8 md:py-20">
          <div className="md:-translate-y-10">
            <h2 className="font-display whitespace-pre-line text-xl leading-[1.25] tracking-[0.01em] text-[#e5e5e5] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] md:text-3xl lg:text-4xl">
              {"Подберём персональную\u00a0\nстратегию вашей естественной красоты"}
            </h2>
            <button
              type="button"
              onClick={() => openLead("Записаться на консультацию")}
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
                ) : s.title === "Эстетическая\nкосметология" ? (
                  <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle
                        className="font-display text-2xl md:text-3xl"
                        style={{ color: BRAND }}
                      >
                        Эстетическая косметология
                      </DialogTitle>
                      <DialogDescription className="font-body pt-1 text-sm leading-relaxed text-neutral-500">
                        Выберите процедуру, чтобы увидеть подробности и записаться на приём.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-5">
                      <EstheticCosmetologyContent />
                    </div>
                  </DialogContent>

                ) : s.title === "Массаж" ? (
                  <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle
                        className="font-display text-2xl md:text-3xl"
                        style={{ color: BRAND }}
                      >
                        Массаж
                      </DialogTitle>
                      <DialogDescription className="font-body pt-1 text-sm leading-relaxed text-neutral-500">
                        Выберите процедуру, чтобы увидеть подробности и записаться на приём.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-5">
                      <MassageContent />
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
                    <PriceFileNote />
                  </DialogContent>
                )}
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Четвёртый экран — философия продукта: текст / изображение */}
      <section className="relative flex min-h-screen flex-col overflow-hidden md:flex-row">
        {/* Левая половина — фон с цветом из бренд-изображения */}
        <div
          className="relative flex w-full items-center justify-center overflow-hidden px-8 py-16 md:w-1/2 md:px-12 lg:px-20"
          style={{ background: "linear-gradient(160deg, #D6CCE3 0%, #CBC1D9 45%, #B8ADCE 100%)" }}
        >
          {/* Soft dimensional glows */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div
              className="absolute -left-20 top-1/4 h-[30rem] w-[30rem] rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)" }}
            />
            <div
              className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(122,110,143,0.18) 0%, rgba(122,110,143,0) 70%)" }}
            />
            <div
              className="absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(203,193,217,0.7) 0%, rgba(203,193,217,0) 70%)" }}
            />
          </div>

          <div className="relative z-10 max-w-xl">
            <h2 className="font-display text-2xl leading-[1.15] tracking-[0.01em] text-[#f5f5f5] drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)] md:text-3xl lg:text-4xl">
              Ваше желанное отражение в зеркале —{"\n"}
              это не просто «уколы красоты»
            </h2>
            <p className="font-body mt-6 text-sm font-light leading-relaxed text-black/80 md:mt-8 md:text-base">
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
        <div className="absolute inset-0 bg-[#7A6E8F]/10" />
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
              <img
                src={headerLogo.url}
                alt="Camille Four"
                className="h-7 w-auto object-contain object-left"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <div className="font-caption text-[10px] uppercase tracking-[0.18em] text-white/60">
                Нелегальные кабинеты
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {[
                {
                  us: (
                    <>
                      Сертифицированные препараты Вы сможете проверить через <span className="font-medium" style={{ color: BRAND }}>“Честный знак”</span>.
                    </>
                  ),
                  them: "Незарегистрированный контрафакт из Интернета — риск для здоровья и жизни.",
                },
                {
                  us: "Зарегистрированная медицинская техника.",
                  them: "Дешевые китайские аппараты, которые по документам являются бытовыми и не имеют допуска к медицинским процедурам.",
                },
                {
                  us: "Медицинский подход, аккредитованные специалисты, ведение медицинской документации на каждом приёме.",
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
        <div className="absolute inset-0 bg-[#7A6E8F]/10" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/25 to-transparent" />

        {/* Контент */}
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-end justify-center px-6 py-16 text-left md:px-8 md:py-20">
          <div className="text-left">
            <h2 className="font-display max-w-xl whitespace-pre-line text-2xl leading-[1.15] tracking-[0.01em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] md:text-3xl lg:text-4xl" style={{ color: "#D6CCE3" }}>
              Вы достойны профессионального{"\n"}
              отношения к вашему здоровью
            </h2>
            <p className="font-body mt-4 max-w-lg whitespace-pre-line text-base font-light leading-relaxed text-[#c4c4c4] md:mt-5 md:text-lg">
              Подберём персональную стратегию{"\n"}
              вашей естественной красоты на встрече с косметологом
            </p>

            <button
              type="button"
              onClick={() => openLead("Записаться на консультацию")}
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

      {/* Блок с подругой — editorial split showcase */}
      <TeamTrustBlock />

      {/* Блок наших специалистов */}
      <div id="specialists">
        <SpecialistsBlock />
      </div>

      {/* Экран призыва подписаться на группу ВКонтакте */}
      <section className="relative overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={teamImage.url}
          alt="Команда клиники Комильфо"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-6xl flex-col items-start justify-center px-6 py-16 md:px-8 md:py-20">
          <div className="max-w-xl">
            <h2 className="font-display max-w-xl text-2xl leading-[1.15] tracking-[0.01em] text-[#F5C1E2] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] md:text-3xl lg:text-4xl">
              Найдите своего специалиста
            </h2>
            <p className="font-body mt-4 text-sm font-light leading-relaxed text-white/85 md:mt-5 md:text-base">
              Тысячи женщин Липецка доверяют нам свою красоту, тело и здоровье — приходите, и мы станем вашими проверенными специалистами.
            </p>
            <p className="font-body mt-3 text-sm font-light leading-relaxed text-white/85 md:text-base">
              В нашей группе ВКонтакте мы бесплатно делимся советами, разборами и рекомендациями: познавательно, интересно и помогает решиться на первую встречу.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              <a
                href="https://vk.com/mdkomilfolip"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-xs font-normal uppercase tracking-[0.1em] transition-all md:px-7 md:py-3 md:text-sm"
                style={{
                  borderColor: "#fff",
                  color: "#fff",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = BRAND;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.785 16.241s.288-.032.437-.194c.136-.148.132-.427.132-.427s-.02-1.304.585-1.496c.597-.19 1.363 1.26 2.178 1.817.615.42 1.082.328 1.082.328l2.177-.03s1.14-.071.599-.968c-.044-.074-.314-.66-1.617-1.868-1.365-1.264-1.182-1.058.462-3.24.998-1.332 1.397-2.145 1.272-2.494-.12-.327-.861-.24-.861-.24l-2.45.015s-.181-.025-.316.056c-.132.08-.217.264-.217.264s-.39 1.037-.91 1.921c-1.095 1.871-1.534 1.971-1.713 1.852-.418-.27-.314-1.085-.314-1.663 0-1.808.274-2.562-.534-2.756-.268-.065-.465-.108-1.148-.115-.876-.01-1.618.003-2.04.208-.28.139-.496.448-.364.466.163.022.533.1.729.363.254.34.244 1.103.244 1.103s.163 2.13-.38 2.395c-.373.18-.884-.187-1.982-1.865-.562-.858-.987-1.808-.987-1.808s-.082-.18-.229-.277c-.179-.12-.429-.158-.429-.158l-2.335.016s-.351.01-.48.162c-.116.137-.009.42-.009.42s1.835 4.317 3.912 6.493c1.907 1.999 4.075 1.864 4.075 1.864h.982z" />
                </svg>
                <span>Подписаться на группу ВКонтакте</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={() => openLead("Записаться на встречу-знакомство")}
                className="group inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-xs font-normal uppercase tracking-[0.1em] transition-all md:px-7 md:py-3 md:text-sm"
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
                <span>Записаться на встречу-знакомство</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-neutral-950 py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-6 md:mb-8">
            <h2 className="font-display text-xl uppercase tracking-[0.08em] text-[#F5C1E2] md:text-2xl">
              Как добраться
            </h2>
            <p className="font-body mt-2 text-sm text-white/70 md:text-base">
              г. Липецк, ул. Гагарина, д. 45А, 5 этаж
            </p>
            <p className="font-body mt-2 text-sm text-white/60 md:text-base">
              Пн–Пт 9:00–21:00 · Сб 10:00–18:00 · Вс 10:00–16:00
            </p>

          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab9ee1753cb92e83ab8ba25232ea59f804fea405124fc08ebe98e9d61af17ce3b&source=constructor"
              width="100%"
              height="400"
              frameBorder="0"
              title="Карта проезда к МД «Комильфо»"
              className="block h-[300px] w-full md:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white/70">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-white/80">© Медико-эстетический центр «Комильфо», 2010–2026</p>
              <p className="mt-4 max-w-md text-xs leading-relaxed text-white/50">
                Необходима консультация специалиста. Имеются противопоказания. Данный интернет-сайт носит исключительно справочно-информационный характер, все предложения не являются публичной офертой.
              </p>
              <p className="mt-4 text-xs text-white/60">
                г. Липецк, ул. Гагарина, д. 45А, 5 этаж
              </p>
              <a
                href={privacyPolicy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs underline underline-offset-4 hover:text-white"
                style={{ color: BRAND }}
              >
                Политика конфиденциальности
              </a>
              <div className="mt-4">
                <ClientsInfoDialog />
              </div>
            </div>
            <div className="md:text-right">
              <a href="tel:89623500909" className="text-2xl font-light text-white hover:opacity-80 md:text-3xl">
                8(962)350-09-09
              </a>
              <div className="mt-4">
                <a
                  href="mailto:info@komilfocentr.ru"
                  className="text-sm hover:opacity-80"
                  style={{ color: BRAND }}
                >
                  info@komilfocentr.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const clientDocs: { title: string; url: string }[] = [
  { title: "Федеральный закон от 21.11.2011 № 323-ФЗ «Об основах охраны здоровья граждан в РФ»", url: docFz323.url },
  { title: "Правила предоставления платных медицинских услуг, утв. Постановлением Правительства РФ от 11.05.2023 № 736", url: docPravila736.url },
  { title: "Закон РФ от 07.02.1992 № 2300-1 «О защите прав потребителей»", url: docZakon23001.url },
  { title: "Постановление Правительства РФ от 31.12.2020 № 2463 «Об утверждении правил продажи товаров по договору розничной купли-продажи»", url: docPostanovlenie2463.url },
  { title: "Порядок оказания медицинской помощи населению по профилю «косметология»", url: docPoryadokKosmetologiya.url },
  { title: "Порядок оказания медицинской помощи населению по профилю «дерматовенерология»", url: docPoryadokDermatovenerologiya.url },
  { title: "Порядок оказания медицинской помощи населению по профилю «акушерство и гинекология»", url: docPoryadokAkusherstvoGinekologiya.url },
  { title: "Памятка о правах и обязанностях пациентов", url: docPamyatkaPrava.url },
  { title: "Сведения о контролирующих органах", url: docKontrolOrgany.url },
  { title: "Порядок ознакомления пациентов с медицинской документацией", url: docPrikaz789n.url },
  { title: "Порядок и сроки предоставления медицинских документов (их копий) и выписок из них", url: docPrikaz1050n.url },
  { title: "Шаблон заявления для ознакомления с медицинской документацией в помещении медицинской организации", url: docShablonZayavleniya.url },
  { title: "Шаблон заявления о предоставлении копии медицинской документации", url: docShablonKopiya.url },
  { title: "Образец заявления пациента на выдачу копии медицинской документации", url: docObrazecKopiya.url },
];

const localDocs: { title: string; url: string }[] = [
  { title: "О видах медицинской помощи, оказываемой Медико-эстетическим центром «Комильфо»", url: docVidyMedpomoshchi.url },
  { title: "Правила записи на первичный приём", url: docPravilaZapisi.url },
  { title: "Правила подготовки к исследованиям", url: docPravilaPodgotovki.url },
  { title: "Сведения об образовании / сертификаты сотрудников", url: docSvedeniyaObrazovanie.url },
];

function ClientsInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/80 transition-all hover:border-white/50 hover:bg-white/10 hover:text-white"
        >
          <FileText className="h-3.5 w-3.5" />
          <span>Для клиентов</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-lg uppercase tracking-wide md:text-xl">
            Для пациентов «МЭЦ «MD-Комильфо»
          </DialogTitle>
          <DialogDescription>
            Федеральное законодательство в сфере охраны здоровья граждан РФ.
          </DialogDescription>
        </DialogHeader>
        <ul className="mt-2 divide-y divide-neutral-900/10">
          {clientDocs.map((d) => (
            <li key={d.url}>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">{d.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <h4 className="font-display text-sm uppercase tracking-wide" style={{ color: BRAND }}>
            Локальные нормативно-правовые акты, разработанные администрацией «МЭЦ «MD-Комильфо», в целях наиболее качественного оказания медицинских услуг
          </h4>
          <ul className="mt-2 divide-y divide-neutral-900/10">
            {localDocs.map((d) => (
              <li key={d.url}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                  style={{ color: BRAND }}
                >
                  <FileText className="mt-0.5 h-4 w-4 flex-none" />
                  <span className="underline underline-offset-4">{d.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 rounded-lg border p-4 text-sm leading-relaxed text-neutral-700" style={{ borderColor: `${BRAND}40`, background: `${BRAND}0D` }}>
          <span className="font-semibold" style={{ color: BRAND }}>Важно!</span> Уважаемые пациенты! Администрация «Медико-эстетического центра «MD-Комильфо» уведомляет Вас о том, что несоблюдение указаний и рекомендаций специалиста центра, предоставляющего вам платную медицинскую услугу, а также нарушение назначенного вам режима лечения, могут снизить качество предоставляемой медицинской услуги, а также повлечь за собой невозможность её завершения в срок или отрицательно сказаться на состоянии вашего здоровья.
        </div>
        <div className="mt-6">
          <h4 className="font-display text-base uppercase tracking-wide md:text-lg" style={{ color: BRAND }}>
            Программа государственных гарантий
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Уважаемые клиенты, уведомляем вас о том, что в настоящее время «Медико-эстетический центр «MD-Комильфо» не предоставляет медицинские услуги в рамках программы государственных гарантий бесплатного оказания гражданам медицинской помощи. Все услуги центра предоставляются исключительно на возмездной основе.
          </p>
          <ul className="mt-3 divide-y divide-neutral-900/10">
            <li>
              <a
                href={docFz326.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Федеральный закон от 29.11.2010 № 326-ФЗ «Об обязательном медицинском страховании в Российской Федерации»</span>
              </a>
            </li>
            <li>
              <a
                href="http://publication.pravo.gov.ru/document/0001202512300036"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Постановление Правительства РФ от 29.12.2025 № 2188 «О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2026 год и на плановый период 2027 и 2028 годов»</span>
              </a>
            </li>
            <li>
              <a
                href="http://publication.pravo.gov.ru/document/4800202501050001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Постановление Правительства Липецкой области от 28.12.2024 № 739 «Об утверждении Программы государственных гарантий бесплатного оказания гражданам на территории Липецкой области медицинской помощи на 2025 год и на плановый период 2026 и 2027 годов»</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="font-display text-base uppercase tracking-wide md:text-lg" style={{ color: BRAND }}>
            Перечень ЖНВЛП
          </h4>
          <ul className="mt-3 divide-y divide-neutral-900/10">
            <li>
              <a
                href="http://publication.pravo.gov.ru/document/0001202512240041"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Перечень ЖНВЛП 2026</span>
              </a>
            </li>
            <li>
              <a
                href="http://publication.pravo.gov.ru/document/0001202512240041"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Распоряжение Правительства РФ от 12.10.2019 № 2406-р «Об утверждении перечня жизненно необходимых и важнейших лекарственных препаратов, а также перечней лекарственных препаратов для медицинского применения и минимального ассортимента лекарственных препаратов, необходимых для оказания медицинской помощи»</span>
              </a>
            </li>
            <li>
              <a
                href={docPostanovlenie890.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Постановление Правительства РФ от 30.07.1994 № 890 «О государственной поддержке развития медицинской промышленности и улучшении обеспечения населения и учреждений здравоохранения лекарственными средствами и изделиями медицинского назначения»</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="font-display text-base uppercase tracking-wide md:text-lg" style={{ color: BRAND }}>
            Прайс
          </h4>
          <ul className="mt-3 divide-y divide-neutral-900/10">
            <li>
              <a
                href={docPraysKomilfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Прайс 2026</span>
              </a>
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
