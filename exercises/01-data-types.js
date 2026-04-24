// ============================================================
// Тема: Типы данных
// Задача: дописать тело каждой функции так, чтобы она
//         возвращала правильный результат.
// ============================================================

/**
 * Задание 1.
 * Верни тип переданного значения в виде строки.
 * Примеры: getType(42) → "number"
 *          getType("hi") → "string"
 *          getType(true) → "boolean"
 */
function getType(value) {
  return typeof value;
}

/**
 * Задание 2.
 * Преобразуй строку в число.
 * Если строка не является числом — верни 0.
 * Примеры: toNumber("42")   → 42
 *          toNumber("3.14") → 3.14
 *          toNumber("abc")  → 0
 */
function toNumber(str) {
  const result = parseFloat(str);

  if (isNaN(result)) {
    return 0;
  } else {
    return result;
  }
}

/**
 * Задание 3.
 * Проверь, является ли значение «пустым»:
 * пустыми считаются: null, undefined, "", 0, false, NaN.
 * Верни true если пустое, иначе false.
 * Примеры: isEmpty(0)    → true
 *          isEmpty("")   → true
 *          isEmpty("hi") → false
 *          isEmpty(1)    → false
 */
function isEmpty(value) {
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    value === 0 ||
    value === false ||
    Number.isNaN(value)
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * Задание 4.
 * Преобразуй любое значение в булево (true/false).
 * Примеры: toBoolean(1)   → true
 *          toBoolean(0)   → false
 *          toBoolean("x") → true
 *          toBoolean("")  → false
 */
function toBoolean(value) {
  return Boolean(value);
}

/**
 * Задание 5.
 * Верни длину строки.
 * Если передано не строковое значение — верни -1.
 * Примеры: getLength("hello") → 5
 *          getLength("")       → 0
 *          getLength(123)      → -1
 */
function getLength(value) {
  if (typeof value === "string") {
    return value.length;
  } else {
    return -1;
  }
}

/**
 * Задание 6.
 * Объедини (конкатенируй) два значения в одну строку через пробел.
 * Примеры: concat("Hello", "World") → "Hello World"
 *          concat(1, 2)             → "1 2"
 */
function concat(a, b) {
  return a + " " + b;
}

module.exports = { getType, toNumber, isEmpty, toBoolean, getLength, concat };
