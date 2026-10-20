// Server-only helper: sends the owner notification for a stored lead.
export type LeadEmailData = {
  id: string;
  name: string;
  phone: string;
  source: string | null;
  createdAt?: string;
};

export async function sendLeadEmail(lead: LeadEmailData) {
  const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
  return sendTemplateEmail("new-lead", "info@komilfocentr.ru", {
    templateData: {
      name: lead.name,
      phone: lead.phone,
      source: lead.source || "Сайт",
      submittedAt: new Date(lead.createdAt ?? Date.now()).toLocaleString("ru-RU", {
        timeZone: "Europe/Moscow",
      }),
    },
    idempotencyKey: `new-lead-${lead.id}`,
  });
}

// Self-hosted servers in Russia cannot reach the email API. There the database
// trigger on `leads` calls /api/public/lead-notify instead (LEAD_NOTIFY_VIA_DB=1).
export async function notifyOwner(lead: LeadEmailData) {
  if (process.env["LEAD_NOTIFY_VIA_DB"] === "1") return;
  const relayUrl = process.env["LEAD_NOTIFY_URL"];
  if (relayUrl) {
    const res = await fetch(relayUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: lead.id }),
    });
    if (!res.ok) throw new Error(`Lead relay failed: ${res.status} ${await res.text()}`);
    return;
  }
  const result = await sendLeadEmail(lead);
  if (!result.sent) console.warn("Lead notification blocked by recipient suppression", { id: lead.id });
}
