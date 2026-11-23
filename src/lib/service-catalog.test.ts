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
}

const expectedPagePrices = [
  ["Расслабляющий массаж женский", "от 2 500 ₽"],
  ["Расслабляющий массаж мужской", "от 3 000 ₽"],
  ["Массаж воротниковой зоны женский", "от 800 ₽"],
  ["Массаж воротниковой зоны мужской", "от 900 ₽"],
  ["Массаж волосистой части головы", "от 800 ₽"],
  ["Антицеллюлитный массаж женский", "от 2 300 ₽"],
  ["Антицеллюлитный массаж женский (2 категория)", "от 2 600 ₽"],
  ["Антицеллюлитный массаж ягодицы и бедра", "от 2 000 ₽"],
  ["Детокс со скрабированием (ноги, ягодицы, живот)", "от 2 800 ₽"],
  ["Массаж живота", "от 1 000 ₽"],
  ["Лимфодренажный массаж женский «Лёгкие ножки»", "от 1 200 ₽"],
  ["Массаж ног мужской", "от 1 500 ₽"],
  ["Расслабляющий массаж женский (2 категория)", "от 2 800 ₽"],
  ["Массаж рук", "от 600 ₽"],
  ["Массаж спины женский", "от 1 500 ₽"],
  ["Массаж спины женский (2 категория)", "от 1 800 ₽"],
  ["Массаж спины мужской", "от 2 000 ₽"],
];

for (const [index, expected] of expectedPagePrices.entries()) {
  test(`massage price and order remain unchanged at position ${index + 1}`, () => {
    const service = massagePageProcedures[index];
    assert.ok(service);
    assert.equal(service.price, expected[1]);
  });
}

test("women's relaxing massage comes first at 2500 rubles", () => {
  assert.equal(massagePageProcedures[0]?.name, "Расслабляющий массаж женский");
  assert.equal(massagePageProcedures[0]?.price, "от 2 500 ₽");
  assert.equal(massagePageProcedures.filter(item => item.name === "Расслабляющий массаж женский").length, 1);
});

test("men's relaxing massage comes second at 3000 rubles", () => {
  assert.equal(massagePageProcedures[1]?.name, "Расслабляющий массаж мужской");
  assert.equal(massagePageProcedures[1]?.price, "от 3 000 ₽");
  assert.equal(massagePageProcedures.filter(item => item.name === "Расслабляющий массаж мужской").length, 1);
});

test("massage page contains 17 body variants, five face variants, wrapping and phytobarrel without the general manual massage item", () => {
  assert.equal(massagePageProcedures.length, 24);
  assert.equal(massagePageProcedures.some(item => item.name === "Ручной эстетический массаж"), false);
  assert.equal(massagePageProcedures.some(item => item.name === "Массаж лица"), false);
  assert.equal(massagePageProcedures.some(item => item.pageServices !== undefined), false);
});

const additionalMassagePrices = [
  ["Буккально-скульптурный массаж", "от 2 500 ₽"],
  ["Буккальный массаж лица", "от 1 700 ₽"],
  ["Классический массаж лица + банки", "от 1 200 ₽"],
  ["Массаж Шиацу", "от 1 000 ₽"],
  ["Скульптурный массаж", "от 1 800 ₽"],
  ["Обёртывание тела", "от 300 ₽"],
  ["Кедровая фитобочка с травами", "от 800 ₽"],
];

for (const [name, price] of additionalMassagePrices) {
  test(`additional massage page starting price: ${name}`, () => {
    const matches = massagePageProcedures.filter(item => item.name === name);
    assert.equal(matches.length, 1);
    assert.equal(matches[0]?.price, price);
  });
}
