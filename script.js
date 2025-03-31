const choices = document.querySelectorAll("button");
const roundStatus = document.querySelector(".status-box");
const scoreBoard = document.querySelector(".scoreboard");
const start = document.querySelector(".start");

let playerScore = document.querySelector(".player .score");
let cpuScore = document.querySelector(".cpu .score");

const rounds = document.querySelector(".round-count");
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
            roundCount++;
        } else if (playerChoice == "scissors") {
            playerScore.innerText++;
            roundCount++;
        }
    } else if (cpuChoice == "paper") {
        if (playerChoice == "rock") {
            cpuScore.innerText++;
            roundCount++;
        } else if (playerChoice == "scissors") {
            playerScore++;
            roundCount++;
        }
    } else if (cpuChoice == "scissors") {
        if (playerChoice == "rock") {
            playerScore.innerText++;
            roundCount++;
        } else if (playerChoice == "paper") {
            cpuScore.innerText++;
            roundCount++;
        }
    }
}

function playRPS() {
    choices.forEach((choice) => {
        choice.addEventListener("click", (e) => {
            const playerChoice = e.currentTarget.className;
            const cpuChoice = getComputerChoice();
            
            const p = document.createElement("p");

            playRound(playerChoice, cpuChoice);

            p.innerHTML = `Player chooses <span>${playerChoice}</span>. CPU chooses <span>${cpuChoice}</span>.`;
            roundStatus.append(p);

            let span = p.firstElementChild;

            console.log(span.firstChild.textContent);

            switch (span.firstChild.textContent) {
                case "rock":
                    span.style.color = "#ff0000";
                    break;
                case "paper":
                    span.style.color = "#00ff00";
                    break;
                case "scissors":
                    span.style.color = "#0000ff";
                    break;
            }

            span = p.lastElementChild;

            console.log(span.firstChild.textContent);

            switch (span.firstChild.textContent) {
                case "rock":
                    span.style.color = "#ff0000";
                    break;
                case "paper":
                    span.style.color = "#00ff00";
                    break;
                case "scissors":
                    span.style.color = "#0000ff";
                    break;
            }

            console.log(`cpu: ${cpuChoice} | player: ${playerChoice}`);
            console.log(`SCORE [cpu: ${cpuScore.innerText} | player: ${playerScore.innerText}], ${roundCount}`);

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

                choices.forEach((choice) => { choice.toggleAttribute("disabled"); });
                start.toggleAttribute("disabled");
            }
        });
    })
}

//starts round
start.addEventListener("click", (e) => {
    roundStatus.innerText = "Round start."
    start.toggleAttribute("disabled");
    playRPS();
});