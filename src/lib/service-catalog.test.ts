import { test } from "node:test";
import assert from "node:assert/strict";
import { massageProcedures, massagePageProcedures } from "./service-catalog";

test("the transferred phytobarrel service starts at 800 rubles", () => {
  const procedure = massageProcedures.find((item) => item.name === "Кедровая фитобочка с травами");
  assert.ok(procedure);
  assert.equal(procedure.price, "от 800 ₽");
});
const expectedMassagePrices = [
  {
    "name": "Выполнение косметического массажа лица, шеи и зоны декольте — Воротниковой зоны женский",
    "price": "от 800 ₽"
  },
  {
    "name": "Выполнение косметического массажа лица, шеи и зоны декольте — Воротниковой зоны мужской",
    "price": "от 900 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Массаж волосистой части головы",
    "price": "от 800 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Антицеллюлитный женский",
    "price": "от 2 300 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Антицеллюлитный женский (2 категория)",
    "price": "от 2 600 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Антицеллюлитный ягодицы и бедра",
    "price": "от 2 000 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Детокс со скрабированием (ноги, ягодицы, живот)",
    "price": "от 2 800 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Живот",
    "price": "от 1 000 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Лимфодренажный женский «Легкие ножки»",
    "price": "от 1 200 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Ноги мужской",
    "price": "от 1 500 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Расслабляющий женский",
    "price": "от 2 500 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Расслабляющий женский (2 категория)",
    "price": "от 2 800 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Расслабляющий мужской",
    "price": "от 3 000 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Рук",
    "price": "от 600 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Спины женский",
    "price": "от 1 500 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Спины женский (2 категория)",
    "price": "от 1 800 ₽"
  },
  {
    "name": "Выполнение косметического массажа тела либо его отдельных частей — Спины мужской",
    "price": "от 2 000 ₽"
  }
];

for (const expected of expectedMassagePrices) {
  test(`manual massage starting price: ${expected.name}`, () => {
    const massage = massageProcedures.find(item => item.name === "Ручной эстетический массаж");
    const service = massage?.pageServices?.find(item => item.name === expected.name);
    assert.ok(service);
    assert.equal(service.price, expected.price);
  });
  test(`standalone massage starting price: ${expected.name}`, () => {
    const service = massagePageProcedures.find(item => item.name === expected.name.replace(/^.* — /, ""));
    assert.ok(service);
    assert.equal(service.price, expected.price);
  });
}

test("massage page retains the manual massage starting price", () => {
  assert.equal(massagePageProcedures[0]?.name, "Ручной эстетический массаж");
  assert.equal(massagePageProcedures[0]?.price, "от 600 ₽");
});

test("massage page contains only manual massage and the 17 priced variants", () => {
  assert.equal(massagePageProcedures.length, 18);
  assert.equal(massagePageProcedures.some(item => item.name === "Обёртывание тела"), false);
  assert.equal(massagePageProcedures.some(item => item.name === "Кедровая фитобочка с травами"), false);
  assert.equal(massagePageProcedures.some(item => item.name === "Массаж лица"), false);
  assert.equal(massagePageProcedures.some(item => item.pageServices !== undefined), false);
});
