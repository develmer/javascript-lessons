/**
 * .filter() = creates a new array by filtering out elements
               
 */
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);
// console.log(oddNums);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChildren);

console.log(adults);
console.log(children);

function isAdult(element) {
  return element >= 18;
}

function isChildren(element) {
  return element < 18;
}

const words = ["apple", "orange", "banana", "kiwi", "grapes"];
const shortWords = words.filter(getShorWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShorWords(element) {
  return element.length <= 5;
}

function getLongWords(element) {
  return element.length > 5;
}
