'use strict';
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const personalSolution = () => {
	const text = document.querySelector('textarea').value;

	// Splitting each word line by line and removing whitespaces
	const words = text.split('\n');

	// Iterating through the string array
	for (let i = 0; i < words.length; i++) {
		// Removing whitespace, making all letters lowercase, and splitting
		// into an array of 2 words
		let wordFormatted = words[i]
			.replace(/\s/g, '')
			.toLowerCase()
			.split('_');
		// Making the first character in the second word uppercase
		wordFormatted[1] =
			wordFormatted[1][0].toUpperCase() + wordFormatted[1].slice(1);
		// Logging the word
		console.log(
			wordFormatted.join('').padEnd(20, ' ') + '✅'.repeat(i + 1)
		);
	}
};

const chapterSolution = () => {
	const text = document.querySelector('textarea').value;
	const rows = text.split('\n');

	for (const [i, row] of rows.entries()) {
		const [first, second] = row.toLowerCase().trim().split('_');
		// console.log(row, first, second);
		const output =
			`${first}${second.replace(
				second[0],
				second[0].toUpperCase()
			)}`.padEnd(20) + '✅'.repeat(i + 1);
		console.log(output);
	}
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', personalSolution);
document.querySelector('button').addEventListener('click', chapterSolution);

/* underscore_case -> underscoreCase
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/
