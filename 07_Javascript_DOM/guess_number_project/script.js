'use strict';

// TODO: resume @12 PROJECT #2 Modal Window

// Evaluates the game
const evaluateGame = () => {
	// When there is no input, show warning message and terminate script
	if (!guessNumberElement.value) {
		// messageElement.textContent = '❗ No number entered!';
		displayMessage('❗ No number entered!');
		return; // terminate rest of the function
	}

	// Getting guessed number
	guessNumber = Number(guessNumberElement.value);

	// If the user guesses the correct number
	if (guessNumber === randomNumber) {
		updateOnWin();
	} else {
		updateOnLoss(); // incorrect guess
	}

	console.log(guessNumber, randomNumber);
};

// When the guess is right
const updateOnWin = () => {
	if (currentScore > highScore) {
		highScore = currentScore;
		highScoreElement.textContent = highScore;
	}

	randomNumberElement.textContent = randomNumber;
	randomNumberElement.style.width = '30rem';

	// messageElement.textContent = '🎉 Correct number!';
	displayMessage('🎉 Correct number!');
	checkBtn.disabled = true;
	body.style.backgroundColor = '#60b347'; // background color
};

// When the guess is wrong
const updateOnLoss = () => {
	// Shows message if the guess is too low or too high
	// messageElement.textContent =
	// 	guessNumber > randomNumber ? '📈 Too high!' : '📉 Too low!';

	displayMessage(guessNumber > randomNumber ? '📈 Too high!' : '📉 Too low!');

	currentScore--;

	// Update the current score on the page
	scoreElement.textContent = currentScore;

	// If the user score reaches 0, show lose message
	if (currentScore == 0) {
		// Show the random number after losing
		randomNumberElement.textContent = randomNumber;
		randomNumberElement.style.width = '30rem';

		// messageElement.textContent = '💥 You lose!';
		displayMessage('💥 You lose!');
		checkBtn.disabled = true;
		body.style.backgroundColor = '#CC3333';
	}
};

// Restart the game
const resetGame = () => {
	randomNumber = generateRandomNumber(MIN, MAX); // generates new random number

	currentScore = 20; // resetting the score
	scoreElement.innerHTML = currentScore;

	guessNumber = null;
	guessNumberElement.value = '';

	// messageElement.textContent = 'Start guessing...';
	displayMessage('Start guessing...');
	body.style.backgroundColor = '#222';

	randomNumberElement.textContent = '?';
	randomNumberElement.style.width = '15rem';

	checkBtn.disabled = false; // enable the checkBtn
};

// Generate a random number between two numbers
const generateRandomNumber = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

const displayMessage = (message) => {
	messageElement.textContent = message;
};

//* Getting the elements from our HTML
const checkBtn = document.querySelector('#checkBtn');
const againBtn = document.querySelector('#againBtn');
const randomNumberElement = document.querySelector('#randomNumber');
const guessNumberElement = document.querySelector('#guessNumber');
const scoreElement = document.querySelector('#score');
const highScoreElement = document.querySelector('#highscore');
const messageElement = document.querySelector('#message');
const body = document.querySelector('body');

const MIN = 1;
const MAX = 20;

let currentScore = 20;
let randomNumber = generateRandomNumber(MIN, MAX);
let highScore = 0;
let guessNumber = null;

// Button triggers
checkBtn.onclick = evaluateGame;
againBtn.onclick = resetGame;
