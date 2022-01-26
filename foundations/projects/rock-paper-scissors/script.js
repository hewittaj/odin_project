// This function creates a random computer play versus the user. 
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0){
        return "rock"
    }
    else if(randomNumber == 1){
        return "paper"
    }
    else if(randomNumber == 2){
        return "scissors"
    }
    else{
        return "an unexpected error occured"
    }
}

// This function emulates a game five round game of rock, paper, scissors and tells the user who won the most out of five.
function game(){
    let computerWins = 0;
    let playerWins = 0;
    let gameResult = "";
    let playerChoice = "";

    // Loops through five games and collects results into playerWins and computerWins.
    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Please enter 'rock', 'paper', or 'scissors' (without the quotes) for your choice.");
        gameResult = playRound(playerChoice, computerPlay());

        // Check who won the game and add to their score.
        if(gameResult.includes("win")){
            playerWins++;
        }
    
        if(gameResult.includes("lose")){
            computerWins++;
        }

        console.log(gameResult);

        
    }


    // This checks to see who had more wins.
    if(playerWins > computerWins){
        return `The player won with ${playerWins} wins.`
    }

    else if (playerWins < computerWins){
        return `The computer won with ${computerWins} wins.`
    }

    else{
        return "The player tied the computer!"
    }
}

// This function plays one round of a game of rock, paper, scissors.
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats rock!"
    }
    
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats paper!"
    }
    
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats scissors!"
    }

    else if(playerSelection == computerSelection){
        return "Tie!"
    }

    else{
        return `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!` 
    }

}

// This logs the result of a game of five.
console.log(game());