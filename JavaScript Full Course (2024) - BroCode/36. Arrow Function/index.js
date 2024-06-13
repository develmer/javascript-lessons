/**
 * Arrow Function = a concise way to write function expressions
                    good for simple functions that you use only once
                    (parameters) => code     
 */
const hello = (name) => console.log(`Hello ${name}`);
hello("Elmer");

const helloAge = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are ${age} years old`);
};
helloAge("Elmer", 38);

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
