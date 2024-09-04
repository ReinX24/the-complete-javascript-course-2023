'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	// [`day-${2 + 4}`]: {
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	// ES6 enhanced object literals
	openingHours,

	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(
			`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
		);
	},

	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient, otherIngredients);
	},
};

// Maps iteration
// const question = new Map([
// 	['question', 'What is the best programming language in the world?'],
// 	[1, 'C'],
// 	[2, 'Java'],
// 	[3, 'Javascript'],
// 	['correct', 3],
// 	[true, 'Correct!'],
// 	[false, 'Try again!'],
// ]);

// console.log(question);

// Converting objects to maps
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
// 	if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// const result = question.get(answer === question.get('correct'));
// console.log(result);

// Convert map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lizbon, Portugal');
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// 	.set('open', 11)
// 	.set('close', 23)
// 	.set(true, 'We are open :D')
// 	.set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));
// console.log(rest);

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.get(arr));

// Sets
// Sets store unique elements in the array, if an element is repeated, it will
// not duplicate that element in the set.
// const ordersSet = new Set([
// 	'Pasta',
// 	'Pizza',
// 	'Pizza',
// 	'Risotto',
// 	'Pasta',
// 	'Pizza',
// ]);

// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);
// console.log(ordersSet[0]); // undefined
// ordersSet.clear();

// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);
// console.log(new Set('jonasschmedtmann').size);

// Looping objects
// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);
// console.log(`We are open on ${properties.length} days`);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
// 	openStr += `${day}, `;
// }
// console.log(openStr);

// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// Property NAMES and VALUES, entire object
// const entries = Object.entries(openingHours);
// for (const [key, { open, close }] of entries) {
// 	console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
// 	console.log(restaurant.openingHours.mon.open);
// }

// WITH optional chaining
// Checks if the property exists, if it does chain the open attribute
// Returns undefined if the property does not exist
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
// console.log(day);
// If the property does not exist, return 'closed'
// 	const open = restaurant.openingHours[day]?.open ?? 'closed';
// 	console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// Enhanced Object Literals
// console.log(restaurant);

// The for-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// Array of index and array element
// for (const [i, el] of menu.entries()) {
// 	console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// const rest1 = {
// 	name: 'Capri',
// numGuests: 20,
// 	numGuests: 0,
// };

// const rest2 = {
// 	name: 'La Pizza',
// 	owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// Returns on first falsy value
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// Assigns value to variable if it is truthy
// rest1.owner &&= '<ANONYMOUS>'; // falsy
// rest2.owner &&= '<ANONYMOUS>'; // truthy

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// Returns the first falsy value
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
// 	restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Use any data type, return any data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// Puts all passed values into an array
// const add = function (...numbers) {
// 	let sum = 0;
// 	numbers.forEach((number) => {
// 		sum += number;
// 	});
// 	console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);

// Using the rest (...) operator on objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// Spread, because on right side of =
// const arr = [1, 2, ...[3, 4]];

// Rest, because on left side of =
// Stores the remaining variables in the array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
// 	...restaurant.mainMenu,
// 	...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// Copies the properties of restaurant
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(newRestaurant.name);
// console.log(restaurantCopy.name);

// const ingredients = [
// 	prompt("Let's make pasta! Ingredient 1?"),
// 	prompt('Ingredient 2?'),
// 	prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);

// Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log('j', 'o');

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const restaurant = {
// 	name: 'Classico Italiano',
// 	location: 'Via Angelo Tavanti 23, Firenze, Italy',
// 	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// 	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// 	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// 	openingHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0, // Open 24 hours
// 			close: 24,
// 		},
// 	},

// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},

// 	orderDelivery: function ({
// 		starterIndex = 1,
// 		mainIndex = 0,
// 		time = '20:00',
// 		address = 'N/A',
// 	} = orderObj) {
// 		console.log(
// 			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},
// };

// restaurant.orderDelivery({
// 	address: 'Via del Sole, 21',
// 	starterIndex: 1,
// });

// restaurant.orderDelivery({
// 	time: '22:30',
// 	address: 'Via del Sole, 21',
// 	mainIndex: 2,
// 	starterIndex: 2,
// });

// Nested objects
// const {
// 	fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// const {
// 	name: restaurantName,
// 	openingHours: hours,
// 	categories: tags,
// } = restaurant;
// console.log(restaurant, hours, tags);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [i, , j] = nested;
// console.log(i, j);

// Receive 2 return values from a function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// let [main, , secondary] = restaurant.categories;
// [main, secondary] = [secondary, main]; // switching variables
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// const [first, , third] = restaurant.categories;
// console.log(first, third);

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
