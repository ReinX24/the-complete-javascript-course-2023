'use script';

// TODO: continue @12:14 008 The call and apply methods
const lufthansa = {
	airline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
	name: 'Eurowings',
	iataCode: 'EW',
	bookings: [],
};

const book = lufthansa.book; // storing the function in a variable

// Does NOT work
// book(23, 'Sarah Williams');

// Setting which object the function will be used on
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

/*
const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

// Arrow function version
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');

greeterHey('Jonas'); // calling the stored function
greeterHey('Stevens');

greet('Hello')('Jonas'); // calling the function as its instantiated
greet('Hi')('Jonas');
*/

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
