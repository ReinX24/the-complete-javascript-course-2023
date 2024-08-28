'use strict';

class PigGame {
	constructor() {
		this.p1Section = document.querySelector('.player--0');
		this.p2Section = document.querySelector('.player--1');

		this.p1TotalScoreElement = document.querySelector('#score--0');
		this.p2TotalScoreElement = document.querySelector('#score--1');

		this.p1CurrentScoreElement = document.querySelector('#current--0');
		this.p2CurrentScoreElement = document.querySelector('#current--1');

		this.rollDiceBtn = document.querySelector('.btn--roll');
		this.holdScoreBtn = document.querySelector('.btn--hold');
		this.newGameBtn = document.querySelector('.btn--new');

		this.diceImg = document.querySelector('.dice');

		this.winnerModal = new WinnerModal();

		this.currentScore = 0;
		this.randomDiceNumber = 0;
	}

	startGame() {
		this.p1TotalScoreElement.innerText = 0;
		this.p2TotalScoreElement.innerText = 0;

		this.p1CurrentScoreElement.innerText = 0;
		this.p2CurrentScoreElement.innerText = 0;

		// Adding event listeners
		this.rollDiceBtn.addEventListener('click', () => {
			this.generateRandomDice();
			this.addToCurrentScore();
		});

		this.holdScoreBtn.addEventListener('click', () => {
			this.holdCurrentScore();
		});

		this.newGameBtn.addEventListener('click', () => {
			this.newGame();
		});
	}

	newGame() {
		// Re-enable roll dice and hold buttons
		this.rollDiceBtn.disabled = false;
		this.holdScoreBtn.disabled = false;
		// Reset total scores
		this.p1TotalScoreElement.innerText = 0;
		this.p2TotalScoreElement.innerText = 0;
		// Reset current scores
		this.currentScore = 0;
		this.p1CurrentScoreElement.innerText = 0;
		this.p2CurrentScoreElement.innerText = 0;
		// Start back to player 1
		this.p1Section.classList.add('player--active');
		this.p2Section.classList.remove('player--active');
		// Set back dice to 1
		this.diceImg.src = 'dice-1.png';
	}

	generateRandomDice() {
		// Generating a random number between 1 and 6 (inclusive)
		const randomDice = Math.round(Math.random() * (6 - 1)) + 1;
		this.randomDiceNumber = randomDice;
		this.diceImg.src = `dice-${randomDice}.png`;
	}

	addToCurrentScore() {
		// Reset score to 0 and go to the next player if dice is 1
		if (this.randomDiceNumber == 1) {
			this.currentScore = 0;
			this.updateCurrentScore();
			this.goToNextPlayer();
		} else {
			// Add dice number to current score if not equal to 1
			this.currentScore += this.randomDiceNumber;
			this.updateCurrentScore();
		}
	}

	updateCurrentScore() {
		if (this.p1Section.classList.contains('player--active')) {
			this.p1CurrentScoreElement.innerText = this.currentScore;
		} else {
			this.p2CurrentScoreElement.innerText = this.currentScore;
		}
	}

	updateOverallScore() {
		if (this.p1Section.classList.contains('player--active')) {
			this.p1TotalScoreElement.innerText =
				Number(this.p1TotalScoreElement.innerText) + this.currentScore;
		} else {
			this.p2TotalScoreElement.innerText =
				Number(this.p2TotalScoreElement.innerText) + this.currentScore;
		}
	}

	goToNextPlayer() {
		if (this.p1Section.classList.contains('player--active')) {
			this.p1Section.classList.remove('player--active');
			this.p2Section.classList.add('player--active');
		} else {
			this.p1Section.classList.add('player--active');
			this.p2Section.classList.remove('player--active');
		}
	}

	holdCurrentScore() {
		this.updateOverallScore();
		this.currentScore = 0; // reset score to 0
		this.updateCurrentScore();
		this.goToNextPlayer();
		this.checkGameWinner();
	}

	checkGameWinner() {
		if (Number(this.p1TotalScoreElement.innerText) >= 50) {
			this.winnerModal.showModal('Player 1 Wins');
			this.rollDiceBtn.disabled = true;
			this.holdScoreBtn.disabled = true;
		} else if (Number(this.p2TotalScoreElement.innerText) >= 50) {
			this.winnerModal.showModal('Player 2 Wins');
			this.rollDiceBtn.disabled = true;
			this.holdScoreBtn.disabled = true;
		}
	}
}

class WinnerModal {
	constructor() {
		this.modalElement = document.querySelector('.modal');
		this.overlayElement = document.querySelector('.overlay');
		this.closeBtn = document.querySelector('.close-modal');
		this.winnerMessage = document.querySelector('.winner-message');

		this.closeBtn.addEventListener('click', () => {
			this.hideModal();
		});

		this.overlayElement.addEventListener('click', () => {
			this.hideModal();
		});

		document.addEventListener('keydown', (event) => {
			if (event.code === 'Escape') {
				this.hideModal();
			}
		});
	}

	showModal(gameWinner) {
		this.winnerMessage.innerText = gameWinner;
		this.modalElement.classList.remove('hidden');
		this.overlayElement.classList.remove('hidden');
	}

	hideModal() {
		this.modalElement.classList.add('hidden');
		this.overlayElement.classList.add('hidden');
	}
}

const pigGame = new PigGame();
pigGame.startGame();
