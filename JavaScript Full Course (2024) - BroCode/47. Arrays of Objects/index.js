const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

console.log(fruits[4].calories);

// -------- .foreach() ---------------------
fruits.forEach((fruit) => console.log(fruit));

// -------- .map() ---------------------
const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);
console.log(fruitNames);
console.log(fruitColors);

// -------- .filter() ---------------------
const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
console.log(yellowFruits);
console.log(lowCalFruits);

// -------- .reduce() ---------------------
const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);
console.log(minFruit);
