let userScore = 0;
let computerScore = 0;

// Adds event listeners to buttons on page
function addListenersToButtons(){
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
    button.addEventListener('click', () => {playRound(button.id)});
    })
}

// Adds a div for results
function addResultsDiv(resultOfGame){
    // Create variable to store any old results
    const results = document.getElementsByClassName('results');

    // If results already displaying on the page, remove them.
    if(results.length > 0){
        results[0].parentNode.removeChild(results[0]);
    }

    // Construct a div to be added to the 
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.classList.add('results');
    div.textContent = resultOfGame;
    body.appendChild(div);
}

// This function calculates the running score and updates the html file accordingly
function calculateScore(playerWon){
    // Create a variable to store any old score
    const body = document.querySelector('body');
    const score = document.getElementsByClassName('score');

    // If old score already displaying on the page, remove it and replace
    if(score.length > 0){
        score[0].parentNode.removeChild(score[0]);
    }

    // Create a div to hold score
    const div = document.createElement('div');
    div.classList.add('score');

    // If the player won, add a point to their score
    if(playerWon == true){
        div.textContent = `Your points: ${userScore} Computer's points: ${computerScore}`;
    }
    
    // If computer won
    else if(playerWon == false){
        div.textContent = `Your points: ${userScore} Computer's points: ${computerScore}`
    }


    // Check to see if either score is 5 and reset
    if(userScore == 5){
        // Alert who won
        alert("You won!");
        userScore = 0;
        computerScore = 0;
    }

    if(computerScore == 5){
        // Alert who won
        alert("The computer won! :(");
        computerScore = 0;
        userScore = 0;
    }

    body.appendChild(div);
}

// This function creates a random computer play versus the user. 
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0){
        return "rock";
    }
    else if(randomNumber == 1){
        return "paper";
    }
    else if(randomNumber == 2){
        return "scissors";
    }
    else{
        return "an unexpected error occured";
    }
}

// This function emulates a game five round game of rock, paper, scissors and tells the user who won the most out of five.
function game(){
    let computerWins = 0;
    let playerWins = 0;
    let gameResult = "";
    let playerChoice = "";

    playerChoice = prompt("Please enter 'rock', 'paper', or 'scissors' (without the quotes) for your choice.");
    gameResult = playRound(playerChoice, computerPlay());

    // Check who won the game and add to their score.
    if(gameResult.includes("win")){
        playerWins++;
    }

    if(gameResult.includes("lose")){
        computerWins++;
    } 

    // This checks to see who had more wins.
    if(playerWins > computerWins){
        return `The player won with ${playerWins} wins.`;
    }

    else if (playerWins < computerWins){
        return `The computer won with ${computerWins} wins.`;
    }

    else{
        return "The player tied the computer!";
    }
}

// This function plays one round of a game of rock, paper, scissors.
function playRound(playerSelection){
    let text = "";
    let computerSelection = computerPlay();
    let playerWon = false;
    
    if(playerSelection == "rock" && computerSelection == "paper"){
        text = "You lose! Paper beats rock!";
        playerWon = false;
        computerScore++;
    }
    
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        text = "You lose! Scissors beats paper!";
        playerWon = false;
        computerScore++;
    }
    
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        text = "You lose! Rock beats scissors!";
        playerWon = false;
        computerScore++;
    }

    else if(playerSelection == computerSelection){
        text = "Tie!";
    }

    else{
        text = `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`;
        playerWon = true;
        userScore++;
    }

    // Add text for who won
    addResultsDiv(text);
    // Calculate score and update screen
    calculateScore(playerWon);
}

// Adds listeners to buttons
addListenersToButtons();