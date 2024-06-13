/**
 * .reduce() = reduce the element of an array to a single value
               
 */
const prices = [5, 6.5, 30, 2.1, 15];
const total = prices.reduce(sum);

console.log(`P${total.toFixed(2)}`);

function sum(accumulator, element) {
  // accumulator = previous, next = element
  // 0 , 5 = 0 + 5
  // 5 will return to the accumulator
  // 5 is already the accumulator then the next number is 30 so 5 + 30
  return accumulator + element;
}

const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
