//function to get random value freturnm 0 to 2
//in int with long decimal value
//
function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 3);
  if (randomValue === 0 ) {
    return "rock";
  } else if (randomValue === 1 ) {
    return "paper";
  } else {
    return "scissor";
  }
}

//function to get human choice 
function humanChoice() {
  let userInput = prompt("Your choice!: ");
  return userInput.toLowerCase();
}


//function to play game 5 rounds
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    if ((humanSelection === "rock" && computerSelection === "scissor") || (humanSelection === "scissor" && computerSelection === "paper") || ( humanSelection === "paper" && computerSelection === "rock")){
       humanScore++;
      return "You win!";
    }else if (humanSelection === computerSelection) {
      return "tie";
    } else {
       computerScore++;
      return "You lose!"
    }
  }

  for (i = 0; i < 5; i++) {
    playRound(humanChoice(), getComputerChoice());
  }

  console.log(humanScore);
  console.log(computerScore);
  
  if (humanScore > computerScore) {
    return "You win!";
  } else if(computerScore > humanScore) {
    return "Computer win!";
  } else {
    return "Draw!";
  }

}

console.log(playGame());
