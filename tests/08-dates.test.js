const { getYear, formatDate, daysBetween, isWeekend, addDays, getAge } = require('../exercises/08-dates');

describe('Работа с датами', () => {
  describe('Задание 1 — getYear', () => {
    test('2024-03-15 → 2024', () => expect(getYear(new Date('2024-03-15'))).toBe(2024));
    test('2000-01-01 → 2000', () => expect(getYear(new Date('2000-01-01'))).toBe(2000));
  });

  describe('Задание 2 — formatDate', () => {
    test('2024-03-05 → "05.03.2024"', () => {
      expect(formatDate(new Date('2024-03-05'))).toBe('05.03.2024');
    });
    test('2024-12-31 → "31.12.2024"', () => {
      expect(formatDate(new Date('2024-12-31'))).toBe('31.12.2024');
    });
    test('2000-01-01 → "01.01.2000"', () => {
      expect(formatDate(new Date('2000-01-01'))).toBe('01.01.2000');
    });
  });

  describe('Задание 3 — daysBetween', () => {
    test('10 дней вперёд → 10', () => {
      expect(daysBetween(new Date('2024-01-01'), new Date('2024-01-11'))).toBe(10);
    });
    test('результат всегда положительный (обратный порядок)', () => {
      expect(daysBetween(new Date('2024-01-11'), new Date('2024-01-01'))).toBe(10);
    });
    test('одна и та же дата → 0', () => {
      expect(daysBetween(new Date('2024-06-01'), new Date('2024-06-01'))).toBe(0);
    });
  });

  describe('Задание 4 — isWeekend', () => {
    test('суббота 2024-03-16 → true', () => {
      expect(isWeekend(new Date('2024-03-16'))).toBe(true);
    });
    test('воскресенье 2024-03-17 → true', () => {
      expect(isWeekend(new Date('2024-03-17'))).toBe(true);
    });
    test('понедельник 2024-03-18 → false', () => {
      expect(isWeekend(new Date('2024-03-18'))).toBe(false);
    });
    test('пятница 2024-03-15 → false', () => {
      expect(isWeekend(new Date('2024-03-15'))).toBe(false);
    });
  });

  describe('Задание 5 — addDays', () => {
    test('2024-01-01 + 5 → 2024-01-06', () => {
      expect(addDays(new Date('2024-01-01'), 5).toISOString().slice(0, 10))
        .toBe('2024-01-06');
    });
    test('переход через месяц: 2024-01-30 + 3 → 2024-02-02', () => {
      expect(addDays(new Date('2024-01-30'), 3).toISOString().slice(0, 10))
        .toBe('2024-02-02');
    });
    test('не изменяет исходную дату', () => {
      const original = new Date('2024-01-01');
      addDays(original, 10);
      expect(original.toISOString().slice(0, 10)).toBe('2024-01-01');
    });
  });

  describe('Задание 6 — getAge', () => {
    test('ровно 24 года если день рождения сегодня', () => {
      const today = new Date();
      const birth = new Date(today.getFullYear() - 24, today.getMonth(), today.getDate());
      expect(getAge(birth)).toBe(24);
    });
    test('день рождения ещё не наступил в этом году — на 1 меньше', () => {
      const today = new Date();
      const birth = new Date(today.getFullYear() - 24, today.getMonth(), today.getDate() + 1);
      expect(getAge(birth)).toBe(23);
    });
  });
});
