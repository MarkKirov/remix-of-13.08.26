import { createFileRoute } from "@tanstack/react-router";
import HardwareCosmetologyPage from "@/components/HardwareCosmetologyPage";

export const Route = createFileRoute("/uslugi_/apparatnaya-kosmetologiya")({
  head: () => ({
    meta: [
      { title: "Аппаратная косметология в Липецке — цены 2026 | MD-Комильфо" },
      { name: "description", content: "Аппаратная косметология в MD-Комильфо, Липецк: лазерные процедуры, ультразвуковой СМАС-лифтинг и аппаратный массаж. Описания, оборудование, цены 2026 и запись." },
      { property: "og:title", content: "Аппаратная косметология — MD-Комильфо" },
      { property: "og:description", content: "Аппаратные процедуры для лица и тела в Липецке: описания, оборудование, цены, полный прайс 2026 и запись на консультацию." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://komilfocentr.ru/uslugi/apparatnaya-kosmetologiya" }],
  }),
  component: HardwareCosmetologyPage,
});