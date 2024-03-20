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

function playRound(computerSelection) {
    let answer = document.getElementById('rock');
    console.log(answer);
    let y;
    switch(answer) {
        case "rock":
            console.log("You picked rock.");
            y = 1;
            break;
        case "paper":
            console.log("You picked paper.");
            y = 2;
            break;
        case "scissors":
            console.log("You picked scissors.");
            y = 3;
            break;
        default:
            console.log("Incorrect input.");
            y = 0;
    }
    let comp = computerSelection;
    // 1. rock 2. paper 3. scissors
    if (comp === 1 && y === 1 ) {
        return ("You both picked rock. It is a tie.");
    } else if (comp === 1 && y == 2) {
        return ("You win. Paper defeats rock");
    } else if (comp === 1 && y === 3) {
        return ("You lose. Rock defeats scissors");
    } else if (comp === 2 && y === 1) {
        return ("You lose. Paper defeats rock");
    } else if (comp === 2 && y === 2) {
        return ("You both picked paper. It is a tie.");
    } else if (comp === 2 && y === 3) {
        return ("You win. Scissors defeats paper");
    } else if (comp === 3 && y === 1) {
        return ("You win. Rock defeats scissors");
    } else if (comp === 3 && y === 2) {
        return ("You lose. Scissors defeats paper");
    } else if (comp === 3 && y === 3) {
        return ("You both picked scissors. It is a tie.");
    } else {
        return ("Invalid input. Please enter either rock, paper, or scissors.");
    }
}


const computerSelection = getComputerChoice();
console.log(playRound(computerSelection));
computerPick(computerSelection);