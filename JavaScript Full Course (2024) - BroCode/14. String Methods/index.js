/*
String methods = allow you to manipulate and work with text (strings)
*/

let username = "elmer";
let trimUsername = "  elmer  ";
let phoneNumber = "123-456-7890";

console.log(username.charAt(0)); // getting character base on index
console.log(username.indexOf("e")); // getting index or first seen based on character
console.log(username.lastIndexOf("e")); // getting last index or last seen based on character
console.log(username.length); // getting length of string

console.log(trimUsername.trim()); // removing white-space in the character

console.log(username.toUpperCase()); // to uppercase all characters in the string
console.log(username.toLowerCase()); // to lowercase all characters in the string
console.log(username.repeat(2)); // to repeat the string

console.log(username.startsWith("e")); // boolean return if it starts with the character
console.log(username.startsWith("e", 4)); // boolean return if the letter is equal in the position
console.log(username.endsWith("r")); // boolean return if it starts with the character
console.log(username.endsWith("e", 0)); // boolean return if the letter is equal in the position

console.log(username.includes("em")); // boolean return if a string is included

console.log(phoneNumber.replaceAll("-", "")); // replace all given in the string your wanted to be replaced
console.log(phoneNumber.padStart(15, "0")); // adding value to the start and with total of indicated max character length
console.log(phoneNumber.padEnd(15, 2)); // adding value to the end and with total of indicated max character length

let newString = "";
for (let i = username.length - 1; i >= 0; i--) {
  newString += username[i];
}
console.log(newString);
