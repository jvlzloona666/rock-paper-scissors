function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return 1;
    } else if (x === 2) {
        return 2;
    } else {
        return 3;
    }
}

function getPlayerChoice(callback) {
    let isRock = document.getElementById('rock');
    isRock.onclick = function() {
        callback(1);
    }

    let isPaper = document.getElementById('paper');
    isPaper.onclick = function() {
        callback(2);
    }

    let isScissor = document.getElementById('scissors');
    isScissor.onclick = function() {
        callback(3);
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) {
    let answer = playerSelection;
    let comp = computerSelection;
  
    
    switch(answer) {
        case 1:
            console.log("You picked rock.");
            y = 1;
            break;
        case 2:
            console.log("You picked paper.");
            y = 2;
            break;
        case 3:
            console.log("You picked scissors.");
            y = 3;
            break;
        default:
            console.log("Incorrect input.");
            y = 0;
    }
    let headerMessage = document.getElementById('header'); 
  
    // 1. rock 2. paper 3. scissors
    if (comp === 1 && y === 1 ) {
        headerMessage.innerHTML = "You both picked rock. It is a tie.";
    } else if (comp === 1 && y == 2) {
        playerScore++;
        headerMessage.innerHTML = "You win. Paper defeats rock";
   
    } else if (comp === 1 && y === 3) {
        computerScore++;
        headerMessage.innerHTML =  "You lose. Rock defeats scissors";
   
    } else if (comp === 2 && y === 1) {
        computerScore++;
        headerMessage.innerHTML = "You lose. Paper defeats rock";
   
    } else if (comp === 2 && y === 2) {
        headerMessage.innerHTML = "You both picked paper. It is a tie.";
   
    } else if (comp === 2 && y === 3) {
        playerScore++;
        headerMessage.innerHTML =  "You win. Scissors defeats paper";
        
   
    } else if (comp === 3 && y === 1) {
        playerScore++;
        headerMessage.innerHTML = "You win. Rock defeats scissors";
   
    } else if (comp === 3 && y === 2) {
        computerScore++;
        headerMessage.innerHTML = "You lose. Scissors defeats paper";
   
    } else if (comp === 3 && y === 3) {
        headerMessage.innerHTML = "You both picked scissors. It is a tie.";
   
    } else {
        headerMessage.innerHTML = "Invalid input. Please enter either rock, paper, or scissors.";
    }

    let scoreElement = document.getElementById('score'); 
    scoreElement.innerHTML = playerScore;

    let compScoreElement = document.getElementById('com-score'); 
    compScoreElement.innerHTML = computerScore;

}

function computerPick(pick) {
    let x = pick;
    if (x === 1) {
        console.log("Computer picked rock.");
    } else if (x === 2) {
        console.log("Computer picked paper.");
    } else {
        console.log("Computer picked scissors.");
    }
}


function main() {
    getPlayerChoice(function(player) {
        let computer = getComputerChoice();
        computerPick(computer);
        playRound(computer, player);
    });
}



main();