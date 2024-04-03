// initial variables and constants
let computerScore = 0

let playerScore = 0

let counter = 5

const array = ["rock", "paper", "scissors"];


// selects a random item from an array
function getComputerChoice(arr) {

    // get random index value
    let randomIndex = Math.floor(Math.random() * arr.length);
    
    // get random item
    let item = arr[randomIndex];
    return item;
}

// plays rock paper scissors
function rockPaperScissors(playerSelection, computerSelection) {

    // ensures case insensitivity
    playerSelection.toLowerCase();

    // opens empty variable
    let result;

    // if else determines the winner of the round
    if (computerSelection == "rock" && playerSelection == "rock") {
        result = "Tie, no winners!";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        result = "Winner, paper covers rock!";
        playerScore++;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        result = "Looser, rock smashes scissors!";
        computerScore++;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        result = "Looser, paper covers rock!";
        computerScore++;
    } else if (computerSelection == "paper" && playerSelection == "paper") {
        result = "Tie, no winners!";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        result = "Winner, scissors cut paper!";
        playerScore++;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        result = "Winner rock smashes scissors!";
        playerScore++;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        result = "Looser scissors cut paper!";
        computerScore++;
    } else if (computerSelection == "scissors" && playerSelection == "scissors") {
        result = "Tie, no winners!";
    } else {
        result = "wrong input"
    };

    // the winner is output the the screen
    alert(result);

    // the counter decreases by 1
    counter--;

    // the player is shown the score and the number of games left
    alert("The current score is Computer " + computerScore + " and Player " + playerScore + " there are " + counter + " games remaining");
};

// takes you through 5 rounds of the game above.
function playGame() {

    // initiating the for loop
    for (let i = 0; i < 5; i++) {

        //selecting the values for computer and player
        let computerSelection = getComputerChoice(array);
        let playerSelection = prompt("Rock, Paper, or Scissors?", '');

        // playing the round
        rockPaperScissors(playerSelection, computerSelection);
    };
}

// output
console.log(playGame())