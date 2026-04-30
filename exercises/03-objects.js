// ============================================================
// Тема: Объекты
// Задача: дописать тело каждой функции так, чтобы она
//         возвращала правильный результат.
// ============================================================

/**
 * Задание 1.
 * Верни значение свойства name из объекта.
 * Если свойства нет — верни "Unknown".
 * Примеры: getName({ name: "Alice" }) → "Alice"
 *          getName({ age: 25 })       → "Unknown"
 */
function getName(obj) {
  if (obj.name) {
    return obj.name;
  } else {
    return "Unknown";
  }
}

/**
 * Задание 2.
 * Посчитай количество свойств объекта и верни его.
 * Примеры: countKeys({ a: 1, b: 2 }) → 2
 *          countKeys({})              → 0
 */
function countKeys(obj) {
  return Object.keys(obj).length;
}

/**
 * Задание 3.
 * Объедини два объекта в один новый объект.
 * Если ключи совпадают — значения из второго объекта перезаписывают первый.
 * Примеры: mergeObjects({ a: 1 }, { b: 2 })      → { a: 1, b: 2 }
 *          mergeObjects({ a: 1 }, { a: 99, b: 2 }) → { a: 99, b: 2 }
 */
function mergeObjects(obj1, obj2) {
  return {...obj1, ...obj2};
  // “сложи два объекта, второй важнее”
}

/**
 * Задание 4.
 * Верни массив всех значений объекта.
 * Примеры: getValues({ a: 1, b: "hi", c: true }) → [1, "hi", true]
 *          getValues({})                           → []
 */
function getValues(obj) {
  // твой код здесь
}

/**
 * Задание 5.
 * Проверь, есть ли в объекте свойство с переданным именем.
 * Верни true или false.
 * Примеры: hasProperty({ x: 10 }, "x")  → true
 *          hasProperty({ x: 10 }, "y")  → false
 */
function hasProperty(obj, key) {
  // твой код здесь
}

/**
 * Задание 6.
 * Прочитай вложенное свойство obj.address.city и верни его.
 * Если любого из промежуточных свойств нет — верни null.
 * Примеры: getCity({ address: { city: "Moscow" } }) → "Moscow"
 *          getCity({ address: {} })                   → null
 *          getCity({})                                → null
 */
function getCity(obj) {
  // твой код здесь
}

module.exports = { getName, countKeys, mergeObjects, getValues, hasProperty, getCity };
