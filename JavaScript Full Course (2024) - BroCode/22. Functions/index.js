/*
function = A section of reusable code.
           Declare code once, use it whenever you want.
           Call the function to execute that code.
*/

// function happyBirthday(name) { // Argument holds by parameter
//   console.log("Happy Birthday To You!");
//   console.log("Happy Birthday To You!");
//   console.log("Happy Birthday!");
//   console.log("Happy Birthday!");
//   console.log(`Happy Birthday ${name}!`);
// }

// happyBirthday("Elmer"); // Pass Argument

function add(x, y) {
  let result = x + y;
  return result;
}

let answer = add(2.5, 2.5);
console.log(answer);

function subtract(x, y) {
  return x - y;
}
console.log(subtract(1, 1));

function multiply(x, y) {
  return x * y;
}
console.log(multiply(2, 2));

function divide(x, y) {
  return x / y;
}
console.log(divide(5, 2));

function isEven(number) {
  return number % 2 === 0 ? true : false;
}
console.log(isEven(2));

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}
console.log(isValidEmail("elmersilangagmail.com"));
