//function to get random value freturnm 0 to 2
//in int with long decimal value
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
function humanChoice(userInput) {
  return userInput.toLowerCase();
}

//scores
let  humanScore = 0;
let computerScore = 0;


//function to play round of games
function playRound(humanSelection, computerSelection) {

  if ((humanSelection === "rock" && computerSelection === "scissor") || (humanSelection === "scissor" && computerSelection === "paper") || ( humanSelection === "paper" && computerSelection === "rock")){
    humanScore++;
    return "You win!";
  } else if (humanSelection === computerSelection) {
    return "It's Tie!";
  } else {
    computerScore++;
    return "You lose!"
  }
}


//displaying score using DOM
const displayResult = document.querySelector(".results")
const scoreDisplay = document.createElement("div");
const winnerDisplay = document.createElement("div");
scoreDisplay.classList.add("score-display");
winnerDisplay.classList.add("winner-diplay");
displayResult.appendChild(scoreDisplay);
displayResult.appendChild(winnerDisplay);


//check for winner based on the score
function checkWinner() {
  if (humanScore === 5 ) {
    winnerDisplay.textContent = "Congratulations You have won the round!!!";
    resetGame()
  } else if(computerScore === 5) {
    winnerDisplay.textContent = "Sad Computer wins!";
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScoreDisplay();
  updateScoreDisplay();
}

//updating scores on the DOM
function updateScoreDisplay() {
  const displayShow = `Human Score: ${humanScore}   Computer Score: ${computerScore}`;
  scoreDisplay.innerHTML = displayShow;
}


// buttons
const rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click", () => {
  console.log(playRound(humanChoice("rock"), getComputerChoice()));
  updateScoreDisplay();
  checkWinner();
});

const scissorButton = document.querySelector("#scissor-btn");
scissorButton.addEventListener("click", () => {
  console.log(playRound(humanChoice("scissor"), getComputerChoice()));
  updateScoreDisplay();
  checkWinner();
})

const paperButton = document.querySelector("#paper-btn");
paperButton.addEventListener("click", () => {
  console.log(playRound(humanChoice("paper"), getComputerChoice()));
  updateScoreDisplay();
  checkWinner();
});

