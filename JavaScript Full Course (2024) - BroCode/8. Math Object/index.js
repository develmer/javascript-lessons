/*
Math = build-in object that provides a collection of properties and methods
*/
console.log(Math.PI);
console.log(Math.E);

let x = 3;
let y = 2;
let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(50);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
z = Math.sign(x);
console.log(z);

let a = 5;
let b = 2;
let c = 10;
let max = Math.max(a, b, c);
let min = Math.min(a, b, c);
console.log(max, min);
