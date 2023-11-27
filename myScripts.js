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
    let totalPlayerWins = 0;
    let totalComputerWins = 0;
    //play five rounds
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);

        //output result for each round and update scores
        console.log(roundResult);
        if (roundResult.toLowerCase().includes("won"))
            totalPlayerWins++;
        else if(roundResult.toLowerCase().includes("lost"))
            totalComputerWins++
    }
      
    console.log("And the final result is...\n")
    if (totalPlayerWins > totalComputerWins)
        console.log("You won!")
    else if (totalPlayerWins < totalComputerWins)
        console.log("You lost...")
    else
        console.log("It's a tie!")
}