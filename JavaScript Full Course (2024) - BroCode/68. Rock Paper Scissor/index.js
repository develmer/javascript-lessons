// ROCK PAPER SCISSOR
const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissor":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  console.log(`Result: ${result}`);
  resultDisplay.textContent = result;
}
