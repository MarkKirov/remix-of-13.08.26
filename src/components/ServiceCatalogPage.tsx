import { ProcedureDetails } from "@/components/ProcedureDetails";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadDialogProvider, useLeadDialog } from "@/components/LeadDialog";
import { medicalProcedures, estheticProcedures, hardwareProcedures, massageProcedures } from "@/lib/service-catalog";
import medicalImage from "@/assets/optimized/service-vrachebnaya.webp.asset.json";
import estheticImage from "@/assets/optimized/service-esthetic.webp.asset.json";
import hardwareImage from "@/assets/optimized/service-apparatnaya.webp.asset.json";
import massageImage from "@/assets/optimized/service-massage.webp.asset.json";
import logo from "@/assets/header_logo.svg.asset.json";
import priceFile from "@/assets/prays-komilfo.xls.asset.json";

const directions = [
  { id: "vrachebnaya", name: "Врачебная косметология", image: medicalImage.url, description: "Консультация врача-косметолога, инъекционные процедуры, препараты и персональный подбор программы.", procedures: medicalProcedures },
  { id: "esteticheskaya", name: "Эстетическая косметология", image: estheticImage.url, description: "Профессиональные уходы за лицом, чистки, пилинги, эпиляция, маникюр и педикюр.", procedures: estheticProcedures },
  { id: "apparatnaya", name: "Аппаратная косметология", image: hardwareImage.url, description: "Лазерные процедуры, аппаратный уход за кожей лица и тела, лифтинг и эпиляция.", procedures: hardwareProcedures },
  { id: "massazh", name: "Массаж", image: massageImage.url, description: "Ручной эстетический массаж лица и тела, обёртывания и уходовые программы.", procedures: massageProcedures },
];

function Catalog() {
  const { open } = useLeadDialog();
  return <div className="bg-background text-clinic-ink">
    <header className="border-b border-border"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5"><Link to="/" hash="services" aria-label="Комильфо — главная"><img src={logo.url} alt="Комильфо" className="h-10 w-32 object-contain" /></Link><Button asChild variant="ghost"><Link to="/" hash="services"><ArrowLeft /> На главную</Link></Button></div></header>
    <main>
      <section className="relative isolate overflow-hidden">
        <img src={medicalImage.url} alt="Врачебная косметология в Комильфо" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-clinic-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-clinic-foreground md:py-24">
          <nav aria-label="Хлебные крошки" className="mb-12 flex items-center gap-2 text-sm"><Link to="/" hash="services" className="underline-offset-4 hover:underline">Главная</Link><span aria-hidden> / </span><span>Услуги</span></nav>
          <p className="mb-4 text-sm uppercase">MD-Комильфо</p><h1 className="font-display max-w-2xl text-4xl leading-tight md:text-5xl">Косметология и массаж</h1>
          <p className="mt-6 max-w-xl text-base leading-7">Врачебная, эстетическая и аппаратная косметология. Уход за лицом и телом, процедуры и цены.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button className="bg-clinic text-clinic-foreground hover:bg-clinic/90" onClick={() => open("Консультация по услугам")}>Записаться на консультацию <ArrowRight /></Button><Button asChild variant="outline" className="border-clinic-foreground/60 bg-transparent text-clinic-foreground hover:bg-clinic-foreground/10 hover:text-clinic-foreground"><a href={priceFile.url} target="_blank" rel="noopener noreferrer"><FileDown /> Полный прайс (Excel)</a></Button></div>
        </div>
      </section>
      <section className="bg-clinic-muted"><div className="mx-auto max-w-6xl px-6 py-12"><h2 className="font-display text-2xl md:text-3xl">Направления</h2><nav aria-label="Направления услуг" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{directions.map((direction) => <a key={direction.id} href={`#${direction.id}`} className="group overflow-hidden rounded-lg border border-border bg-background"><img src={direction.image} alt={direction.name} loading="lazy" className="aspect-[4/3] w-full object-cover" /><div className="flex min-h-20 items-center justify-between gap-3 p-4"><span className="text-sm font-medium">{direction.name}</span><ArrowRight className="h-4 w-4 shrink-0 text-clinic transition-transform group-hover:translate-x-1 motion-reduce:transition-none" /></div></a>)}</nav></div></section>
      {directions.map((direction, index) => <section key={direction.id} id={direction.id} className="scroll-mt-6 border-b border-border"><div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
        <div><span className="text-sm text-clinic">0{index + 1}</span><h2 className="font-display mt-4 text-3xl leading-tight">{direction.name}</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">{direction.description}</p><img src={direction.image} alt={direction.name} loading="lazy" className="mt-6 aspect-[4/3] w-full rounded-lg object-cover" /></div>
        <div className="min-w-0"><div className="flex items-center justify-between border-b border-border pb-4 text-sm text-muted-foreground"><span>Процедуры и стоимость</span><span>{direction.procedures.length} позиций</span></div>{direction.procedures.map((procedure) => <ProcedureDetails key={procedure.name} procedure={procedure} />)}</div>
      </div></section>)}
      <section className="bg-clinic-muted"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center"><div><h2 className="font-display text-2xl">Консультация в Комильфо</h2><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">Точную стоимость и подходящую программу определяет специалист на консультации.</p></div><Button className="bg-clinic text-clinic-foreground hover:bg-clinic/90" onClick={() => open("Консультация по услугам")}>Записаться <ArrowRight /></Button></div></section>
    </main>
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground"><span>MD-Комильфо</span><Link to="/" hash="services" className="inline-flex items-center gap-2 text-clinic"><ArrowLeft className="h-4 w-4" /> Вернуться на главную</Link></footer>
  </div>;
}

export default function ServiceCatalogPage() {
  return <LeadDialogProvider><Catalog /></LeadDialogProvider>;
}