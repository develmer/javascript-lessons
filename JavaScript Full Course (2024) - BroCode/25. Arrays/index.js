/*
Array = a variable like structure that can hold
        more than 1 value
*/

let fruits = ["apple", "orange", "banana"]; // value inside array are called "elements of the array"

//fruits.push("coconut"); // added new element in the array in the last
//fruits.pop(); // removes the last element
//console.log(typeof fruits, fruits);

//fruits.unshift("mango"); // added new element in the beginning of the array
//fruits.shift(); // removed the element in the beginning
//console.log(typeof fruits, fruits);

//let numOfFruits = fruits.length;
//console.log(numOfFruits);

//let index = fruits.indexOf("orange");
//console.log(index);

//for (let i = 0; i <= fruits.length; i++) {
//  console.log(fruits[i]);
//}

//for (let fruit of fruits) {
//  console.log(fruit);
//}

fruits.sort(); // sorts array in alphabetical order
console.log(fruits);

fruits.reverse(); // sort array from end to beginning
console.log(fruits);

let str = "elmer";
console.log(str.split("").reverse());
