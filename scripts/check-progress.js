#!/usr/bin/env node

// Запускает Jest в формате JSON и выводит сводку по прогрессу

const { execSync } = require("child_process");

const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const DIM = "\x1b[2m";

let output;
try {
  output = execSync("npx jest --json --silent 2>nul", {
    cwd: __dirname + "/..",
    encoding: "utf8",
  });
} catch (err) {
  // Jest возвращает ненулевой код если есть провальные тесты — это нормально
  output = err.stdout || "";
}

let result;
try {
  result = JSON.parse(output);
} catch {
  console.error(
    "Не удалось прочитать результаты тестов. Запусти npm install сначала.",
  );
  process.exit(1);
}

const TOPIC_LABELS = {
  "01-data-types": "Типы данных",
  "02-arrays": "Массивы",
  "03-objects": "Объекты",
  "04-strings": "Строки",
  "05-numbers": "Числа и Math",
  "06-functions": "Функции",
  "07-destructuring": "Деструктуризация",
  "08-dates": "Работа с датами",
};

// Группируем по файлу, внутри — по заданию (describe-блок второго уровня).
// Задание считается решённым, если все его тесты прошли.
const byFile = {};
for (const suite of result.testResults) {
  const match = suite.name.match(/(\d{2}-[\w-]+)\.test\.js$/);
  const key = match ? match[1] : suite.name;
  const label = TOPIC_LABELS[key] || key;

  // Группируем тесты по названию задания (ancestorTitles[1])
  const tasks = {};
  for (const t of suite.assertionResults) {
    const taskName = t.ancestorTitles[1] || t.ancestorTitles[0] || "?";
    if (!tasks[taskName]) tasks[taskName] = { passed: 0, total: 0 };
    tasks[taskName].total++;
    if (t.status === "passed") tasks[taskName].passed++;
  }

  const taskList = Object.entries(tasks).map(([name, t]) => ({ name, ...t }));
  const solvedCount = taskList.filter((t) => t.passed === t.total).length;
  byFile[label] = { solved: solvedCount, total: taskList.length, taskList };
}

// Шапка
console.log(
  "\n" + BOLD + CYAN + "  ╔══════════════════════════════════════╗" + RESET,
);
console.log(BOLD + CYAN + "  ║     Прогресс по заданиям JS-Basics   ║" + RESET);
console.log(
  BOLD + CYAN + "  ╚══════════════════════════════════════╝" + RESET + "\n",
);

let totalSolved = 0,
  totalAll = 0;

for (const [label, { solved, total, taskList }] of Object.entries(byFile)) {
  const bar = buildBar(solved, total, 20);
  const status =
    solved === total
      ? GREEN + "  ГОТОВО " + RESET
      : YELLOW + " В РАБОТЕ" + RESET;

  console.log(`  ${BOLD}${label}${RESET}`);
  console.log(
    `  ${bar}  ${GREEN}${solved}${RESET}/${total} заданий  ${status}`,
  );

  for (const task of taskList) {
    const done = task.passed === task.total;
    const icon = done ? GREEN + "  ✓" + RESET : YELLOW + "  ✗" + RESET;
    const hint = done
      ? ""
      : DIM + `  (${task.passed}/${task.total} тестов)` + RESET;
    console.log(`    ${icon}  ${task.name}${hint}`);
  }
  console.log();

  totalSolved += solved;
  totalAll += total;
}

// Итог
const percent = totalAll > 0 ? Math.round((totalSolved / totalAll) * 100) : 0;
const allDone = totalSolved === totalAll;

console.log(BOLD + "  ─────────────────────────────────────" + RESET);
console.log(
  `  Итого: ${BOLD}${totalSolved}${RESET} / ${totalAll} заданий решено  (${BOLD}${percent}%${RESET})`,
);

if (allDone) {
  console.log(
    "\n  " +
      GREEN +
      BOLD +
      "🎉  Все задания выполнены! Отличная работа!" +
      RESET,
  );
} else {
  const remaining = totalAll - totalSolved;
  console.log(
    `\n  ${YELLOW}Осталось решить: ${remaining} ${plural(remaining, "задание", "задания", "заданий")}${RESET}`,
  );
}
console.log();

function buildBar(value, total, width) {
  if (total === 0) return DIM + "[" + " ".repeat(width) + "]" + RESET;
  const filled = Math.round((value / total) * width);
  const empty = width - filled;
  return (
    DIM +
    "[" +
    RESET +
    GREEN +
    "█".repeat(filled) +
    RESET +
    DIM +
    "░".repeat(empty) +
    RESET +
    DIM +
    "]" +
    RESET
  );
}

function plural(n, one, few, many) {
  const mod10 = n % 10,
    mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 14) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}
