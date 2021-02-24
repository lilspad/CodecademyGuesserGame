let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generating a random target number
const generateTarget = () => {
    let target = Math.floor(Math.random() * 10);
    return target;
};

// the next 2 functions check the distances between the two guesses and the target, and compares them. 
// if human guess is closer to the target (smaller distance) or if game ties (same distance), the human wins. 
const getAbsoluteDistance = (x, y) => Math.abs(x - y);

const compareGuesses = (humanGuessInput, computerGuess, target) => {
    if (getAbsoluteDistance(humanGuessInput, target) < getAbsoluteDistance(computerGuess, target) || 
        getAbsoluteDistance(humanGuessInput, target) === getAbsoluteDistance(computerGuess, target)) {
        return true;
    } else {
        return false;
    }
};

// adding 1 to score variable corresponding to the winner
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};

//adding 1 to the round variable after each play through 
function advanceRound() {
    currentRoundNumber += 1;
};
