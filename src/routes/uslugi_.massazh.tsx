import { createFileRoute } from "@tanstack/react-router";
import MassagePage from "@/components/MassagePage";

export const Route = createFileRoute("/uslugi_/massazh")({
  head: () => ({
    meta: [
      { title: "Массаж в Липецке — цены 2026 | MD-Комильфо" },
      { name: "description", content: "Ручной массаж и SPA-уход за телом с кедровой фитобочкой, обёртываниями и скрабированием для расслабления и заботы о коже. Цены и запись в MD-Комильфо, Липецк." },
      { property: "og:title", content: "Массаж — MD-Комильфо" },
      { property: "og:description", content: "Ручной массаж и SPA-уход за телом с кедровой фитобочкой, обёртываниями и скрабированием для расслабления и заботы о коже." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://komilfocentr.ru/uslugi/massazh" }],
  }),
  component: MassagePage,
});