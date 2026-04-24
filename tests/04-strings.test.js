const { capitalize, reverseString, countChar, truncate, isPalindrome, toKebabCase } = require('../exercises/04-strings');

describe('Строки', () => {
  describe('Задание 1 — capitalize', () => {
    test('"hello" → "Hello"', () => expect(capitalize('hello')).toBe('Hello'));
    test('"WORLD" → "World"', () => expect(capitalize('WORLD')).toBe('World'));
    test('"" → ""', () => expect(capitalize('')).toBe(''));
    test('"a" → "A"', () => expect(capitalize('a')).toBe('A'));
  });

  describe('Задание 2 — reverseString', () => {
    test('"hello" → "olleh"', () => expect(reverseString('hello')).toBe('olleh'));
    test('"ab" → "ba"', () => expect(reverseString('ab')).toBe('ba'));
    test('"" → ""', () => expect(reverseString('')).toBe(''));
    test('"a" → "a"', () => expect(reverseString('a')).toBe('a'));
  });

  describe('Задание 3 — countChar', () => {
    test('"hello", "l" → 2', () => expect(countChar('hello', 'l')).toBe(2));
    test('"hello", "z" → 0', () => expect(countChar('hello', 'z')).toBe(0));
    test('регистр важен: "Hello", "h" → 0', () => expect(countChar('Hello', 'h')).toBe(0));
    test('"aaa", "a" → 3', () => expect(countChar('aaa', 'a')).toBe(3));
  });

  describe('Задание 4 — truncate', () => {
    test('"Hello World", 8 → "Hello..."', () => expect(truncate('Hello World', 8)).toBe('Hello...'));
    test('строка короче maxLength — без изменений', () => expect(truncate('Hi', 8)).toBe('Hi'));
    test('строка равна maxLength — без изменений', () => expect(truncate('Hello', 5)).toBe('Hello'));
  });

  describe('Задание 5 — isPalindrome', () => {
    test('"racecar" → true', () => expect(isPalindrome('racecar')).toBe(true));
    test('"Madam" → true (регистр игнорируется)', () => expect(isPalindrome('Madam')).toBe(true));
    test('"hello" → false', () => expect(isPalindrome('hello')).toBe(false));
    test('"a" → true', () => expect(isPalindrome('a')).toBe(true));
  });

  describe('Задание 6 — toKebabCase', () => {
    test('"Hello World" → "hello-world"', () => expect(toKebabCase('Hello World')).toBe('hello-world'));
    test('"Foo Bar Baz" → "foo-bar-baz"', () => expect(toKebabCase('Foo Bar Baz')).toBe('foo-bar-baz'));
    test('"hello" → "hello"', () => expect(toKebabCase('hello')).toBe('hello'));
  });
});
