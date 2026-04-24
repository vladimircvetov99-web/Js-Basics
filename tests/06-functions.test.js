const { createMultiplier, applyTwice, createCounter, once, compose, partial } = require('../exercises/06-functions');

describe('Функции', () => {
  describe('Задание 1 — createMultiplier', () => {
    test('double(5) → 10', () => expect(createMultiplier(2)(5)).toBe(10));
    test('triple(4) → 12', () => expect(createMultiplier(3)(4)).toBe(12));
    test('каждый вызов createMultiplier возвращает новую независимую функцию', () => {
      const x2 = createMultiplier(2);
      const x5 = createMultiplier(5);
      expect(x2(3)).toBe(6);
      expect(x5(3)).toBe(15);
    });
  });

  describe('Задание 2 — applyTwice', () => {
    test('x + 1, применённое дважды к 5 → 7', () => {
      expect(applyTwice(x => x + 1, 5)).toBe(7);
    });
    test('x * 2, применённое дважды к 3 → 12', () => {
      expect(applyTwice(x => x * 2, 3)).toBe(12);
    });
  });

  describe('Задание 3 — createCounter', () => {
    test('последовательно возвращает 1, 2, 3', () => {
      const count = createCounter();
      expect(count()).toBe(1);
      expect(count()).toBe(2);
      expect(count()).toBe(3);
    });
    test('два счётчика независимы', () => {
      const a = createCounter();
      const b = createCounter();
      a(); a();
      expect(a()).toBe(3);
      expect(b()).toBe(1);
    });
  });

  describe('Задание 4 — once', () => {
    test('возвращает результат первого вызова', () => {
      const fn = once(() => 42);
      expect(fn()).toBe(42);
    });
    test('fn вызывается только один раз при повторных вызовах', () => {
      let calls = 0;
      const fn = once(() => { calls++; return calls; });
      fn(); fn(); fn();
      expect(calls).toBe(1);
    });
    test('повторные вызовы возвращают тот же результат', () => {
      const fn = once(() => 99);
      expect(fn()).toBe(99);
      expect(fn()).toBe(99);
    });
  });

  describe('Задание 5 — compose', () => {
    const add1   = x => x + 1;
    const times2 = x => x * 2;
    test('compose(add1, times2)(3) → 7', () => {
      expect(compose(add1, times2)(3)).toBe(7);
    });
    test('compose(times2, add1)(3) → 8', () => {
      expect(compose(times2, add1)(3)).toBe(8);
    });
  });

  describe('Задание 6 — partial', () => {
    test('partial(add, 5)(3) → 8', () => {
      const add = (a, b) => a + b;
      expect(partial(add, 5)(3)).toBe(8);
    });
    test('partial(multiply, 2, 3)() → 6', () => {
      const multiply = (a, b) => a * b;
      expect(partial(multiply, 2)(3)).toBe(6);
    });
  });
});
