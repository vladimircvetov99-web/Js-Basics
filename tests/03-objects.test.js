const { getName, countKeys, mergeObjects, getValues, hasProperty, getCity } = require('../exercises/03-objects');

describe('Объекты', () => {
  describe('Задание 1 — getName', () => {
    test('возвращает name из объекта', () => {
      expect(getName({ name: 'Alice' })).toBe('Alice');
    });
    test('возвращает "Unknown" если name нет', () => {
      expect(getName({ age: 25 })).toBe('Unknown');
    });
    test('возвращает "Unknown" для пустого объекта', () => {
      expect(getName({})).toBe('Unknown');
    });
  });

  describe('Задание 2 — countKeys', () => {
    test('{ a: 1, b: 2 } → 2', () => expect(countKeys({ a: 1, b: 2 })).toBe(2));
    test('{} → 0', () => expect(countKeys({})).toBe(0));
    test('{ x: 1, y: 2, z: 3 } → 3', () => expect(countKeys({ x: 1, y: 2, z: 3 })).toBe(3));
  });

  describe('Задание 3 — mergeObjects', () => {
    test('объединяет два объекта', () => {
      expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    });
    test('значения второго объекта перезаписывают первый', () => {
      expect(mergeObjects({ a: 1 }, { a: 99, b: 2 })).toEqual({ a: 99, b: 2 });
    });
    test('не изменяет исходные объекты', () => {
      const o1 = { a: 1 };
      const o2 = { b: 2 };
      mergeObjects(o1, o2);
      expect(o1).toEqual({ a: 1 });
      expect(o2).toEqual({ b: 2 });
    });
  });

  describe('Задание 4 — getValues', () => {
    test('возвращает массив значений', () => {
      expect(getValues({ a: 1, b: 'hi', c: true })).toEqual([1, 'hi', true]);
    });
    test('{} → []', () => {
      expect(getValues({})).toEqual([]);
    });
  });

  describe('Задание 5 — hasProperty', () => {
    test('{ x: 10 }, "x" → true', () => {
      expect(hasProperty({ x: 10 }, 'x')).toBe(true);
    });
    test('{ x: 10 }, "y" → false', () => {
      expect(hasProperty({ x: 10 }, 'y')).toBe(false);
    });
    test('{}, "a" → false', () => {
      expect(hasProperty({}, 'a')).toBe(false);
    });
  });

  describe('Задание 6 — getCity', () => {
    test('возвращает вложенный город', () => {
      expect(getCity({ address: { city: 'Moscow' } })).toBe('Moscow');
    });
    test('возвращает null если city нет', () => {
      expect(getCity({ address: {} })).toBe(null);
    });
    test('возвращает null если address нет', () => {
      expect(getCity({})).toBe(null);
    });
  });
});
