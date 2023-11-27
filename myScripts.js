function getComputerChoice() {
    //get random number
    let randNum = Math.random();
    randNum = (randNum * 10) % 3;
    randNum = Math.round(randNum);
    let computerSelection = "";

    //select the corresponding string for the number
        //0-rock, 1-paper, 2-scissors
    if (randNum === 0) {
        computerSelection = "rock";
    } else if (randNum === 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }

    //return selection
    return computerSelection
}

function playRound(playerSelection, computerSelection) {
    //compare length of string, whichever is greater wins
    if (playerSelection > computerSelection) {
        return "You won! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
    } else if (playerSelection < computerSelection) {
        return "You lost! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection;
    } else {
        return "It's a tie!"
        }
}

function game() {
    //get user input
    //play five rounds
        //output message for each round
    //output overall winner
}