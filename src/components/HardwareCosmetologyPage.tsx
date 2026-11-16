import { CosmetologyPage } from "@/components/CosmetologyPage";
import { hardwareProcedures } from "@/lib/service-catalog";
import hardwareImage from "@/assets/service_hardware.png.asset.json";

export default function HardwareCosmetologyPage() {
  return <CosmetologyPage
    title="Аппаратная косметология"
    description="Современные аппаратные методики для ухода за лицом и телом. Индивидуальный подбор процедур с учётом состояния кожи и ваших пожеланий."
    consultation="Консультация по аппаратной косметологии"
    priceDescription="Описание аппаратных процедур, используемое оборудование и стоимость. Подходящую программу и точную стоимость определяет специалист на консультации."
    image={hardwareImage.url}
    procedures={hardwareProcedures}
  />;
}