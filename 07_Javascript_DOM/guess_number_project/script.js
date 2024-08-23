'use strict';
// TODO: resume @08 Manipulating CSS Styles

//* Getting the elements from our HTML
const checkBtn = document.querySelector('#checkBtn');
const againBtn = document.querySelector('#againBtn');
const guessNumberElement = document.querySelector('#guessNumber');
const scoreElement = document.querySelector('#score');
const highScoreElement = document.querySelector('#highscore');
const messageElement = document.querySelector('#message');
const body = document.querySelector('body');

const MIN = 1;
const MAX = 20;

let currentScore = 20;
let randomNumber = null;
let highScore = 0;
let guessNumber = null;

// Generate a random number between two numbers
const generateRandomNumber = (min, max) => {
	randomNumber = Math.round(Math.random() * (max - min) + min);
};

// Evaluates the game
const evaluateGame = () => {
	if (!guessNumberElement.value) {
		messageElement.textContent = '❗ No number entered!';
		return; // terminate rest of the function
	}

	// Getting guessed number
	guessNumber = Number(guessNumberElement.value);

	if (guessNumber === randomNumber) {
		updateOnWin();
	} else {
		updateOnLoss();
	}

	console.log(guessNumber, randomNumber);
};

const updateOnLoss = () => {
	if (guessNumber > randomNumber) {
		messageElement.textContent = '📈 Too high!';
	} else if (guessNumber < randomNumber) {
		messageElement.textContent = '📉 Too low!';
	}

	currentScore--;

	// Update the current score on the page
	scoreElement.textContent = currentScore;

	// If the user score reaches 0, show lose message
	if (currentScore == 0) {
		messageElement.textContent = '💥 You lose!';
		checkBtn.disabled = true;
		body.style.backgroundColor = '#CC3333';
	}
};

const updateOnWin = () => {
	if (currentScore > highScore) {
		highScore = currentScore;
		highScoreElement.textContent = highScore;
	}
	messageElement.textContent = '🎉 Correct number!';
	checkBtn.disabled = true;
	body.style.backgroundColor = '#006633';
};

// Restart the game
const resetGame = () => {
	generateRandomNumber(MIN, MAX);

	currentScore = 20;
	scoreElement.innerHTML = currentScore;
	guessNumber = null;

	guessNumberElement.value = '';
	body.style.backgroundColor = '#222';
	checkBtn.disabled = false;
};

// Button triggers
checkBtn.onclick = evaluateGame;
againBtn.onclick = resetGame;

// When the page is loaded, generate a random number between 1 and 20
window.onload = generateRandomNumber(MIN, MAX);
