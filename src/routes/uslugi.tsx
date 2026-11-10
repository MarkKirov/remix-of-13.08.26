import { createFileRoute } from "@tanstack/react-router";
import ServiceCatalogPage from "@/components/ServiceCatalogPage";

export const Route = createFileRoute("/uslugi")({
  head: () => ({
    meta: [
      { title: "Услуги и цены — косметология и массаж | MD-Комильфо" },
      { name: "description", content: "Врачебная, эстетическая и аппаратная косметология, массаж в MD-Комильфо. Описания процедур, цены, полный прайс и запись на консультацию." },
      { property: "og:title", content: "Услуги и цены — MD-Комильфо" },
      { property: "og:description", content: "Все направления косметологии и массажа: процедуры, цены и запись на консультацию в Комильфо." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ServiceCatalogPage,
});