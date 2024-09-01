'use strict';

// TODO: resume @005, 15:00 min

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
		);
	},
};

const ingredients = [
	prompt("Let's make pasta! Ingredient 1?"),
	prompt('Ingredient 2?'),
	prompt('Ingredient 3?'),
];
console.log(ingredients);

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
