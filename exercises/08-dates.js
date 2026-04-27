// ============================================================
// Тема: Работа с датами
// Задача: дописать тело каждой функции так, чтобы она
//         возвращала правильный результат.
//
// Все функции принимают объект Date, если не указано иначе.
// ============================================================

/**
 * Задание 1.
 * Верни год из переданной даты.
 * Примеры: getYear(new Date("2024-03-15")) → 2024
 */
function getYear(date) {
  return date.getFullYear();
}

/**
 * Задание 2.
 * Отформатируй дату в строку вида "ДД.ММ.ГГГГ".
 * День и месяц всегда двузначные (с ведущим нулём).
 * Примеры: formatDate(new Date("2024-03-05")) → "05.03.2024"
 *          formatDate(new Date("2024-12-31")) → "31.12.2024"
 */
function formatDate(date) {
  var day = date.getDate();
  if (day < 10) day = "0" + day;

  var month = date.getMonth() + 1;
  if (month < 10) month = "0" + month;

  var year = date.getFullYear();
  if (year < 10) year = "0" + year;

  return day + "." + month + "." + year;
}

/**
 * Задание 3.
 * Вычисли количество полных дней между двумя датами.
 * Результат всегда положительный (модуль разности).
 * Примеры: daysBetween(new Date("2024-01-01"), new Date("2024-01-11")) → 10
 *          daysBetween(new Date("2024-01-11"), new Date("2024-01-01")) → 10
 */
function daysBetween(date1, date2) {
  var oneDay = 1000 * 60 * 60 * 24;
  var diff = Math.abs(date1 - date2);
  return Math.floor(diff / oneDay);
}

/**
 * Задание 4.
 * Проверь, является ли дата выходным днём (суббота или воскресенье).
 * Примеры: isWeekend(new Date("2024-03-16")) → true  (суббота)
 *          isWeekend(new Date("2024-03-18")) → false (понедельник)
 */
function isWeekend(date) {
  var day = date.getDay();
  return day === 0 || day === 6;
}

/**
 * Задание 5.
 * Добавь n дней к дате и верни новый объект Date (не изменяй исходный).
 * Примеры: addDays(new Date("2024-01-01"), 5) → Date("2024-01-06")
 *          addDays(new Date("2024-01-30"), 3) → Date("2024-02-02")
 */
function addDays(date, n) {
  // твой код здесь
}

/**
 * Задание 6.
 * Вычисли полных лет с birthDate до сегодняшнего дня.
 * Примеры: если сегодня 2024-06-15, то:
 *   getAge(new Date("2000-06-15")) → 24
 *   getAge(new Date("2000-06-16")) → 23  (день рождения ещё не наступил)
 */
function getAge(birthDate) {
  var today = new Date();

  var age = today.getFullYear() - birthDate.getFullYear();

  var monthDiff = today.getMonth() - birthDate.getMonth();
  var dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

module.exports = {
  getYear,
  formatDate,
  daysBetween,
  isWeekend,
  addDays,
  getAge,
};
