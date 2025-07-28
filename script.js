// Initialize human and computer score variables in global scope
let humanScore = 0;
let computerScore = 0;

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
  let choice = prompt("Choose: rock, paper, or scissors");
  return choice.toLowerCase();
}

// Function to tally and display the total score
function tallyScore() {
  console.log("=== TOTAL SCORE ===");
  console.log("Your Score: " + humanScore + " - Computer Score: " + computerScore);
  
  if (humanScore > computerScore) {
    console.log("🎉 You're winning the overall game!");
  } else if (computerScore > humanScore) {
    console.log("😔 Computer is winning the overall game!");
  } else {
    console.log("🤝 It's a tie overall!");
  }
  console.log("==================");
}

function playGame() {
  // define human and computer selection variables which call the getHuman and getComputerChoice functions, so that the variables can be used as arguments in a playRound() function
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  // Play a round logic
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(
        "You chose: " + humanChoice + " - " + "Computer chose " + computerChoice
      );
      console.log("It's a tie!");
      return "tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(
        "You chose: " +
          humanChoice +
          " - " +
          "Computer chose: " +
          computerChoice
      );
      console.log("You Win!");
      humanScore++;
      return "human";
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
      humanScore++;
      return "human";
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
      humanScore++;
      return "human";
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
      computerScore++;
      return "computer";
    }
  }

  playRound(humanSelection, computerSelection);
  
  // Call tallyScore function to show updated total score
  tallyScore();
}

// Play multiple games
playGame();
playGame();
playGame();
playGame();
playGame();