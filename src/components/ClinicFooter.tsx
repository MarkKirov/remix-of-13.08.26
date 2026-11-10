import { FileText } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import doctorConsultation from "@/assets/doctor-consultation.jpg.asset.json";
import privacyPolicy from "@/assets/privacy-policy.pdf.asset.json";
import docFz323 from "@/assets/fz-323.docx.asset.json";
import docEgrul from "@/assets/egrul.pdf.asset.json";
import docLicenseRegistry from "@/assets/license-registry.pdf.asset.json";
import docLicense from "@/assets/license.pdf.asset.json";
import docTrademark from "@/assets/trademark.jpeg.asset.json";
import docSout from "@/assets/sout.pdf.asset.json";
import docPravila736 from "@/assets/pravila-736.docx.asset.json";
import docZakon23001 from "@/assets/zakon-2300-1.docx.asset.json";
import docPostanovlenie2463 from "@/assets/postanovlenie-2463.pdf.asset.json";
import docPoryadokKosmetologiya from "@/assets/poryadok-kosmetologiya.docx.asset.json";
import docPoryadokDermatovenerologiya from "@/assets/poryadok-dermatovenerologiya.docx.asset.json";
import docPoryadokAkusherstvoGinekologiya from "@/assets/poryadok-akusherstvo-ginekologiya.docx.asset.json";
import docPamyatkaPrava from "@/assets/pamyatka-prava-pacientov.pdf.asset.json";
import docKontrolOrgany from "@/assets/kontroliruyushchie-organy.docx.asset.json";
import docPrikaz789n from "@/assets/prikaz-789n.docx.asset.json";
import docPrikaz1050n from "@/assets/prikaz-1050n.docx.asset.json";
import docShablonZayavleniya from "@/assets/shablon-zayavleniya.pdf.asset.json";
import docShablonKopiya from "@/assets/shablon-zayavleniya-kopiya.pdf.asset.json";
import docObrazecKopiya from "@/assets/obrazec-zayavleniya-kopiya.pdf.asset.json";
import docVidyMedpomoshchi from "@/assets/polozhenie-vidy-medpomoshchi.pdf.asset.json";
import docPravilaZapisi from "@/assets/pravila-zapisi.pdf.asset.json";
import docPravilaPodgotovki from "@/assets/pravila-podgotovki.docx.asset.json";
import docSvedeniyaObrazovanie from "@/assets/svedeniya-obrazovanie.docx.asset.json";
import docFz326 from "@/assets/fz-326.docx.asset.json";
import docPostanovlenie890 from "@/assets/postanovlenie-890.pdf.asset.json";
import docPraysKomilfo from "@/assets/prays-komilfo.xls.asset.json";
const BRAND = "#7A6E8F";

