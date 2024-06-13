// FISHER-YATES ALGORITHM

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// sort() not recommended - the bigger the array becomes this method is increasingly more become inefficient
// cards.sort(() => Math.random() - 0.5);

shuffle(cards);
console.log(cards);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}

// FISHER-YATES ALGORITHM
const str = "ELMER";
let newStr = "";
for (i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
  console.log(newStr);
}
