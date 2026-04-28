// ============================================================
// Тема: Числа и Math
// Задача: дописать тело каждой функции так, чтобы она
//         возвращала правильный результат.
// ============================================================

/**
 * Задание 1.
 * Округли число num до decimals знаков после запятой.
 * Примеры: roundTo(3.14159, 2) → 3.14
 *          roundTo(1.005, 2)   → 1.01
 *          roundTo(5.678, 0)   → 6
 */
function roundTo(num, decimals) {
  let power = 10 ** decimals;
  return Math.round(num * power) / power;
}

/**
 * Задание 2.
 * Ограничь число в диапазоне [min, max].
 * Если меньше min — верни min. Если больше max — верни max.
 * Примеры: clamp(5, 1, 10)  → 5
 *          clamp(-3, 1, 10) → 1
 *          clamp(15, 1, 10) → 10
 */
function clamp(num, min, max) {
  if (num < min) {
    return min;
  }

  if (num > max) {
    return max;
  }

  return num;
}

/**
 * Задание 3.
 * Проверь, является ли число чётным.
 * Примеры: isEven(4)  → true
 *          isEven(7)  → false
 *          isEven(0)  → true
 */
function isEven(n) {
  return n % 2 === 0;
}

/**
 * Задание 4.
 * Вычисли факториал числа n (n! = 1 * 2 * ... * n).
 * Примеры: factorial(0) → 1
 *          factorial(1) → 1
 *          factorial(5) → 120
 */
function factorial(n) {
  let result = 1;

  for (let i = 1; i<=n; i++) {
    result = result * i;
  }
  return result;
}

/**
 * Задание 5.
 * Проверь, попадает ли число num в диапазон [min, max] включительно.
 * Примеры: inRange(5, 1, 10)  → true
 *          inRange(0, 1, 10)  → false
 *          inRange(10, 1, 10) → true
 */
function inRange(num, min, max) {
  return num >= min && num <= max;
}

/**
 * Задание 6.
 * Вычисли среднее арифметическое массива чисел.
 * Если массив пустой — верни 0.
 * Примеры: average([1, 2, 3, 4])  → 2.5
 *          average([10])           → 10
 *          average([])             → 0
 */
function average(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

module.exports = { roundTo, clamp, isEven, factorial, inRange, average };
