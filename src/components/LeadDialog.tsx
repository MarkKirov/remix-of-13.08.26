import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import privacyPolicy from "@/assets/privacy-policy.pdf.asset.json";

const BRAND = "#AE31A6";

type Ctx = { open: (title?: string) => void };
const LeadCtx = createContext<Ctx | null>(null);

export function useLeadDialog() {
  const ctx = useContext(LeadCtx);
  if (!ctx) throw new Error("useLeadDialog must be used within LeadDialogProvider");
  return ctx;
}

export function LeadDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState<string>("Записаться на консультацию");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const open = useCallback((customTitle?: string) => {
    setTitle(customTitle ?? "Записаться на консультацию");
    setIsOpen(true);
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (trimmedName.length < 2 || trimmedName.length > 80) {
      toast.error("Укажите ваше имя");
      return;
    }
    const digits = trimmedPhone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      toast.error("Укажите корректный номер телефона");
      return;
    }
    if (!agree) {
      toast.error("Необходимо согласие с политикой конфиденциальности");
      return;
    }
    setSubmitting(true);
    // Демо-заглушка. Позже — Яндекс.Формы / бэкенд.
    setTimeout(() => {
      setSubmitting(false);
      setIsOpen(false);
      setName("");
      setPhone("");
      setAgree(true);
      toast.success("Заявка принята — мы позвоним вам в ближайшее время");
    }, 400);
  };

  return (
    <LeadCtx.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md border-none bg-white p-0 sm:rounded-2xl">
          <div className="px-6 pt-7 pb-6 md:px-8 md:pt-8">
            <DialogHeader className="space-y-2 text-left">
              <DialogTitle
                className="font-display text-xl leading-tight tracking-[0.01em] md:text-2xl"
                style={{ color: BRAND }}
              >
                {title}
              </DialogTitle>
              <DialogDescription className="font-body text-sm leading-relaxed text-neutral-600">
                Оставьте имя и номер — мы <strong className="font-semibold text-neutral-900">не будем названивать</strong>, просто перезвоним в ближайшее время и подберём удобное время визита.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="lead-name" className="font-caption text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                  Как к вам обращаться
                </Label>
                <Input
                  id="lead-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  autoComplete="name"
                  maxLength={80}
                  required
                  className="h-12 rounded-xl border-neutral-200 bg-white text-base"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="lead-phone" className="font-caption text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                  Номер телефона
                </Label>
                <Input
                  id="lead-phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  autoComplete="tel"
                  maxLength={20}
                  required
                  className="h-12 rounded-xl border-neutral-200 bg-white text-base"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 pt-1">
                <Checkbox
                  id="lead-agree"
                  checked={agree}
                  onCheckedChange={(v) => setAgree(v === true)}
                  className="mt-0.5 border-neutral-400 data-[state=checked]:border-transparent data-[state=checked]:text-white"
                  style={agree ? { backgroundColor: BRAND } : undefined}
                />
                <span className="font-body text-xs leading-relaxed text-neutral-600">
                  Согласен(а) с обработкой персональных данных и{" "}
                  <a
                    href={privacyPolicy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-neutral-400 underline-offset-2 hover:text-neutral-900"
                  >
                    политикой конфиденциальности
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full text-xs font-normal uppercase tracking-[0.14em] text-white transition-colors disabled:opacity-60"
                style={{ backgroundColor: BRAND }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C24CBA")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
              >
                {submitting ? "Отправляем…" : "Записаться"}
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </LeadCtx.Provider>
  );
}
