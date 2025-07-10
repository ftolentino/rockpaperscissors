// Create functions to get Computer and Human choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  // Define a variable in global scope to capture the human input choice, using Javascript's built in method prompt()
  let choice = prompt("Choose: rock, paper, or scissors");
  return choice.toLowerCase();
}

// define human and computer selection variables which call the getHuman and getComputerChoice functions, so that the variables can be used as arguments in a playRound() function
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
// Initialize human and computer score variables, in global scope
let humanScore = 0;
let computerScore = 0;

function playGame() {
  // Play a round logic
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(
        "You chose: " + humanChoice + " - " + "Computer chose " + computerChoice
      );
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(
        "You chose: " +
          humanChoice +
          " - " +
          "Computer chose: " +
          computerChoice
      );
      console.log("You Win!");
      return humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(
        "You chose: " +
          humanChoice +
          " - " +
          "Computer chose " +
          " - " +
          computerChoice
      );
      console.log("You Win!");
      return humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(
        "You chose: " +
          humanChoice +
          " - " +
          "Computer chose " +
          " - " +
          computerChoice
      );
      console.log("You Win!");
      return humanScore++;
    } else {
      console.log(
        "You chose: " +
          humanChoice +
          " - " +
          "Computer chose " +
          " - " +
          computerChoice
      );
      console.log("You Lose!");
      return computerScore++;
    }
  }

  let play = playRound(humanSelection, computerSelection);

  console.log(
    "Your Score " + humanScore + " - " + "Computer Score " + computerScore
  );

  return play;
}

playGame();
