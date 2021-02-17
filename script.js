let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let target = Math.floor(Math.random() * 9);
    return target;
};

const getAbsoluteDistance = (x, y) => Math.abs(x - y);

const compareGuesses = (humanGuessInput, computerGuess, target) => {
    if (getAbsoluteDistance(humanGuessInput, target) < getAbsoluteDistance(computerGuess, target) || getAbsoluteDistance(humanGuessInput, target) === getAbsoluteDistance(computerGuess, target)) {
        return true;
    } else {
        return false;
    }
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};

function advanceRound() {
    currentRoundNumber += 1;
};