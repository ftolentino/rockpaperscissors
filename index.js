function getComputerChoice() {
  const choiceArr = ["rock", "paper", "scissors"];

  let randomChoice = Math.floor(Math.random() * choiceArr.length);
  console.log(randomChoice);
}

getComputerChoice();
