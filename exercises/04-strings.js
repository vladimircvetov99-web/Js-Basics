// ============================================================
// Тема: Строки
// Задача: дописать тело каждой функции так, чтобы она
//         возвращала правильный результат.
// ============================================================

/**
 * Задание 1.
 * Сделай первую букву строки заглавной, остальные — строчными.
 * Примеры: capitalize("hello")  → "Hello"
 *          capitalize("WORLD")  → "World"
 *          capitalize("")       → ""
 */
function capitalize(str) {
  // твой код здесь
}

/**
 * Задание 2.
 * Переверни строку.
 * Примеры: reverseString("hello") → "olleh"
 *          reverseString("ab")    → "ba"
 *          reverseString("")      → ""
 */
function reverseString(str) {
  // твой код здесь
}

/**
 * Задание 3.
 * Подсчитай, сколько раз символ char встречается в строке str.
 * Учёт регистра: "a" и "A" — разные символы.
 * Примеры: countChar("hello", "l")  → 2
 *          countChar("hello", "z")  → 0
 */
function countChar(str, char) {
  // твой код здесь
}

/**
 * Задание 4.
 * Обрежь строку до maxLength символов.
 * Если строка длиннее — добавь "..." в конец (итого maxLength символов).
 * Если не длиннее — верни как есть.
 * Примеры: truncate("Hello World", 8)  → "Hello..."
 *          truncate("Hi", 8)           → "Hi"
 */
function truncate(str, maxLength) {
  // твой код здесь
}

/**
 * Задание 5.
 * Проверь, является ли строка палиндромом (читается одинаково в обе стороны).
 * Регистр игнорируй.
 * Примеры: isPalindrome("racecar") → true
 *          isPalindrome("Madam")   → true
 *          isPalindrome("hello")   → false
 */
function isPalindrome(str) {
  // твой код здесь
}

/**
 * Задание 6.
 * Преобразуй строку в kebab-case:
 * все буквы — строчные, пробелы заменяются на дефис.
 * Примеры: toKebabCase("Hello World")   → "hello-world"
 *          toKebabCase("Foo Bar Baz")   → "foo-bar-baz"
 */
function toKebabCase(str) {
  // твой код здесь
}

module.exports = {
  capitalize,
  reverseString,
  countChar,
  truncate,
  isPalindrome,
  toKebabCase,
};
