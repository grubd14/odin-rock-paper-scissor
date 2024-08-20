//function to get random value from 0 to 2
//in int with long decimal value
//
let humanScore = 0;
let computerScore = 0;

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



//function to play the game 
function playRound(humanSelection, computerSelection) {
  if (humanSelection === "rock" && computerSelection === "scissor") {
    return "You win!";
  } else if(humanSelection === "scissor" && computerSelection === "paper") {
    return "You win!"; 
  } else if ( humanSelection === "paper" && computerSelection === "rock") {
    return "You win!";
  } else if (humanSelection === computerSelection) {
    return "tie" ;
  } else {
    return "You lose!"
  }
}

const humanSelection = humanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(humanSelection);
console.log(computerSelection);
