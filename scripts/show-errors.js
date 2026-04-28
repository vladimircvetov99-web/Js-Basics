#!/usr/bin/env node

// Показывает только упавшие тесты с причиной ошибки

const { execSync } = require('child_process');

const RESET  = '\x1b[0m';
const BOLD   = '\x1b[1m';
const GREEN  = '\x1b[32m';
const RED    = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const DIM    = '\x1b[2m';

let output;
try {
  output = execSync('npx jest --json --silent 2>nul', {
    cwd: __dirname + '/..',
    encoding: 'utf8',
  });
} catch (err) {
  output = err.stdout || '';
}

let result;
try {
  result = JSON.parse(output);
} catch {
  console.error('Не удалось прочитать результаты тестов. Запусти npm install сначала.');
  process.exit(1);
}

const TOPIC_LABELS = {
  '01-data-types': 'Типы данных',
  '02-arrays':     'Массивы',
  '03-objects':    'Объекты',
};

let totalFailed = 0;

for (const suite of result.testResults) {
  const match = suite.name.match(/(\d{2}-[\w-]+)\.test\.js$/);
  const key   = match ? match[1] : suite.name;
  const label = TOPIC_LABELS[key] || key;

  // Только упавшие тесты
  const failed = suite.assertionResults.filter(t => t.status === 'failed');
  if (failed.length === 0) continue;

  // Группируем по заданию для красивого вывода
  const byTask = {};
  for (const t of failed) {
    const taskName = t.ancestorTitles[1] || t.ancestorTitles[0] || '?';
    if (!byTask[taskName]) byTask[taskName] = [];
    byTask[taskName].push(t);
  }

  console.log(`\n${BOLD}${CYAN}══ ${label} ══${RESET}`);

  for (const [taskName, tests] of Object.entries(byTask)) {
    console.log(`\n  ${BOLD}${YELLOW}${taskName}${RESET}`);

    for (const t of tests) {
      console.log(`    ${RED}✗${RESET}  ${DIM}${t.title}${RESET}`);

      // Вырезаем суть из сообщения об ошибке
      const msg = t.failureMessages[0] || '';
      const clean = extractError(msg);
      if (clean) {
        console.log(`       ${RED}${clean}${RESET}`);
      }
    }
    totalFailed++;
  }
}

if (totalFailed === 0) {
  console.log(`\n  ${GREEN}${BOLD}Все задания решены верно!${RESET}\n`);
} else {
  console.log(`\n${DIM}Подсказка: запусти ${RESET}${BOLD}npm run check${RESET}${DIM} чтобы увидеть общий прогресс.${RESET}\n`);
}

// Оставляем только строку с Expected/Received из стектрейса Jest
function extractError(msg) {
  const lines = msg.split('\n').map(l => l.trim()).filter(Boolean);

  const expected = lines.find(l => l.startsWith('Expected:'));
  const received = lines.find(l => l.startsWith('Received:'));

  if (expected && received) {
    return `${expected}  |  ${received}`;
  }

  // Fallback: первая строка без "Error:" префикса
  const first = lines.find(l => !l.startsWith('at ') && !l.includes('node_modules'));
  return first ? first.replace(/^Error:\s*/i, '') : '';
}
