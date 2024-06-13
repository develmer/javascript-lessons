/*
String slicing = creating a substring from a portion of another string
                 string.slice(start, end)
*/

const fullName = "Elmer Silanga";
let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6, 13);
let firstLetter = fullName.slice(0, 1);
let lastLetter = fullName.slice(-1);

let indexFirstName = fullName.slice(0, fullName.indexOf(" "));
let indexLastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
console.log(firstLetter);
console.log(lastLetter);
console.log(indexFirstName);
console.log(indexLastName);

// EXERCISE
const email = "elmersilanga@gmail.com";
const username = email.slice(0, email.indexOf("@"));
const extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
