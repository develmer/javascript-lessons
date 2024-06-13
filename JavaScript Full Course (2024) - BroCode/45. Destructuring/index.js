/**
 * Destructuring = extract values from arrays and objects, then  assign them to variables in a convenient way.
                   [] = to perform array destructuring
                   {} = to perform object destructuring
 */

const colors = ["red", "green", "blue", "black", "white"];
let a = 1;
let b = 2;

// EXAMPLE 1
// SWAP THE VALUE OF TWO VARIABLES
[a, b] = [b, a];
console.log(a);
console.log(b);

// EXAMPLE 2
// SWAP 2 ELEMENTS IN AN ARRAY
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// EXAMPLE 3
// ASSIGN ARRAY ELEMENTS TO VARIABLES
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor, secondColor, thirdColor, extraColors);

// EXAMPLE 4
// EXTRACT VALUES FROM OBJECTS
const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry cook",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

const { firstName, lastName, age, job = "unemployed" } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// EXAMPLE 5
// DESCTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({ firstName, lastName, age, job }) {
  console.log(`name: ${firstName}`);
  console.log(`last: ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

displayPerson(person2);
