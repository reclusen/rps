// global variables that keep track of the player score
let cpuScore = 0;
let playerScore = 0;

// this function relies on randomly generated integers to determine its choice
function getComputerChoice() {
    const randInt = Math.random();

    if (randInt >= 0.25 && randInt < 0.5) {
        return "rock"
    } else if (randInt >= 0.5 && randInt < 0.75) {
        return "paper"
    } else {
        return "scissors"
    }
}

// this function takes the input via the prompt function, with the assumption of valid input
function getHumanChoice() {
    const userPrompt = prompt("Rock, paper, or scissors?", "");
    
    return userPrompt.toLowerCase();
}

// this (naive-looking) function determines the outcome of a round, and increments the score of whoever wins
function playRound(playerChoice, cpuChoice) {
    if (cpuChoice == playerChoice) {
        console.log("<TIE>");
    } else if (cpuChoice == "rock") {
        if (playerChoice == "paper") {
            playerScore++;
        } else if (playerChoice == "scissors") {
            playerScore++;
        }
    } else if (cpuChoice == "paper") {
        if (playerChoice == "rock") {
            cpuScore++;
        } else if (playerChoice == "scissors") {
            playerScore++;
        }
    } else if (cpuChoice == "scissors") {
        if (playerChoice == "rock") {
            playerScore++;
        } else if (playerChoice == "paper") {
            cpuScore++;
        }
    }
}

// a function that runs the game a fixed number of times
function playRPS() {
    for (let i = 1; i <= 5; i++) {
        // grabs the values from the above functions as input constants
        // the function getHumanChoice() being in the loop forces the prompt, which allows other user valid input in next iteration
        const humanChoice = getHumanChoice();
        const cpuChoice = getComputerChoice();

        console.log(`round #${i}`);

        console.log(`cpu: ${cpuChoice} | player: ${humanChoice}`);
        playRound(humanChoice, cpuChoice);
        console.log(`SCORE [cpu: ${cpuScore} | player: ${playerScore}]`);
    }

    // outputs overall winner to console
    if (playerScore > cpuScore) {
        console.log("player wins!");
    } else if ((playerScore < cpuScore)) {
        console.log("cpu wins!");
    } else {
        console.log("draw!");
    }
}

// calls game function
playRPS();