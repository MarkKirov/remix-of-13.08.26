import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(10).max(20),
  source: z.string().optional(),
  agreedToPolicy: z.boolean(),
});

function stripOpaqueBearer(key: string, input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const headers = new Headers(
    typeof Request !== "undefined" && input instanceof Request ? input.headers : undefined,
  );
  if (init?.headers) {
    new Headers(init.headers).forEach((value, keyName) => headers.set(keyName, value));
  }
  if ((key.startsWith("sb_publishable_") || key.startsWith("sb_secret_")) && headers.get("Authorization") === `Bearer ${key}`) {
    headers.delete("Authorization");
  }
  headers.set("apikey", key);
  return fetch(input, { ...init, headers });
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const digits = data.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      throw new Error("Укажите корректный номер телефона");
    }
    if (!data.agreedToPolicy) {
      throw new Error("Необходимо согласие с политикой конфиденциальности");
    }

    const supabaseUrl = process.env["SUPABASE_URL"];
    const publishableKey = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!supabaseUrl || !publishableKey) {
      throw new Error("Backend configuration error");
    }

    const supabase = createClient<Database>(supabaseUrl, publishableKey, {
      auth: {
        storage: undefined,
        persistSession: false,
        autoRefreshToken: false,
      },
      global: {
        fetch: (input, init) => stripOpaqueBearer(publishableKey, input, init),
      },
    });

    const { error } = await supabase.from("leads").insert({
      name: data.name,
      phone: data.phone,
      source: data.source || null,
      agreed_to_policy: data.agreedToPolicy,
    });

    if (error) {
      console.error("Lead insert error:", error);
      throw new Error("Не удалось сохранить заявку. Попробуйте позже.");
    }

    return { success: true };
  });
