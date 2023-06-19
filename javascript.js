let randomNumber = function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(value) {
    if (value === 0) {
        return "rock";
    } else if (value === 1) {
        return "paper";
    } else if (value === 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return 1;
    } else {
        return 2;
    }
}

function roundResult(player, computer) {
    document.querySelector("#hands").innerText = `Player ${player} vs Computer ${computer}`;
    const result = playRound(player, computer)
    if (result === 0) {
        document.querySelector("#result").innerText = "It's a draw!";
    } else if (result === 1) {
        document.querySelector("#result").innerText = "You win!";
    } else {
        document.querySelector("#result").innerText = "You lose!";
    }
    return result;
}

function game() {
    let player;
    let playerScore = 0;
    let computerScore = 0
    document.querySelector("#player-score").innerText=`${playerScore}`;
    document.querySelector("#computer-score").innerText=`${computerScore}`;
    document.querySelector("#validate").disabled = true;

    document.querySelector("#validate").addEventListener("click", () => {
        let computer = numberToChoice(randomNumber());

        const res = roundResult(player, computer);
        if (res === 1) {
            playerScore++;
        } else if(res === 2) {
            computerScore++;
        }

        document.querySelector("#player-score").innerText=`${playerScore}`;
        document.querySelector("#computer-score").innerText=`${computerScore}`;
    });
    document.querySelector("#player_input").addEventListener("change", e => {
        player = parseInt(e.target.value, 10);
        if (isNaN(player)) {
            document.querySelector("#validate").disabled = true;
        } else {
            player = numberToChoice(player);
            document.querySelector("#validate").disabled = false;
        }
    });
}

addEventListener("DOMContentLoaded", () => game());