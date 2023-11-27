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

function getPlayerSelection() {
    //create 'valid' and assign it 'false' boolean
    let isValid = false;
    let playerSelection;

    while (!isValid) {
        //get playerselection and normalize it
        playerSelection = prompt("Type rock, paper, or scissors: ");
        playerSelection = playerSelection.toLowerCase();

        //validate the selection
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection ==="scissors") {
            isValid = true;
        }
        
        if (!isValid)
            alert("Invalid selection \nMust be rock, paper, or scissors");        
    }
        
    //return selection
    return playerSelection;
}

function game() {
    //get player input
    //play five rounds
        //output message for each round
    //output overall winner
}