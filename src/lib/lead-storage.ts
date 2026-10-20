import type { Database } from "@/integrations/supabase/types";

type LeadInsert = Database["public"]["Tables"]["leads"]["Insert"];
type InsertLead = (row: LeadInsert) => PromiseLike<{ error: { message: string } | null }>;

// Public submissions have INSERT permission, but cannot read private lead rows.
export async function storeLead(row: LeadInsert, insert: InsertLead) {
  const id = crypto.randomUUID();
  const { error } = await insert({ ...row, id });
  if (error) throw new Error("Не удалось сохранить заявку. Попробуйте позже.");
  return id;
}