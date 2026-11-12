import { CosmetologyPage } from "@/components/CosmetologyPage";
import { estheticProcedures } from "@/lib/service-catalog";
import estheticImage from "@/assets/optimized/service-esthetic.webp.asset.json";

export default function EstheticCosmetologyPage() {
  return <CosmetologyPage
    title="Эстетическая косметология"
    description="Профессиональные уходы за лицом, чистки, пилинги, эпиляция, маникюр и педикюр. Подбор процедур для ухода за кожей и сохранения естественной красоты."
    consultation="Консультация по эстетической косметологии"
    priceDescription="Описание процедур, уходовые программы и стоимость. Подходящий уход и точную стоимость определяет специалист на консультации."
    image={estheticImage.url}
    procedures={estheticProcedures}
  />;
}