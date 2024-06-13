/*
Spread Operator = ... allows an iterable such as an array or string to be expanded into
                  separate elements
                  (unpacked the elements)

                  it's like opening a box and taking something
*/

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let maximumNotSpread = Math.max(numbers);
console.log(maximumNotSpread);

let maximum = Math.max(...numbers);
console.log(maximum);

let minimum = Math.min(...numbers);
console.log(minimum);

let username = "Elmer Silanga";
let letters = [...username];
console.log(letters);

let chars = [...username].join("-");
console.log(chars);

// Shallow copy - a different data structure but it contains identical values
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrot", "celery", "potato"];
let foods = [...fruits, ...vegetables];

console.log(fruits);
console.log(foods);
