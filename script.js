//function to get random value from 0 to 2
//in int with long decimal value

function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 3);
  if (randomValue === 0 ) {
    return "rock";
  } else if (randomValue === 1 ) {
    return "paper";
  } else {
    return "scissors";
  }
}

//function to get human choice 
function humanChoice() {
  let userInput = prompt("Your choice!: ");
  console.log(userInput);
}

console.log(humanChoice());
