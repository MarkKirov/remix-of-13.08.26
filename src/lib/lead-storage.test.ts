import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { storeLead } from "./lead-storage";
import { template } from "./email-templates/new-lead";

describe("lead storage", () => {
  test("stores a private lead using INSERT only and returns its event id", async () => {
    let storedId: string | undefined;
    const id = await storeLead({ name: "Тест", phone: "+70000000000", agreed_to_policy: true }, async (row) => {
      storedId = row.id;
      return { error: null };
    });
    assert.match(id, /^[0-9a-f-]{36}$/);
    assert.equal(storedId, id);
  });

  test("does not report success when insertion fails", async () => {
    await assert.rejects(storeLead({ name: "Тест", phone: "+70000000000" }, async () => ({ error: { message: "denied" } })));
  });

  test("all owner notifications use the requested fixed mailbox", () => {
    assert.equal(template.to, "info@komilfocentr.ru");
  });
});