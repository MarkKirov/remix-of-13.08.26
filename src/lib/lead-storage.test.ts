import { describe, expect, test } from "bun:test";
import { storeLead } from "./lead-storage";
import { template } from "./email-templates/new-lead";

describe("lead storage", () => {
  test("stores a private lead using INSERT only and returns its event id", async () => {
    let storedId: string | undefined;
    const id = await storeLead({ name: "Тест", phone: "+70000000000", agreed_to_policy: true }, async (row) => {
      storedId = row.id;
      return { error: null };
    });
    expect(id).toMatch(/^[0-9a-f-]{36}$/);
    expect(storedId).toBe(id);
  });

  test("does not report success when insertion fails", async () => {
    await expect(storeLead({ name: "Тест", phone: "+70000000000" }, async () => ({ error: { message: "denied" } }))).rejects.toThrow();
  });

  test("all owner notifications use the requested fixed mailbox", () => {
    expect(template.to).toBe("info@komilfocentr.ru");
  });
});