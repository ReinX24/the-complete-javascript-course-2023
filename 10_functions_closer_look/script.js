'use script';

// TODO: resume @1:15 (07 Functions Returning Functions)
const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

/*
const oneWord = function (str) {
	return str.replaceAll(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
	const [firstWord, ...others] = str.split(' ');
	return [firstWord.toUpperCase(), ...others].join(' ');
};

// Higher-order function, takes in a function as a parameter
const transformer = function (str, fn) {
	console.log(`Original string: ${str}`);
	console.log(`Transformed string: ${fn(str)}`);

	console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
	console.log('High five!');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*

const flight = 'LH234';
const jonas = {
	name: 'Jonas Schmedtmann',
	passport: 242858937,
};

const checkIn = function (flightNum, passenger) {
	flightNum = 'Lh999';
	passenger.name = 'Mr. ' + passenger.name;

	if (passenger.passport == 242858937) {
		alert('Check in');
	} else {
		alert('Wrong passport!');
	}
};

// checkIn(flight, jonas);
// console.log(flight, jonas);

// Is the same as doing...
// const flightNum = flight; // passes in value
// const passenger = jonas; // passes in a reference, affects original value/s

const newPassport = function (person) {
	// Random number between 0 (included) and 1000000 (excluded)
	person.passport = Math.trunc(Math.random() * 1000000);
};

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas);

*/

/*
const bookings = [];

const createBooking = function (
	flightNum,
	numPassenger = 1,
	price = 199 * numPassenger
) {
	// ES5 version of setting default values
	// numPassenger = numPassenger || 1;
	// price = price || 199;
	const booking = {
		flightNum,
		numPassenger,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH1234', 2);
createBooking('LH1234', 5);

createBooking('LH123', undefined, 1000);
*/
