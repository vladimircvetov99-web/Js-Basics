# JS Basics — Упражнения

Тренажёр по основам JavaScript. Каждая тема — отдельный файл с функциями, которые нужно дописать. Прогресс проверяется одной командой.

## Быстрый старт

```bash
# 1. Перейди в папку
cd js-basics

# 2. Установи зависимости (один раз)
npm install

# 3. Проверь прогресс
npm run check
```

## Команды

| Команда | Описание |
|---|---|
| `npm run check` | Сводка по темам: прогресс-бар и список заданий с галочками |
| `npm run errors` | Только упавшие тесты с причиной — что ожидалось и что получилось |
| `npm test` | Полный вывод Jest со всеми тестами |

## Как работать с заданиями

Все задания находятся в папке `exercises/`. Открой нужный файл и дописывай тело функций вместо комментария `// твой код здесь`:

```js
// До
function sum(arr) {
  // твой код здесь
}

// После
function sum(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}
```

После изменений запусти `npm run check` — прогресс обновится.

## Темы

### `exercises/01-data-types.js` — Типы данных

| Функция | Задача |
|---|---|
| `getType(value)` | Вернуть тип значения (`typeof`) |
| `toNumber(str)` | Преобразовать строку в число, при неудаче вернуть `0` |
| `isEmpty(value)` | Проверить, является ли значение «пустым» (falsy) |
| `toBoolean(value)` | Привести значение к булеву типу |
| `getLength(value)` | Вернуть длину строки или `-1` если не строка |
| `concat(a, b)` | Объединить два значения в строку через пробел |

### `exercises/02-arrays.js` — Массивы

| Функция | Задача |
|---|---|
| `sum(arr)` | Сумма всех элементов |
| `getMax(arr)` | Наибольший элемент или `null` для пустого массива |
| `filterEven(arr)` | Только чётные числа |
| `doubleAll(arr)` | Удвоить каждый элемент |
| `unique(arr)` | Убрать дубликаты, сохранив порядок |
| `reverseArray(arr)` | Перевернуть массив (не изменяя исходный) |

### `exercises/03-objects.js` — Объекты

| Функция | Задача |
|---|---|
| `getName(obj)` | Вернуть `obj.name` или `"Unknown"` если нет |
| `countKeys(obj)` | Количество свойств объекта |
| `mergeObjects(obj1, obj2)` | Слить два объекта в новый |
| `getValues(obj)` | Массив всех значений объекта |
| `hasProperty(obj, key)` | Проверить наличие свойства |
| `getCity(obj)` | Прочитать `obj.address.city` или `null` |

### `exercises/04-strings.js` — Строки

| Функция | Задача |
|---|---|
| `capitalize(str)` | Первая буква заглавная, остальные строчные |
| `reverseString(str)` | Перевернуть строку |
| `countChar(str, char)` | Количество вхождений символа |
| `truncate(str, maxLength)` | Обрезать до maxLength символов, добавив `...` |
| `isPalindrome(str)` | Проверить, палиндром ли строка (регистр игнорируется) |
| `toKebabCase(str)` | `"Hello World"` → `"hello-world"` |

### `exercises/05-numbers.js` — Числа и Math

| Функция | Задача |
|---|---|
| `roundTo(num, decimals)` | Округлить до N знаков после запятой |
| `clamp(num, min, max)` | Ограничить число в диапазоне `[min, max]` |
| `isEven(n)` | Проверить чётность числа |
| `factorial(n)` | Вычислить факториал |
| `inRange(num, min, max)` | Проверить попадание числа в диапазон |
| `average(arr)` | Среднее арифметическое массива |

### `exercises/06-functions.js` — Функции

| Функция | Задача |
|---|---|
| `createMultiplier(n)` | Вернуть функцию-умножитель (замыкание) |
| `applyTwice(fn, value)` | Применить функцию к значению дважды |
| `createCounter()` | Вернуть счётчик — каждый вызов +1 |
| `once(fn)` | Обёртка: fn вызывается только один раз |
| `compose(f, g)` | Композиция: `x → f(g(x))` |
| `partial(fn, ...args)` | Частичное применение аргументов |

### `exercises/07-destructuring.js` — Деструктуризация

| Функция | Задача |
|---|---|
| `getFirstAndLast(arr)` | Вернуть `{ first, last }` из массива |
| `swap(a, b)` | Поменять значения местами через деструктуризацию |
| `formatPerson({ name, age })` | Деструктуризация параметра функции |
| `withDefaults(options, defaults)` | Применить defaults через spread |
| `sumAll(...nums)` | Сумма любого числа аргументов (rest) |
| `mergeArrays(...arrays)` | Объединить массивы через spread |

### `exercises/08-dates.js` — Работа с датами

| Функция | Задача |
|---|---|
| `getYear(date)` | Извлечь год из даты |
| `formatDate(date)` | Форматировать как `"ДД.ММ.ГГГГ"` |
| `daysBetween(date1, date2)` | Количество дней между датами |
| `isWeekend(date)` | Проверить, выходной ли день |
| `addDays(date, n)` | Добавить N дней (не изменяя исходную дату) |
| `getAge(birthDate)` | Вычислить полных лет |

## Структура проекта

```
js-basics/
├── exercises/          ← сюда вносить решения
│   ├── 01-data-types.js
│   ├── 02-arrays.js
│   ├── 03-objects.js
│   ├── 04-strings.js
│   ├── 05-numbers.js
│   ├── 06-functions.js
│   ├── 07-destructuring.js
│   └── 08-dates.js
├── tests/              ← тесты (не менять)
│   ├── 01-data-types.test.js
│   ├── 02-arrays.test.js
│   ├── 03-objects.test.js
│   ├── 04-strings.test.js
│   ├── 05-numbers.test.js
│   ├── 06-functions.test.js
│   ├── 07-destructuring.test.js
│   └── 08-dates.test.js
├── scripts/
│   ├── check-progress.js
│   └── show-errors.js
└── package.json
```



















<!-- обьясни мне эту задачу так как челвоеку который вообще ничего не знает про айти и код в целом, как будто я еле еле читаю эти символы один за другим на английском и не знаю что такое n, а что такое dat -->