// ============================================================
// Тема: Деструктуризация и spread/rest
// Задача: дописать тело каждой функции так, чтобы она
//         возвращала правильный результат.
//
// Важно: старайся использовать деструктуризацию, spread и rest
//        там, где это уместно — не обычный доступ по индексу.
// ============================================================

/**
 * Задание 1.
 * Верни объект { first, last } с первым и последним элементами массива.
 * Примеры: getFirstAndLast([1, 2, 3, 4]) → { first: 1, last: 4 }
 *          getFirstAndLast([7])           → { first: 7, last: 7 }
 */
function getFirstAndLast(arr) {
 let first = arr[0];
 let last = arr[arr.length - 1];

  return { first, last };
  
}

/**
 * Задание 2.
 * Поменяй местами два значения и верни их в новом порядке.
 * Используй деструктуризацию массива.
 * Примеры: swap(1, 2)     → [2, 1]
 *          swap("a", "b") → ["b", "a"]
 */
function swap(a, b) {
  return [b, a];
}

/**
 * Задание 3.
 * Деструктурируй объект person и верни строку "Имя: X, Возраст: Y".
 * Используй деструктуризацию прямо в параметре функции.
 * Примеры: formatPerson({ name: "Alice", age: 30 }) → "Имя: Alice, Возраст: 30"
 */
function formatPerson({ name, age }) {
  return `Имя: ${name}, Возраст: ${age}`;
  // возьми переменную и вставь в текст
}

/**
 * Задание 4.
 * Примени настройки defaults к объекту options.
 * Если ключ уже есть в options — не перезаписывай.
 * Используй spread.
 * Примеры:
 *   withDefaults({ color: "red" }, { color: "blue", size: 10 })
 *     → { color: "red", size: 10 }
 */
function withDefaults(options, defaults) {
  return {
    ...defaults,
    ...options
  };
}

/**
 * Задание 5.
 * Верни сумму всех переданных аргументов.
 * Используй rest-параметры.
 * Примеры: sumAll(1, 2, 3)       → 6
 *          sumAll(10, 20)         → 30
 *          sumAll()               → 0
 */
function sumAll(...nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

/**
 * Задание 6.
 * Объедини несколько массивов в один с помощью spread.
 * Примеры: mergeArrays([1,2], [3,4], [5]) → [1, 2, 3, 4, 5]
 *          mergeArrays([], [1])            → [1]
 */
function mergeArrays(...arrays) {
  let result = [];

  for (let arr of arrays) {
    result.push(...arr);
  }
  return result;
}

module.exports = { getFirstAndLast, swap, formatPerson, withDefaults, sumAll, mergeArrays };
