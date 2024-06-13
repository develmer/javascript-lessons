/*
    Closure = A function defined inside of another function, the inner function has access to the variables and scope
              of the outer function.

              Allow for private variables and state maintenance used frequently in JS frameworks: React, Vue, Angular
*/

// 1ST EXAMPLE
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}
outer();

// 2ND EXAMPLE
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increase to ${count}`);
  }

  return { increment: increment }; // shorthand {increment}
}

const counter = createCounter();
counter.increment();
counter.increment();

// 3RD EXAMPLE

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();
game.increaseScore(4);
game.decreaseScore(1);
console.log(`The final score is ${game.getScore()}`);
