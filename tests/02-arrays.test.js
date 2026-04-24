const { sum, getMax, filterEven, doubleAll, unique, reverseArray } = require('../exercises/02-arrays');

describe('Массивы', () => {
  describe('Задание 1 — sum', () => {
    test('[1, 2, 3] → 6', () => expect(sum([1, 2, 3])).toBe(6));
    test('[] → 0', () => expect(sum([])).toBe(0));
    test('[10, -5, 3] → 8', () => expect(sum([10, -5, 3])).toBe(8));
  });

  describe('Задание 2 — getMax', () => {
    test('[1, 5, 3] → 5', () => expect(getMax([1, 5, 3])).toBe(5));
    test('[7] → 7', () => expect(getMax([7])).toBe(7));
    test('[] → null', () => expect(getMax([])).toBe(null));
    test('[-1, -5, -2] → -1', () => expect(getMax([-1, -5, -2])).toBe(-1));
  });

  describe('Задание 3 — filterEven', () => {
    test('[1,2,3,4,5] → [2,4]', () => {
      expect(filterEven([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });
    test('[1, 3, 5] → []', () => {
      expect(filterEven([1, 3, 5])).toEqual([]);
    });
    test('[2, 4, 6] → [2, 4, 6]', () => {
      expect(filterEven([2, 4, 6])).toEqual([2, 4, 6]);
    });
  });

  describe('Задание 4 — doubleAll', () => {
    test('[1, 2, 3] → [2, 4, 6]', () => {
      expect(doubleAll([1, 2, 3])).toEqual([2, 4, 6]);
    });
    test('[] → []', () => {
      expect(doubleAll([])).toEqual([]);
    });
    test('не изменяет исходный массив', () => {
      const original = [1, 2, 3];
      doubleAll(original);
      expect(original).toEqual([1, 2, 3]);
    });
  });

  describe('Задание 5 — unique', () => {
    test('[1,2,2,3,1] → [1,2,3]', () => {
      expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
    });
    test('[5,5,5] → [5]', () => {
      expect(unique([5, 5, 5])).toEqual([5]);
    });
    test('[1,2,3] → [1,2,3] (без изменений)', () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('Задание 6 — reverseArray', () => {
    test('[1,2,3] → [3,2,1]', () => {
      expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
    });
    test('[] → []', () => {
      expect(reverseArray([])).toEqual([]);
    });
    test('не изменяет исходный массив', () => {
      const original = [1, 2, 3];
      reverseArray(original);
      expect(original).toEqual([1, 2, 3]);
    });
  });
});
