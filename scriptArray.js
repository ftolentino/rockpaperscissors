function getComputerChoice() {
  const choiceArr = ["rock", "paper", "scissors"];

  let randomChoice = Math.floor(Math.random() * choiceArr.length);
  console.log(choiceArr[randomChoice]);
}

let choice = prompt("What is your choice?").toLocaleLowerCase();

function getHumanChoice() {
  console.log("Player choice: ", choice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
  // player and computer score
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanScore, computerScore) {
    if (humanSelection === computerSelection) {
      console.log("It's a tie");
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
      console.log("You win!");
      humanScore++;
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
      console.log("You win!");
      humanScore++;
    } else if (humanSelection === "paper" && computerSelection === "rock") {
      console.log("You win!");
      humanScore++;
    } else {
      console.log("You lose!");
      computerScore++;
    }
    console.log("Player score: ", humanScore);
    console.log("Computer score: ", computerScore);
  }

  playRound(humanScore, computerScore);
}

playGame();
playGame();
playGame();
playGame();
playGame();