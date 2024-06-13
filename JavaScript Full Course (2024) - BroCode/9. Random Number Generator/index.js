// RANDOM NUMBER GENERATOR
let randomNum = Math.random();
console.log(randomNum);

const min = 50;
const max = 100;

let randomNumFloor = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNumFloor);

const myLabel = document.getElementById("myLabel");
const myButton = document.getElementById("myButton");
const dMin = 1;
const dMax = 6;

myButton.onclick = function () {
  myLabel.textContent = Math.floor(Math.random() * dMax) + dMin;
};
