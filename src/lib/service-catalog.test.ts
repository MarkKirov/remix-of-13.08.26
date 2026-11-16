import { test } from "node:test";
import assert from "node:assert/strict";
import { massageProcedures } from "./service-catalog";

test("the transferred phytobarrel service starts at 800 rubles", () => {
  const procedure = massageProcedures.find((item) => item.name === "Кедровая фитобочка с травами");
  assert.ok(procedure);
  assert.equal(procedure.price, "от 800 ₽");
});