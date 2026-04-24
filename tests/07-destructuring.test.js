const { getFirstAndLast, swap, formatPerson, withDefaults, sumAll, mergeArrays } = require('../exercises/07-destructuring');

describe('Деструктуризация', () => {
  describe('Задание 1 — getFirstAndLast', () => {
    test('[1,2,3,4] → { first: 1, last: 4 }', () => {
      expect(getFirstAndLast([1, 2, 3, 4])).toEqual({ first: 1, last: 4 });
    });
    test('[7] → { first: 7, last: 7 }', () => {
      expect(getFirstAndLast([7])).toEqual({ first: 7, last: 7 });
    });
    test('["a","b","c"] → { first: "a", last: "c" }', () => {
      expect(getFirstAndLast(['a', 'b', 'c'])).toEqual({ first: 'a', last: 'c' });
    });
  });

  describe('Задание 2 — swap', () => {
    test('swap(1, 2) → [2, 1]', () => expect(swap(1, 2)).toEqual([2, 1]));
    test('swap("a", "b") → ["b", "a"]', () => expect(swap('a', 'b')).toEqual(['b', 'a']));
    test('swap(7, 7) → [7, 7]', () => expect(swap(7, 7)).toEqual([7, 7]));
  });

  describe('Задание 3 — formatPerson', () => {
    test('{ name: "Alice", age: 30 } → "Имя: Alice, Возраст: 30"', () => {
      expect(formatPerson({ name: 'Alice', age: 30 })).toBe('Имя: Alice, Возраст: 30');
    });
    test('{ name: "Bob", age: 25 } → "Имя: Bob, Возраст: 25"', () => {
      expect(formatPerson({ name: 'Bob', age: 25 })).toBe('Имя: Bob, Возраст: 25');
    });
  });

  describe('Задание 4 — withDefaults', () => {
    test('существующие ключи не перезаписываются', () => {
      expect(withDefaults({ color: 'red' }, { color: 'blue', size: 10 }))
        .toEqual({ color: 'red', size: 10 });
    });
    test('пустой options — берёт все defaults', () => {
      expect(withDefaults({}, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
    });
    test('не изменяет исходные объекты', () => {
      const opts = { x: 1 };
      const defs = { x: 99, y: 2 };
      withDefaults(opts, defs);
      expect(opts).toEqual({ x: 1 });
      expect(defs).toEqual({ x: 99, y: 2 });
    });
  });

  describe('Задание 5 — sumAll', () => {
    test('sumAll(1, 2, 3) → 6', () => expect(sumAll(1, 2, 3)).toBe(6));
    test('sumAll(10, 20) → 30', () => expect(sumAll(10, 20)).toBe(30));
    test('sumAll() → 0', () => expect(sumAll()).toBe(0));
    test('sumAll(5) → 5', () => expect(sumAll(5)).toBe(5));
  });

  describe('Задание 6 — mergeArrays', () => {
    test('[1,2], [3,4], [5] → [1,2,3,4,5]', () => {
      expect(mergeArrays([1, 2], [3, 4], [5])).toEqual([1, 2, 3, 4, 5]);
    });
    test('[], [1] → [1]', () => {
      expect(mergeArrays([], [1])).toEqual([1]);
    });
    test('один массив — возвращает его копию', () => {
      expect(mergeArrays([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });
});
