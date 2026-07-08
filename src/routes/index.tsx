import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Plus, ChevronUp, ChevronDown } from "lucide-react";
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
import consultationBg from "@/assets/consultation-bg.png.asset.json";
import specialist1 from "@/assets/specialist-1.jpg";
import specialist2 from "@/assets/specialist-2.jpg";
import specialist3 from "@/assets/specialist-3.jpg";
import specialist4 from "@/assets/specialist-4.jpg";
import specialistZhuravleva from "@/assets/specialist-zhuravleva.jpg.asset.json";
import teamImage from "@/assets/team.jpg.asset.json";
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
};


const medicalProcedures: Procedure[] = [
  {
    name: "Ботулинотерапия",
    price: "150 ₽ / 1 ед.",
    preparations: ["Препарат — уточняется", "Препарат — уточняется"],
  },
  {
    name: "Биоревитализация. Биорепарация",
    price: "7 000 ₽",
    preparations: ["Препарат — уточняется", "Препарат — уточняется"],
  },
  {
    name: "Гидрорезерв губ",
    price: "от 14 250 ₽",
    preparations: ["Препарат — уточняется"],
  },
  {
    name: "Увеличение объёма губ",
    price: "от 14 250 ₽",
    preparations: ["Препарат — уточняется"],
  },
  {
    name: "Лечение гипергидроза",
    price: "от 120 ₽ / 1 ед.",
    preparations: ["Препарат — уточняется"],
  },
  {
    name: "Армирование кожи полимолочной кислотой (коллагенстимуляция)",
    price: "от 18 000 ₽",
    preparations: ["Препарат — уточняется"],
  },
  {
    name: "Озонотерапия",
    price: "от 600 ₽",
    preparations: [],
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
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
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
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
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
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
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
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
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
        </button>
        {procedure.subServices || procedure.groups ? (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="font-caption hidden shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-normal uppercase tracking-[0.14em] transition-colors md:inline-block"
            style={{ borderColor: BRAND, color: BRAND }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = BRAND;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = BRAND;
            }}
          >
            Весь список
          </button>
        ) : (
          <span
            className="font-caption hidden shrink-0 text-sm font-bold uppercase tracking-[0.14em] md:inline"
            style={{ color: BRAND }}
          >
            {procedure.price}
          </span>
        )}
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
              {procedure.note && (
                <div
                  className="mt-4 rounded-xl border-l-2 px-4 py-3"
                  style={{ borderColor: BRAND, backgroundColor: "rgba(174,49,166,0.06)" }}
                >
                  <p className="font-body text-[13px] leading-relaxed text-neutral-700 md:text-sm">
                    {procedure.note}
                  </p>
                </div>
              )}
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
    name: "Лазерная шлифовка",
    price: "по запросу",
    detailsLabel: "Показания",
    preparations: ["Постакне", "Рубцы", "Растяжки"],
  },
  {
    name: "СМАС-лифтинг",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Ulthera — ультразвуковой SMAS-лифтинг",
  },
  {
    name: "Фототерапия IPL",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Viora V30 — IPL-фототерапия",
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
    subServices: [
      { name: "Выполнение косметического массажа тела либо его отдельных частей — костюм Beautyliner", price: "1 350 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — массаж тела Beautyliner", price: "1 650 ₽" },
      { name: "Выполнение косметического массажа тела либо его отдельных частей — нанесение антицеллюлитного крема Beautyliner, 1 саше", price: "330 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
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
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
  },

  {
    name: "Ультрафонофорез кожи лица и шеи",
    price: "по запросу",
    detailsLabel: "Аппарат",
    preparations: [],
    device: "Аппарат уточняется",
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

const estheticProcedures: Procedure[] = [
  {
    name: "Дерматологические пилинги",
    price: "от 950 ₽",
    detailsLabel: "Аппаратные пилинги",
    preparations: [],
    subServices: [
      { name: "Ультразвуковой пилинг (ультразвуковая чистка лица в подготовительном этапе к любой программе по уходу за кожей лица)", price: "950 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
  },
  {
    name: "Химические пилинги",
    price: "от 950 ₽",
    detailsLabel: "Виды пилингов",
    preparations: [],
    subServices: [
      { name: "Дерматологический пилинг химический Dermatime 5n RRT 1 саше, Испания", price: "950 ₽" },
      { name: "Дерматологический пилинг химический Dermatime Argilactic A, Испания", price: "2 450 ₽" },
      { name: "Дерматологический пилинг химический Dermatime Azelaic A15 раствор, Испания", price: "2 450 ₽" },
      { name: "Дерматологический пилинг химический Dermatime Azelaic A20 гель, Испания", price: "2 450 ₽" },
      { name: "Дерматологический пилинг химический Dermatime Ferulic A12 раствор", price: "3 250 ₽" },
      { name: "Дерматологический пилинг химический JM Peel осветляющий пилинг, Испания", price: "3 000 ₽" },
      { name: "Дерматологический пилинг химический Dermatime Lactic A80, Испания", price: "2 450 ₽" },
      { name: "Дерматологический пилинг химический Dermatime Mandelic A40 гель, Испания", price: "3 000 ₽" },
      { name: "Дерматологический пилинг химический Dermatime Mandelic A40 комбинированный, Испания", price: "3 580 ₽" },
      { name: "Дерматологический пилинг химический Dermatime Mandelic A40 раствор, Испания", price: "2 900 ₽" },
      { name: "Дерматологический пилинг химический Dermatime Peruvic A40 раствор, Испания", price: "3 200 ₽" },
      { name: "Дерматологический пилинг химический Mediderma ANTI-AKNE, Испания", price: "3 400 ₽" },
      { name: "Дерматологический пилинг химический Mediderma MELASPEEL R, Испания", price: "2 900 ₽" },
      { name: "Дерматологический пилинг химический Mediderma RETISES CT YELLOW PEEL (жёлтый), Испания", price: "5 250 ₽" },
      { name: "Дерматологический пилинг химический Mediderma SALIPEEL PLUS (гелевый), Испания", price: "2 900 ₽" },
      { name: "Дерматологический пилинг химический Mediderma SALIPEEL DS (водно-спиртовой), Испания", price: "2 900 ₽" },
      { name: "Дерматологический пилинг химический Mediderma Крем RETINOL RETISES 1%, Испания", price: "950 ₽" },
      { name: "Дерматологический пилинг химический TMC3+ACTION (lite)", price: "6 500 ₽" },
      { name: "Дерматологический пилинг химический TMC3+ACTION (medium)", price: "8 700 ₽" },
      { name: "Дерматологический пилинг химический TMC3+ACTION (strong)", price: "11 150 ₽" },
      { name: "Дерматологический пилинг химический биоревитализант BIOR5 Harmony Castle (Италия)", price: "5 000 ₽" },
      { name: 'Дерматологический пилинг химический "ЗОЛУШКА" BIOT2+ISecret Harmony Castle (Италия)', price: "5 000 ₽" },
      { name: "Дерматологический пилинг химический иллюминизер BIOT 2 Harmony Castle (Италия)", price: "5 000 ₽" },
      { name: "Дерматологический пилинг химический интимный омолаживающий и осветляющий ISecret Harmony Castle (Италия)", price: "3 850 ₽" },
      { name: "Дерматологический пилинг химический осветляющая программа-пилинг MELP3 Harmony Castle (Италия)", price: "5 500 ₽" },
      { name: "Дерматологический пилинг химический перед биоревитализацией BIOR5 Harmony Castle (Италия)", price: "2 750 ₽" },
      { name: "Дерматологический пилинг химический периорбитальный омолаживающий и осветляющий ISecret Harmony Castle (Италия)", price: "2 750 ₽" },
      { name: "Дерматологический пилинг химический ретиноловый Dermatime GOLDEN YELLOW PEEL", price: "5 450 ₽" },
      { name: "Дерматологический пилинг химический с гликолевой кислотой GLICO C-20, Испания", price: "4 100 ₽" },
      { name: "Дерматологический пилинг ручная чистка при пилинге", price: "1 100 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
  },
  {
    name: "Косметологические уходы",
    price: "от 350 ₽",
    detailsLabel: "Виды уходов",
    preparations: [],
    subServices: [
      { name: "Процедура сестринского ухода — Массаж лица Academie", price: "1 200 ₽" },
      { name: "Процедура сестринского ухода — Метаболический массаж лица", price: "2 000 ₽" },
      { name: "Процедура сестринского ухода — Нанесение косметического средства Ампула Academie 1 шт", price: "1 600 ₽" },
      { name: "Комбинируемые программы ухода за кожей лица Dermatime — Неинвазивная карбокситерапия CO2 CarboxyPro, Испания", price: "3 300 ₽" },
      { name: "Комбинируемые программы ухода Keenwell — Базовый уход (BIOLOGICOS-биоконцентрат GLYCO C-20), Испания", price: "1 550 ₽" },
      { name: "Комбинируемые программы ухода Keenwell — Базовый уход (BIOLOGICOS-биоконцентрат REVITAL), Испания", price: "1 100 ₽" },
      { name: "Комбинируемые программы ухода Keenwell — Базовый уход (BIOLOGICOS-биоконцентрат H2O), Испания", price: "1 100 ₽" },
      { name: "Комбинируемые программы ухода Keenwell — Базовый уход (Демакияж), Испания", price: "350 ₽" },
      { name: "Комбинируемые программы ухода Keenwell — Базовый уход (Завершающий крем), Испания", price: "350 ₽" },
      { name: "Комбинируемые программы ухода Keenwell — Базовый уход (Маска тип 1 — PBP), Испания", price: "700 ₽" },
      { name: "Комбинируемые программы ухода Keenwell — Базовый уход (Маска тип 2 — Альгинатная номерная), Испания", price: "1 900 ₽" },
      { name: 'Комбинируемые программы ухода Keenwell — Базовый уход (Маска тип 6 — Альгинатная маска "Французский парадокс"), Испания', price: "1 350 ₽" },
      { name: "Комбинируемые программы ухода Keenwell — Базовый уход (Скраб-пилинг 1 тип), Испания", price: "350 ₽" },
      { name: 'Комбинируемые программы ухода Keenwell — Базовый уход (Скраб-пилинг "сияние кожи"), Испания', price: "450 ₽" },
      { name: 'Комплексная программа ухода за кожей лица Academie — "Кислородно-стимулирующая процедура"', price: "7 650 ₽" },
      { name: 'Комплексная программа ухода за кожей лица Academie — "Оптимальное увлажнение"', price: "7 150 ₽" },
      { name: 'Комплексная программа ухода за кожей лица Academie — "Процедура PRO-AGE"', price: "9 900 ₽" },
      { name: 'Комплексная программа ухода за кожей лица Academie — "Процедура против покраснений для чувствительной кожи"', price: "11 800 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
  },
  {
    name: "Чистка спины",
    price: "4 000 ₽",
    detailsLabel: "Процедура",
    preparations: [],
    subServices: [
      { name: "Процедура сестринского ухода — Чистка спины методом дезинкрустации Keenwell (Маска), Испания", price: "4 000 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
  },
  {
    name: "Чистка лица",
    price: "от 330 ₽",
    detailsLabel: "Виды чистки",
    preparations: [],
    subServices: [
      { name: "Процедура сестринского ухода — Атравматическая чистка лица на косметике HollyLand (Израиль)", price: "3 250 ₽" },
      { name: "Процедура сестринского ухода — Удаление милиумов кожи более 10 шт.", price: "1 450 ₽" },
      { name: "Процедура сестринского ухода — Удаление милиумов кожи единичные до 5 шт.", price: "700 ₽" },
      { name: "Процедура сестринского ухода — Удаление милиумов кожи от 6 до 10 шт.", price: "950 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом дезинкрустации Keenwell (Д'Арсонваль), Испания", price: "500 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом дезинкрустации Keenwell (Демакияж), Испания", price: "330 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом дезинкрустации Keenwell (Завершающий крем), Испания", price: "330 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом дезинкрустации Keenwell (Маска), Испания", price: "1 600 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом дезинкрустации Keenwell (Распаривание дезинкрустация р-ом+ИК+мех. чистка), Испания", price: "1 050 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом дезинкрустации Keenwell (Скраб-пилинг 1 тип), Испания", price: "440 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом дезинкрустации Keenwell (Скраб-пилинг PBP), Испания", price: "400 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом прохладного гидрирования Keenwell (Д'Арсонваль), Испания", price: "400 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом прохладного гидрирования Keenwell (Демакияж), Испания", price: "330 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом прохладного гидрирования Keenwell (Завершающий крем), Испания", price: "330 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом прохладного гидрирования Keenwell (Маска), Испания", price: "1 600 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом прохладного гидрирования Keenwell (PBP миндальный WO), Испания", price: "600 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом прохладного гидрирования Keenwell (Скраб-пилинг 1 тип), Испания", price: "400 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом прохладного гидрирования Keenwell (Скраб-пилинг PBP)", price: "400 ₽" },
      { name: "Процедура сестринского ухода — Чистка методом прохладного гидрирования Keenwell (Чистка), Испания", price: "1 050 ₽" },
    ],
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
  },
  {
    name: "Эпиляция",
    price: "от 440 ₽",
    detailsLabel: "Зоны эпиляции",
    preparations: [],
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
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
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
    note: "Точную цену вы узнаете на первичной консультации — она бесплатна. Наш специалист подберёт подходящую услугу, рассчитает стоимость и определит нужное количество процедур. Не назначайте курс себе самостоятельно — сначала проконсультируйтесь, и мы составим ваш персональный план создания естественной красоты.",
  },
];

function EstheticCosmetologyContent() {
  return (
    <div className="space-y-2.5">
      {estheticProcedures.map((p) => (
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
    role: "Главный врач, врач-косметолог",
    focus: "Главный врач центра, врач-косметолог, специалист по лазерным технологиям, инъекционным методикам, методикам нитевого лифтинга APTOS и методике плазмолифтинга, озонотерапевт.",
    about: "",
    education: "",
    image: specialistZhuravleva.url,
  },
  {
    id: 2,
    name: "Елена Смирнова",
    role: "Главный врач",
    focus: "Комплексная anti-age терапия, медицинская косметология, регенеративная эстетика.",
    about: "15 лет в эстетической медицине. Создаёт индивидуальные стратегии сохранения молодости и естественной красоты.",
    education: "РМАПО; стажировка в клиниках Швейцарии и Франции по нитевым и инъекционным методикам.",
    image: specialist2,
  },
  {
    id: 3,
    name: "Анна Кузнецова",
    role: "Косметолог-эстетист",
    focus: "Аппаратная косметология, уходовые программы, подготовка к инъекционным процедурам.",
    about: "Помогает клиентам поддерживать результаты процедур через домашний уход и регулярные аппаратные курсы.",
    education: "Медицинский колледж; сертифицированные курсы по аппаратным методикам и профессиональной косметике.",
    image: specialist3,
  },
  {
    id: 4,
    name: "Мария Волкова",
    role: "Массажист",
    focus: "Аппаратный и ручной массаж лица и тела, лимфодренаж, коррекция фигуры.",
    about: "Подбирает программы для профилактики возрастных изменений и поддержания тонуса кожи и мышц.",
    education: "Медицинский университет; курсы аппаратного массажа LPG и миостимуляции.",
    image: specialist4,
  },
];

function SpecialistsBlock() {
  const [active, setActive] = useState(0);
  const s = specialists[active];
  const go = (dir: 1 | -1) => setActive((i) => (i + dir + specialists.length) % specialists.length);

  return (
    <section className="relative py-20 text-neutral-900 md:py-28" style={{ backgroundColor: "#F0A8DC" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Текст */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <span className="font-caption mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-900/70">
              <span className="h-px w-10 bg-current" />
              Наши специалисты
            </span>
            <div>
              <h2 className="font-display text-3xl font-black uppercase leading-tight text-neutral-200 md:text-4xl lg:text-5xl">
                {s.name.split(" ").map((part, i) => (
                  <span key={i} className="block">
                    {part}
                  </span>
                ))}
              </h2>
              <p className="font-body mt-6 text-base font-light leading-relaxed text-neutral-900">
                {s.focus}
              </p>
            </div>
          </div>

          {/* Фото + подпись */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={s.image}
                  alt={s.name}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: active === 0 ? "center 20%" : "center" }}
                />
              </div>
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
                  className={`relative h-12 w-12 overflow-hidden rounded-full transition-all md:h-14 md:w-14 ${i === active ? "ring-2 ring-offset-2 ring-offset-[#F0A8DC]" : "opacity-60 hover:opacity-100"}`}
                  style={i === active ? { ["--tw-ring-color" as string]: BRAND } : undefined}
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
      </div>
    </section>
  );
}

function TeamTrustBlock() {
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
              <span style={{ color: BRAND }}>порекомендует</span>{" "}
              нас вам
            </h2>
            <p className="font-body mt-6 text-base font-light leading-relaxed text-neutral-600 md:text-lg">
              А в вопросе красоты вашей лучшей подругой станет наш специалист. Мы подбираем
              протоколы, которые сохраняют вашу естественность, и сопровождаем вас на каждом
              этапе — от первой диагностики до долгосрочной стратегии.
            </p>
            <button
              type="button"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-xs font-normal uppercase tracking-[0.1em] text-white transition-all md:mt-10"
              style={{ borderColor: BRAND, backgroundColor: BRAND }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C24CBA";
                e.currentTarget.style.borderColor = "#C24CBA";
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
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
                <img
                  src={teamImage.url}
                  alt="Команда клиники Комильфо"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.2)] md:-bottom-6 md:-left-6 md:p-5">
                <p className="font-caption text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                  Наши специалисты
                </p>
                <p className="font-display mt-1 text-lg uppercase tracking-wide text-neutral-900 md:text-xl">
                  Комильфо Эксперт
                </p>
              </div>
              <div
                className="absolute -top-6 -right-4 grid h-28 w-28 place-items-center rounded-2xl text-white shadow-[0_16px_40px_-12px_rgba(0,0,0,0.25)] md:-top-7 md:-right-7 md:h-32 md:w-32"
                style={{ backgroundColor: BRAND }}
              >
                <div className="text-center">
                  <p className="font-display text-3xl font-bold leading-none md:text-4xl">12+</p>
                  <p className="font-caption mt-1 text-[8px] uppercase tracking-[0.06em] md:text-[9px] md:tracking-[0.08em]">
                    специалистов
                  </p>
                </div>
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
          style={{ backgroundColor: "#f0a8dc" }}
        >
          <div className="max-w-xl">
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

      {/* Блок с подругой — editorial split showcase */}
      <TeamTrustBlock />

      {/* Блок наших специалистов */}
      <div id="specialists">
        <SpecialistsBlock />
      </div>
    </div>
  );
}
