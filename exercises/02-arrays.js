// ============================================================
// Тема: Массивы
// Задача: дописать тело каждой функции так, чтобы она
//         возвращала правильный результат.
// ============================================================

/**
 * Задание 1.
 * Верни сумму всех элементов массива.
 * Примеры: sum([1, 2, 3])    → 6
 *          sum([])           → 0
 *          sum([10, -5, 3])  → 8
 */
function sum(arr) {
  let summa = 0;
  for (let i = 0; i < arr.length; i++) {
    summa += arr[i];
  }
  return summa;
}

/**
 * Задание 2.
 * Верни наибольший элемент массива.
 * Если массив пустой — верни null.
 * Примеры: getMax([1, 5, 3]) → 5
 *          getMax([])        → null
 */
function getMax(arr) {
  if (arr.length === 0) {
    return null;
  }
  return Math.max(...arr);
}

/**
 * Задание 3.
 * Верни новый массив, содержащий только чётные числа.
 * Примеры: filterEven([1, 2, 3, 4, 5]) → [2, 4]
 *          filterEven([1, 3, 5])        → []
 */
function filterEven(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}

/**
 * Задание 4.
 * Удвой каждый элемент массива и верни новый массив.
 * Примеры: doubleAll([1, 2, 3]) → [2, 4, 6]
 *          doubleAll([])        → []
 */
function doubleAll(arr) {
  let result = [];

  for (let i =0; i <arr.length; i++) {
    result.push(arr[i] *2);
  }
  return result;
}

/**
 * Задание 5.
 * Верни массив без повторяющихся элементов (уникальные значения).
 * Порядок первых вхождений должен сохраняться.
 * Примеры: unique([1, 2, 2, 3, 1]) → [1, 2, 3]
 *          unique([5, 5, 5])        → [5]
 */
function unique(arr) {
  return Array.from(new Set(arr));
}

/**
 * Задание 6.
 * Переверни массив (не изменяй исходный, верни новый).
 * Примеры: reverseArray([1, 2, 3]) → [3, 2, 1]
 *          reverseArray([])        → []
 */
function reverseArray(arr) {
  let result = [];

  for (let i = arr.length - 1; i >=0; i--) {
    result.push(arr[i]);
  }
  return result;
}


module.exports = { sum, getMax, filterEven, doubleAll, unique, reverseArray };
