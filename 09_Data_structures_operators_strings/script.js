'use strict';

// TODO: resume @04 Destructuring Objects

// 03 Destructuring Arrays
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
};

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

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
