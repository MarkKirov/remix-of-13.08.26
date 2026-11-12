import { createFileRoute } from "@tanstack/react-router";
import EstheticCosmetologyPage from "@/components/EstheticCosmetologyPage";

export const Route = createFileRoute("/uslugi_/esteticheskaya-kosmetologiya")({
  head: () => ({
    meta: [
      { title: "Эстетическая косметология в Липецке — цены 2026 | MD-Комильфо" },
      { name: "description", content: "Эстетическая косметология в MD-Комильфо, Липецк: уходы за лицом, чистки, пилинги, эпиляция, маникюр и педикюр. Описания процедур, цены 2026 и запись." },
      { property: "og:title", content: "Эстетическая косметология — MD-Комильфо" },
      { property: "og:description", content: "Уходы и процедуры эстетической косметологии в Липецке: описания, цены, полный прайс 2026 и запись на консультацию." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://komilfocentr.ru/uslugi/esteticheskaya-kosmetologiya" }],
  }),
  component: EstheticCosmetologyPage,
});