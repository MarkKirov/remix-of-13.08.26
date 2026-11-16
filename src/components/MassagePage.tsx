import { CosmetologyPage } from "@/components/CosmetologyPage";
import { massageProcedures } from "@/lib/service-catalog";
import massageImage from "@/assets/optimized/service-massage.webp.asset.json";

export default function MassagePage() {
  return <CosmetologyPage
    title="Массаж"
    description="Ручной массаж и SPA-уход за телом с кедровой фитобочкой, обёртываниями и скрабированием для расслабления и заботы о коже."
    consultation="Консультация по массажу и SPA-уходу"
    priceDescription="Ручной массаж, обёртывания и кедровая фитобочка: описания и стоимость процедур. Подходящую программу и точную стоимость определяет специалист на консультации."
    image={massageImage.url}
    procedures={massageProcedures}
  />;
}