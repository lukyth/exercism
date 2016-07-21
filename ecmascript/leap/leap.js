const isDivisible = function(dividend, divisor) {
  return dividend % divisor === 0
}

export default function isLeapYear(year) {
  return isDivisible(year, 400) || !isDivisible(year, 100) && isDivisible(year, 4);
}