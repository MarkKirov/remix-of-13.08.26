import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClinicFooter } from "@/components/ClinicFooter";
import { LeadDialogProvider, useLeadDialog } from "@/components/LeadDialog";
import { ProcedureDetails } from "@/components/ProcedureDetails";
import type { Procedure } from "@/lib/service-catalog";
import logo from "@/assets/header_logo.svg.asset.json";
import priceFile from "@/assets/prays-komilfo.xls.asset.json";

type CosmetologyPageProps = {
  title: string;
  description: string;
  consultation: string;
  priceDescription: string;
  image: string;
  procedures: Procedure[];
};

function Content({ title, description, consultation, priceDescription, image, procedures }: CosmetologyPageProps) {
  const { open } = useLeadDialog();
  return <div className="bg-background text-clinic-ink">
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-5 md:px-8">
        <Link to="/" hash="services" aria-label="Комильфо — главная"><img src={logo.url} alt="Комильфо" className="h-10 w-32 object-contain" /></Link>
        <Button asChild variant="ghost"><Link to="/" hash="services"><ArrowLeft /> На главную</Link></Button>
      </div>
    </header>
    <main>
      <section className="relative isolate overflow-hidden">
        <img src={image} alt={`${title} в MD-Комильфо`} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-clinic-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 py-12 text-clinic-foreground md:px-8 md:py-16">
          <nav aria-label="Хлебные крошки" className="mb-8 flex flex-wrap items-center gap-2 text-sm"><Link to="/" hash="services" className="hover:underline">Главная</Link><span aria-hidden>/</span><span>{title}</span></nav>
          <p className="mb-4 text-sm">MD-Комильфо · Липецк</p>
          <h1 className="font-display max-w-2xl text-3xl leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-7">{description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button className="h-auto min-h-11 whitespace-normal bg-clinic text-clinic-foreground hover:bg-clinic/90" onClick={() => open(consultation)}>Записаться на консультацию <ArrowRight /></Button>
            <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal border-clinic-foreground/60 bg-transparent text-clinic-foreground hover:bg-clinic-foreground/10 hover:text-clinic-foreground"><a href={priceFile.url} target="_blank" rel="noopener noreferrer"><FileDown /> Полный прайс 2026 (Excel)</a></Button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          <div>
            <h2 className="font-display text-3xl leading-tight">Процедуры и цены</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">{priceDescription}</p>
          </div>
          <div className="min-w-0">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm text-muted-foreground"><span>{title}</span><span className="shrink-0">Прайс 2026</span></div>
            {procedures.map(procedure => <ProcedureDetails key={procedure.name} procedure={procedure} />)}
          </div>
        </div>
      </section>
      <section className="bg-clinic-muted">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:px-8 sm:flex-row sm:items-center">
          <div><h2 className="font-display text-2xl">Полный прайс 2026</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Стоимость услуг медико-эстетического центра «Комильфо».</p></div>
          <Button asChild variant="outline" className="border-clinic text-clinic"><a href={priceFile.url} target="_blank" rel="noopener noreferrer"><FileDown /> Скачать прайс (Excel)</a></Button>
        </div>
      </section>
    </main>
    <ClinicFooter />
  </div>;
}

export function CosmetologyPage(props: CosmetologyPageProps) {
  return <LeadDialogProvider><Content {...props} /></LeadDialogProvider>;
}