export function ClinicFooter() {
  return (
      <footer className="bg-neutral-950 text-white/70">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-white/80">© Медико-эстетический центр «Комильфо», 2010–2026</p>
              <p className="mt-4 max-w-md text-xs leading-relaxed text-white/50">
                Необходима консультация специалиста. Имеются противопоказания. Данный интернет-сайт носит исключительно справочно-информационный характер, все предложения не являются публичной офертой.
              </p>
              <p className="mt-4 text-xs text-white/60">
                г. Липецк, ул. Гагарина, д. 45А, 5 этаж
              </p>
              <a
                href={privacyPolicy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs underline underline-offset-4 hover:text-white"
                style={{ color: BRAND }}
              >
                Политика конфиденциальности
              </a>
              <div className="mt-4">
                <ClientsInfoDialog />
              </div>
            </div>
            <div className="md:text-right">
              <a href="tel:89623500909" className="text-2xl font-light text-white hover:opacity-80 md:text-3xl">
                8(962)350-09-09
              </a>
              <div className="mt-4">
                <a
                  href="mailto:info@komilfocentr.ru"
                  className="text-sm hover:opacity-80"
                  style={{ color: BRAND }}
                >
                  info@komilfocentr.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

const clientDocs: { title: string; url: string }[] = [
  { title: "Федеральный закон от 21.11.2011 № 323-ФЗ «Об основах охраны здоровья граждан в РФ»", url: docFz323.url },
  { title: "Правила предоставления платных медицинских услуг, утв. Постановлением Правительства РФ от 11.05.2023 № 736", url: docPravila736.url },
  { title: "Закон РФ от 07.02.1992 № 2300-1 «О защите прав потребителей»", url: docZakon23001.url },
  { title: "Постановление Правительства РФ от 31.12.2020 № 2463 «Об утверждении правил продажи товаров по договору розничной купли-продажи»", url: docPostanovlenie2463.url },
  { title: "Порядок оказания медицинской помощи населению по профилю «косметология»", url: docPoryadokKosmetologiya.url },
  { title: "Порядок оказания медицинской помощи населению по профилю «дерматовенерология»", url: docPoryadokDermatovenerologiya.url },
  { title: "Порядок оказания медицинской помощи населению по профилю «акушерство и гинекология»", url: docPoryadokAkusherstvoGinekologiya.url },
  { title: "Памятка о правах и обязанностях пациентов", url: docPamyatkaPrava.url },
  { title: "Сведения о контролирующих органах", url: docKontrolOrgany.url },
  { title: "Порядок ознакомления пациентов с медицинской документацией", url: docPrikaz789n.url },
  { title: "Порядок и сроки предоставления медицинских документов (их копий) и выписок из них", url: docPrikaz1050n.url },
  { title: "Шаблон заявления для ознакомления с медицинской документацией в помещении медицинской организации", url: docShablonZayavleniya.url },
  { title: "Шаблон заявления о предоставлении копии медицинской документации", url: docShablonKopiya.url },
  { title: "Образец заявления пациента на выдачу копии медицинской документации", url: docObrazecKopiya.url },
];

const localDocs: { title: string; url: string }[] = [
  { title: "О видах медицинской помощи, оказываемой Медико-эстетическим центром «Комильфо»", url: docVidyMedpomoshchi.url },
  { title: "Правила записи на первичный приём", url: docPravilaZapisi.url },
  { title: "Правила подготовки к исследованиям", url: docPravilaPodgotovki.url },
  { title: "Сведения об образовании / сертификаты сотрудников", url: docSvedeniyaObrazovanie.url },
];

function ClientsInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/80 transition-all hover:border-white/50 hover:bg-white/10 hover:text-white"
        >
          <FileText className="h-3.5 w-3.5" />
          <span>Для клиентов</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-lg uppercase tracking-wide md:text-xl">
            Для пациентов «МЭЦ «MD-Комильфо»
          </DialogTitle>
          <DialogDescription>
            Федеральное законодательство в сфере охраны здоровья граждан РФ.
          </DialogDescription>
        </DialogHeader>
        <ul className="mt-2 divide-y divide-neutral-900/10">
          {clientDocs.map((d) => (
            <li key={d.url}>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">{d.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <h4 className="font-display text-sm uppercase tracking-wide" style={{ color: BRAND }}>
            Локальные нормативно-правовые акты, разработанные администрацией «МЭЦ «MD-Комильфо», в целях наиболее качественного оказания медицинских услуг
          </h4>
          <ul className="mt-2 divide-y divide-neutral-900/10">
            {localDocs.map((d) => (
              <li key={d.url}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                  style={{ color: BRAND }}
                >
                  <FileText className="mt-0.5 h-4 w-4 flex-none" />
                  <span className="underline underline-offset-4">{d.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 rounded-lg border p-4 text-sm leading-relaxed text-neutral-700" style={{ borderColor: `${BRAND}40`, background: `${BRAND}0D` }}>
          <span className="font-semibold" style={{ color: BRAND }}>Важно!</span> Уважаемые пациенты! Администрация «Медико-эстетического центра «MD-Комильфо» уведомляет Вас о том, что несоблюдение указаний и рекомендаций специалиста центра, предоставляющего вам платную медицинскую услугу, а также нарушение назначенного вам режима лечения, могут снизить качество предоставляемой медицинской услуги, а также повлечь за собой невозможность её завершения в срок или отрицательно сказаться на состоянии вашего здоровья.
        </div>
        <div className="mt-6">
          <h4 className="font-display text-base uppercase tracking-wide md:text-lg" style={{ color: BRAND }}>
            Программа государственных гарантий
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Уважаемые клиенты, уведомляем вас о том, что в настоящее время «Медико-эстетический центр «MD-Комильфо» не предоставляет медицинские услуги в рамках программы государственных гарантий бесплатного оказания гражданам медицинской помощи. Все услуги центра предоставляются исключительно на возмездной основе.
          </p>
          <ul className="mt-3 divide-y divide-neutral-900/10">
            <li>
              <a
                href={docFz326.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Федеральный закон от 29.11.2010 № 326-ФЗ «Об обязательном медицинском страховании в Российской Федерации»</span>
              </a>
            </li>
            <li>
              <a
                href="http://publication.pravo.gov.ru/document/0001202512300036"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Постановление Правительства РФ от 29.12.2025 № 2188 «О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2026 год и на плановый период 2027 и 2028 годов»</span>
              </a>
            </li>
            <li>
              <a
                href="http://publication.pravo.gov.ru/document/4800202501050001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Постановление Правительства Липецкой области от 28.12.2024 № 739 «Об утверждении Программы государственных гарантий бесплатного оказания гражданам на территории Липецкой области медицинской помощи на 2025 год и на плановый период 2026 и 2027 годов»</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="font-display text-base uppercase tracking-wide md:text-lg" style={{ color: BRAND }}>
            Перечень ЖНВЛП
          </h4>
          <ul className="mt-3 divide-y divide-neutral-900/10">
            <li>
              <a
                href="http://publication.pravo.gov.ru/document/0001202512240041"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Перечень ЖНВЛП 2026</span>
              </a>
            </li>
            <li>
              <a
                href="http://publication.pravo.gov.ru/document/0001202512240041"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Распоряжение Правительства РФ от 12.10.2019 № 2406-р «Об утверждении перечня жизненно необходимых и важнейших лекарственных препаратов, а также перечней лекарственных препаратов для медицинского применения и минимального ассортимента лекарственных препаратов, необходимых для оказания медицинской помощи»</span>
              </a>
            </li>
            <li>
              <a
                href={docPostanovlenie890.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Постановление Правительства РФ от 30.07.1994 № 890 «О государственной поддержке развития медицинской промышленности и улучшении обеспечения населения и учреждений здравоохранения лекарственными средствами и изделиями медицинского назначения»</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="font-display text-base uppercase tracking-wide md:text-lg" style={{ color: BRAND }}>
            Прайс
          </h4>
          <ul className="mt-3 divide-y divide-neutral-900/10">
            <li>
              <a
                href={docPraysKomilfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-3 text-sm leading-snug transition-colors hover:opacity-80"
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">Прайс 2026</span>
              </a>
            </li>
          </ul>
        </div>
        <GeneralInfoSections />




      </DialogContent>
    </Dialog>
  );
}

export function GeneralInfoSections({ compact = false }: { compact?: boolean }) {
  const body = compact ? "text-xs md:text-sm" : "text-sm";
  const heading = compact ? "text-sm md:text-base" : "text-base md:text-lg";
  const pad = compact ? "p-3 md:p-4" : "p-4";
  const link = compact ? "text-xs md:text-sm" : "text-sm";

  return (
    <>
      <div className={`mt-4 rounded-lg border ${pad} ${body} leading-relaxed text-neutral-700 md:mt-6`} style={{ borderColor: `${BRAND}40`, background: `${BRAND}0D` }}>
        <h4 className={`font-display ${heading} uppercase tracking-wide`} style={{ color: BRAND }}>
          Общая информация
        </h4>
        <ul className="mt-3 space-y-2">
          <li><span className="font-semibold" style={{ color: BRAND }}>Полное наименование:</span> Общество с ограниченной ответственностью «Медико-эстетический центр «Комильфо»</li>
          <li><span className="font-semibold" style={{ color: BRAND }}>Сокращенное наименование:</span> ООО «МЭЦ «Комильфо»</li>
          <li><span className="font-semibold" style={{ color: BRAND }}>Юридический адрес:</span> 398002, г. Липецк, ул. Гагарина, 45а, 5 этаж, помещение 3</li>
          <li><span className="font-semibold" style={{ color: BRAND }}>Способ образования:</span> создание юридического лица</li>
          <li><span className="font-semibold" style={{ color: BRAND }}>Дата регистрации:</span> 07.04.2009</li>
          <li><span className="font-semibold" style={{ color: BRAND }}>ОГРН:</span> 1094823003956</li>
          <li><span className="font-semibold" style={{ color: BRAND }}>ИНН:</span> 4826067133</li>
          <li><span className="font-semibold" style={{ color: BRAND }}>Свидетельство о государственной регистрации юридического лица:</span> серия 48 № 001461432</li>
          <li><span className="font-semibold" style={{ color: BRAND }}>Наименование регистрирующего органа:</span> ИФНС России по Левобережному району г. Липецка</li>
        </ul>
        <ul className="mt-4 divide-y divide-neutral-900/10">
          {[
            { title: "Выписка из ЕГРЮЛ", url: docEgrul.url },
            { title: "Выписка из реестра лицензий", url: docLicenseRegistry.url },
            { title: "Лицензия", url: docLicense.url },
            { title: "Свидетельство на товарный знак", url: docTrademark.url },
            { title: "Сводная ведомость результатов проведения СОУТ", url: docSout.url },
          ].map((d) => (
            <li key={d.url}>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-3 py-3 ${link} leading-snug transition-colors hover:opacity-80`}
                style={{ color: BRAND }}
              >
                <FileText className="mt-0.5 h-4 w-4 flex-none" />
                <span className="underline underline-offset-4">{d.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`mt-4 rounded-lg border ${pad} ${body} leading-relaxed text-neutral-700 md:mt-6`} style={{ borderColor: `${BRAND}40` }}>
        <h4 className={`font-display ${heading} uppercase tracking-wide`} style={{ color: BRAND }}>
          Адреса органов исполнительной власти в сфере здравоохранения
        </h4>
        <div className="mt-3 space-y-4">
          <div>
            <p className="font-semibold text-neutral-900">
              Территориальный орган Федеральной службы по надзору в сфере здравоохранения по Липецкой области
            </p>
            <p className="mt-1">
              <a href="http://48reg.roszdravnadzor.gov.ru" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: BRAND }}>48reg.roszdravnadzor.gov.ru</a>
            </p>
            <p>E-mail: roszdravr48@reg48.roszdravnadzor.ru</p>
            <p>Адрес: 398001, г. Липецк, ул. Ворошилова, д. 1</p>
            <p>Телефон: (4742) 23-07-35, 74-04-47</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">
              Управление Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека по Липецкой области
            </p>
            <p className="mt-1">
              <a href="http://48.rospotrebnadzor.ru" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: BRAND }}>48.rospotrebnadzor.ru</a>
            </p>
            <p>E-mail: saneps@lipetsk.ru, ocgsen@lipetsk.ru</p>
            <p>Адрес: 398002, г. Липецк, ул. Гагарина, 60а</p>
            <p>Телефон: (4742) 27-00-76, 27-25-98</p>
            <p>Факс: (4742) 27-73-43</p>
          </div>
        </div>
      </div>

      <div className={`mt-4 rounded-lg border ${pad} ${body} leading-relaxed text-neutral-700 md:mt-6`} style={{ borderColor: `${BRAND}40`, background: `${BRAND}0D` }}>
        <h4 className={`font-display ${heading} uppercase tracking-wide`} style={{ color: BRAND }}>
          Руководство
        </h4>
        <p className="mt-3 font-semibold text-neutral-900">Журавлев Олег Викторович</p>
        <p>Управляющий</p>
        <p>
          <a href="mailto:ozhuravlev@komilfocentr.ru" className="underline underline-offset-4" style={{ color: BRAND }}>ozhuravlev@komilfocentr.ru</a>
        </p>
        <p>
          <a href="tel:+79601422244" className="underline underline-offset-4" style={{ color: BRAND }}>+7 (960) 142-22-44</a>
        </p>
        <p className="mt-1">График приёма граждан — четверг с 15:00 до 17:00</p>
      </div>
    </>
  );
}

