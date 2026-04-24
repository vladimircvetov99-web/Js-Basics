const { getType, toNumber, isEmpty, toBoolean, getLength, concat } = require('../exercises/01-data-types');

describe('Типы данных', () => {
  describe('Задание 1 — getType', () => {
    test('возвращает "number" для числа', () => {
      expect(getType(42)).toBe('number');
    });
    test('возвращает "string" для строки', () => {
      expect(getType('hello')).toBe('string');
    });
    test('возвращает "boolean" для булева', () => {
      expect(getType(true)).toBe('boolean');
    });
    test('возвращает "undefined" для undefined', () => {
      expect(getType(undefined)).toBe('undefined');
    });
    test('возвращает "object" для null', () => {
      expect(getType(null)).toBe('object');
    });
  });

  describe('Задание 2 — toNumber', () => {
    test('преобразует "42" → 42', () => {
      expect(toNumber('42')).toBe(42);
    });
    test('преобразует "3.14" → 3.14', () => {
      expect(toNumber('3.14')).toBe(3.14);
    });
    test('возвращает 0 для нечислового значения', () => {
      expect(toNumber('abc')).toBe(0);
    });
    test('возвращает 0 для пустой строки', () => {
      expect(toNumber('')).toBe(0);
    });
  });

  describe('Задание 3 — isEmpty', () => {
    test('0 является пустым', () => expect(isEmpty(0)).toBe(true));
    test('"" является пустым', () => expect(isEmpty('')).toBe(true));
    test('null является пустым', () => expect(isEmpty(null)).toBe(true));
    test('undefined является пустым', () => expect(isEmpty(undefined)).toBe(true));
    test('false является пустым', () => expect(isEmpty(false)).toBe(true));
    test('"hello" НЕ является пустым', () => expect(isEmpty('hello')).toBe(false));
    test('1 НЕ является пустым', () => expect(isEmpty(1)).toBe(false));
  });

  describe('Задание 4 — toBoolean', () => {
    test('1 → true', () => expect(toBoolean(1)).toBe(true));
    test('"text" → true', () => expect(toBoolean('text')).toBe(true));
    test('0 → false', () => expect(toBoolean(0)).toBe(false));
    test('"" → false', () => expect(toBoolean('')).toBe(false));
  });

  describe('Задание 5 — getLength', () => {
    test('"hello" → 5', () => expect(getLength('hello')).toBe(5));
    test('"" → 0', () => expect(getLength('')).toBe(0));
    test('число → -1', () => expect(getLength(123)).toBe(-1));
    test('null → -1', () => expect(getLength(null)).toBe(-1));
  });

  describe('Задание 6 — concat', () => {
    test('"Hello" + "World" → "Hello World"', () => {
      expect(concat('Hello', 'World')).toBe('Hello World');
    });
    test('1 + 2 → "1 2"', () => {
      expect(concat(1, 2)).toBe('1 2');
    });
  });
});
