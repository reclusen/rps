const choices = document.querySelectorAll("button");
const roundStatus = document.querySelector(".status-box");
const scoreBoard = document.querySelector(".scoreboard");
const start = document.querySelector(".start");

let playerScore = document.querySelector(".player .score");
let cpuScore = document.querySelector(".cpu .score");

const rounds = document.getElementsByClassName("round-count").item(0);
// global variables that keep track of the player score
let roundCount = 0;

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

// this (naive-looking) function determines the outcome of a round, and increments the score of whoever wins
function playRound(playerChoice, cpuChoice) {
    if (cpuChoice == playerChoice) {
        console.log("<TIE>");
    } else if (cpuChoice == "rock") {
        if (playerChoice == "paper") {
            playerScore.innerText++;
        } else if (playerChoice == "scissors") {
            playerScore.innerText++;
        }
    } else if (cpuChoice == "paper") {
        if (playerChoice == "rock") {
            cpuScore.innerText++;
        } else if (playerChoice == "scissors") {
            playerScore++;
        }
    } else if (cpuChoice == "scissors") {
        if (playerChoice == "rock") {
            playerScore.innerText++;
        } else if (playerChoice == "paper") {
            cpuScore.innerText++;
        }
    }

    roundCount++;
}

function playRPS() {
    choices.forEach((choice) => {
        choice.addEventListener("click", (e) => {
            const playerChoice = e.currentTarget.className;
            const cpuChoice = getComputerChoice();
            
            const p = document.createElement("p");

            playRound(playerChoice, cpuChoice);

            p.innerText = `Player chooses ${playerChoice}. CPU chooses ${cpuChoice}.`;
            roundStatus.append(p);

            console.log(`cpu: ${cpuChoice} | player: ${playerChoice}`);
            console.log(`SCORE [cpu: ${cpuScore.innerText} | player: ${playerScore.innerText}]`);

            if (roundCount == rounds.value) {
                if (playerScore.innerText > cpuScore.innerText) {
                    console.log("player wins!");
                    p.innerText = "Player wins!";
                } else if ((playerScore.innerText < cpuScore.innerText)) {
                    console.log("cpu wins!");
                    p.innerText = "CPU wins!";
                } else {
                    console.log("draw!");
                    p.innerText = "Draw!";
                }

                start.toggleAttribute("disabled");
                start.addEventListener("click", (e) => {
                    reset();
                });
            }
        });
    })
}

//starts round
start.addEventListener("click", (e) => {
    roundStatus.innerText = "Round start."
    start.toggleAttribute("disabled");
    start.innerText = "Reset";
    playRPS();
});

//resets score values
function reset() {
    cpuScore.innerText = 0;
    playerScore.innerText = 0;
    roundCount = 0;
    start.innerText = "Start";

    console.log(`from reset(): cpu: ${cpuScore.innerText} | player: ${playerScore.innerText}`);

    roundStatus.children.item(0).remove();
}