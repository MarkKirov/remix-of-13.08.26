import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

// Relay for the self-hosted site: sends the owner email for a lead that is
// already stored. Only recent, existing leads are emailed, always to the fixed
// owner address, with an idempotency key — so callers cannot spam or redirect.
const bodySchema = z.object({ id: z.string().uuid() });

export const Route = createFileRoute("/api/public/lead-notify")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const parsed = bodySchema.safeParse(await request.json().catch(() => null));
        if (!parsed.success) return new Response("Bad request", { status: 400 });

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: lead } = await supabaseAdmin
          .from("leads")
          .select("id,name,phone,source,created_at")
          .eq("id", parsed.data.id)
          .maybeSingle();
        if (!lead) return new Response("Not found", { status: 404 });
        if (Date.now() - new Date(lead.created_at).getTime() > 60 * 60 * 1000) {
          return new Response("Too old", { status: 410 });
        }

        const { sendLeadEmail } = await import("@/lib/lead-email");
        await sendLeadEmail({
          id: lead.id,
          name: lead.name,
          phone: lead.phone,
          source: lead.source,
          createdAt: lead.created_at,
        });
        return Response.json({ ok: true });
      },
    },
  },
});
