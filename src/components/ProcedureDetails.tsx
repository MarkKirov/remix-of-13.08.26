import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadDialog } from "@/components/LeadDialog";
import type { Procedure } from "@/lib/service-catalog";

function PriceList({ items }: { items: { name: string; price: string }[] }) {
  return <dl className="divide-y divide-border">{items.map((item) => <div key={item.name} className="flex items-start justify-between gap-4 py-3 text-sm"><dt className="min-w-0 flex-1 break-words">{item.name}</dt><dd className="shrink-0 font-medium text-clinic">{item.price}</dd></div>)}</dl>;
}

export function ProcedureDetails({ procedure }: { procedure: Procedure }) {
  const { open } = useLeadDialog();
  return <article className="border-b border-border py-7">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0"><h3 className="text-lg font-medium leading-snug text-clinic-ink">{procedure.name}</h3><p className="mt-2 font-medium text-clinic">{procedure.price}</p></div>
      <Button variant="outline" className="shrink-0 self-start border-clinic text-clinic" onClick={() => open(`Записаться: ${procedure.name}`)}>Записаться <ArrowRight /></Button>
    </div>
    {procedure.description && <p className="mt-4 whitespace-pre-line text-sm leading-7 text-muted-foreground">{procedure.description}</p>}
    {procedure.preparations.length > 0 && <div className="mt-4"><h4 className="text-sm font-medium">{procedure.detailsLabel ?? "Препараты"}</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{procedure.preparations.join(" · ")}</p></div>}
    {procedure.device && <p className="mt-4 text-sm text-muted-foreground"><span className="font-medium text-clinic-ink">Аппарат: </span>{procedure.device}</p>}
    {(procedure.subServices || procedure.groups) && <details className="mt-5 border-t border-border pt-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-clinic">Все варианты и цены <Plus className="h-4 w-4 shrink-0" /></summary>
      {procedure.subServices && <PriceList items={procedure.subServices} />}
      {procedure.groups?.map((group) => <div key={group.title} className="mt-6"><h4 className="font-medium">{group.title}</h4><PriceList items={group.items} /></div>)}
    </details>}
    {procedure.note && <p className="mt-4 text-xs leading-6 text-muted-foreground">{procedure.note}</p>}
  </article>;
}

