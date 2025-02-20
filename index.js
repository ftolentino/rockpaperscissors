function getComputerChoice() {
  const choiceArr = ["rock", "paper", "scissors"];

  let randomChoice = Math.floor(Math.random() * choiceArr.length);
  console.log(choiceArr[randomChoice]);
}

getComputerChoice();

let choice = prompt("What is your choice?");

function getHumanChoice() {
  console.log("Player choice: ", choice);
}

getComputerChoice();