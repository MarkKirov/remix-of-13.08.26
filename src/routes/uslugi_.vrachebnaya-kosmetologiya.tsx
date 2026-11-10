import { createFileRoute } from "@tanstack/react-router";
import MedicalCosmetologyPage from "@/components/MedicalCosmetologyPage";

export const Route = createFileRoute("/uslugi_/vrachebnaya-kosmetologiya")({
  head: () => ({
    meta: [
      { title: "Врачебная косметология в Липецке — цены 2026 | MD-Комильфо" },
      { name: "description", content: "Врачебная косметология в MD-Комильфо, Липецк: ботулинотерапия, биоревитализация, контурная пластика и другие процедуры. Описания, препараты, цены 2026 и запись к врачу-косметологу." },
      { property: "og:title", content: "Врачебная косметология — MD-Комильфо" },
      { property: "og:description", content: "Процедуры врачебной косметологии в Липецке: описания, препараты, цены, полный прайс 2026 и запись на консультацию." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://komilfocentr.ru/uslugi/vrachebnaya-kosmetologiya" }],
  }),
  component: MedicalCosmetologyPage,
});