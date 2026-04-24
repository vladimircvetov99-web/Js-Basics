const { roundTo, clamp, isEven, factorial, inRange, average } = require('../exercises/05-numbers');

describe('Числа и Math', () => {
  describe('Задание 1 — roundTo', () => {
    test('3.14159, 2 → 3.14', () => expect(roundTo(3.14159, 2)).toBe(3.14));
    test('5.678, 0 → 6', () => expect(roundTo(5.678, 0)).toBe(6));
    test('1.005, 2 → 1.01', () => expect(roundTo(1.005, 2)).toBe(1.01));
  });

  describe('Задание 2 — clamp', () => {
    test('5 в [1, 10] → 5', () => expect(clamp(5, 1, 10)).toBe(5));
    test('-3 в [1, 10] → 1', () => expect(clamp(-3, 1, 10)).toBe(1));
    test('15 в [1, 10] → 10', () => expect(clamp(15, 1, 10)).toBe(10));
    test('граница min: 1 в [1, 10] → 1', () => expect(clamp(1, 1, 10)).toBe(1));
  });

  describe('Задание 3 — isEven', () => {
    test('4 → true', () => expect(isEven(4)).toBe(true));
    test('7 → false', () => expect(isEven(7)).toBe(false));
    test('0 → true', () => expect(isEven(0)).toBe(true));
    test('-2 → true', () => expect(isEven(-2)).toBe(true));
  });

  describe('Задание 4 — factorial', () => {
    test('0! → 1', () => expect(factorial(0)).toBe(1));
    test('1! → 1', () => expect(factorial(1)).toBe(1));
    test('5! → 120', () => expect(factorial(5)).toBe(120));
    test('6! → 720', () => expect(factorial(6)).toBe(720));
  });

  describe('Задание 5 — inRange', () => {
    test('5 в [1, 10] → true', () => expect(inRange(5, 1, 10)).toBe(true));
    test('0 в [1, 10] → false', () => expect(inRange(0, 1, 10)).toBe(false));
    test('10 в [1, 10] → true (включительно)', () => expect(inRange(10, 1, 10)).toBe(true));
    test('11 в [1, 10] → false', () => expect(inRange(11, 1, 10)).toBe(false));
  });

  describe('Задание 6 — average', () => {
    test('[1, 2, 3, 4] → 2.5', () => expect(average([1, 2, 3, 4])).toBe(2.5));
    test('[10] → 10', () => expect(average([10])).toBe(10));
    test('[] → 0', () => expect(average([])).toBe(0));
    test('[1, 1, 1] → 1', () => expect(average([1, 1, 1])).toBe(1));
  });
});
