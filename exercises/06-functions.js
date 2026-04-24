// ============================================================
// Тема: Функции
// Задача: дописать тело каждой функции так, чтобы она
//         возвращала правильный результат.
// ============================================================

/**
 * Задание 1.
 * Верни функцию, которая умножает переданное число на n (замыкание).
 * Примеры:
 *   const double = createMultiplier(2);
 *   double(5)  → 10
 *   double(3)  → 6
 *
 *   const triple = createMultiplier(3);
 *   triple(4)  → 12
 */
function createMultiplier(n) {
  // твой код здесь
}

/**
 * Задание 2.
 * Примени функцию fn к значению value дважды.
 * Примеры:
 *   applyTwice(x => x + 1, 5)  → 7
 *   applyTwice(x => x * 2, 3)  → 12
 */
function applyTwice(fn, value) {
  // твой код здесь
}

/**
 * Задание 3.
 * Верни функцию-счётчик. Каждый вызов возвращает следующее число, начиная с 1.
 * Примеры:
 *   const count = createCounter();
 *   count() → 1
 *   count() → 2
 *   count() → 3
 */
function createCounter() {
  // твой код здесь
}

/**
 * Задание 4.
 * Верни новую функцию, которая вызывает fn только один раз.
 * При последующих вызовах возвращает результат первого вызова.
 * Примеры:
 *   const init = once(() => 42);
 *   init() → 42
 *   init() → 42  (fn больше не вызывается)
 */
function once(fn) {
  // твой код здесь
}

/**
 * Задание 5.
 * Верни новую функцию — композицию f и g: x → f(g(x)).
 * Примеры:
 *   const add1  = x => x + 1;
 *   const times2 = x => x * 2;
 *   compose(add1, times2)(3)  → 7   // times2(3)=6, add1(6)=7
 *   compose(times2, add1)(3)  → 8   // add1(3)=4, times2(4)=8
 */
function compose(f, g) {
  // твой код здесь
}

/**
 * Задание 6.
 * Верни новую функцию с частично применёнными первыми аргументами.
 * Примеры:
 *   const add = (a, b) => a + b;
 *   const add5 = partial(add, 5);
 *   add5(3)  → 8
 *   add5(10) → 15
 */
function partial(fn, ...presetArgs) {
  // твой код здесь
}

module.exports = { createMultiplier, applyTwice, createCounter, once, compose, partial };
