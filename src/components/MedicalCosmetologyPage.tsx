import { CosmetologyPage } from "@/components/CosmetologyPage";
import { medicalProcedures } from "@/lib/service-catalog";
import medicalImage from "@/assets/optimized/service-vrachebnaya.webp.asset.json";

export default function MedicalCosmetologyPage() {
  return <CosmetologyPage
    title="Врачебная косметология"
    description="Консультация врача-косметолога, инъекционные процедуры и персональный подбор программы для сохранения естественной красоты."
    consultation="Консультация по врачебной косметологии"
    priceDescription="Описание процедур, используемые препараты и стоимость. Подходящую программу и точную стоимость определяет врач на консультации."
    image={medicalImage.url}
    procedures={medicalProcedures}
  />;
}
