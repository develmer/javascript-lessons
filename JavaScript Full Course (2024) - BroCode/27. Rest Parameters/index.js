/*
Rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

                  spread = expands an array into separate elements
                  rest = bundles seperate elements into an array
*/

/*
function openFridge(...foods) {
  console.log(foods);
}

function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4);

const food = getFood(food1, food2, food3, food4);
console.log(food);
*/

/*
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 3, 4, 5, 5);
console.log(`Your total is P${total}`);

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}
const totalAverage = getAverage(75, 100, 85, 90, 50);
console.log(totalAverage);
*/

function combineStrings(...strings) {
  return strings.join(" ");
}
const fullname = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullname);
