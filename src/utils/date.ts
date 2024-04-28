export const days = Array(31)
  .fill(0)
  .map((_, day) => day + 1);

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const years = Array(200)
  .fill(0)
  .map((_, year) => 1900 + year);

const monthDays: Record<string, (year: number) => number> = {
  January: (_) => 31,
  February: (year) => (isLeapYear(year) ? 29 : 28),
  March: (_) => 31,
  April: (_) => 30,
  May: (_) => 31,
  June: (_) => 30,
  July: (_) => 31,
  August: (_) => 31,
  September: (_) => 30,
  October: (_) => 31,
  November: (_) => 30,
  December: (_) => 31,
};

export function isValidDay(day: string, month: string, year: string) {
  // [month] is not specified, so any day is valid
  if (!month) {
    return true;
  }

  // [month] is specified but [year] is not specified, assume a leap year to relax Feb
  if (!year) {
    return parseInt(day) <= monthDays[month]?.(2000);
  }

  return parseInt(day) <= monthDays[month]?.(parseInt(year));
}

export function isValidMonth(day: string, month: string, year: string) {
  // [day] is not specified, so any month is valid
  if (!day) {
    return true;
  }

  // [day] is specified but [year] is not specified, assume a leap year to relax Feb
  if (!year) {
    return parseInt(day) <= monthDays[month]?.(2000);
  }

  return parseInt(day) <= monthDays[month]?.(parseInt(year));
}

export function isValidYear(day: string, month: string, year: string) {
  // Either of [day] or [month] is not specified, so any year is valid
  if (!(day && month)) {
    return true;
  }

  return parseInt(day) <= monthDays[month]?.(parseInt(year));
}

export function formatDate(date: Date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${months[month]} ${year}`;
}

function isLeapYear(year: number) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
