// How to accept user input
// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

/*
let propmtUsername;
propmtUsername = window.prompt("What's your username?");
console.log(propmtUsername);
*/

let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
};
