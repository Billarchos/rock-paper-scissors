
let randomNumber = function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}



function getComputerChoice(value) {
    if (value === 0) {
        return "rock";
    } else if (value === 1) {
        return "paper";
    } else if (value ===2) {
        return "scissors";
    }
}


let computer = getComputerChoice(randomNumber());

let player = prompt("Choose rock, paper or scissors:");



let winner = function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock" ||
      playerSelection === "paper" && computerSelection === "paper" ||
      playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a draw";
      } else if (playerSelection === "rock" && computerSelection === "scissors" ||
                 playerSelection === "paper" && computerSelection === "rock"  ||
                 playerSelection === "scissors" && computerSelection === "paper") {
                    return "You win!";
                 } else {
                    return "You lose!";
                 }
      
} 

console.log(winner(player,computer));

function game() {
    

}

