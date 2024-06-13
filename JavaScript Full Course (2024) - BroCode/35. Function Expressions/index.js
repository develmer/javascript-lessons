/**
 * Function Declaration = define a reusable block of code that performs a specific task
               
 */

// function hello() {
//   console.log("Hello");
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);

// console.log(squares);

// function square(element) {
//   return Math.pow(element, 2);
// }

/**
 * Function Expressions = a way to define a functions as values or variables
               
 */

// const hello = function () {
//   console.log("Hello");
// };

// setTimeout(hello, 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

console.log(squares);
