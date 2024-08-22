'use strict';

const calcTip = (bill) => {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = (values) => {
	let total = 0;
	values.forEach((value) => {
		total += value;
	});
	return total / values.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
	// Calculating for the tip
	const tip = calcTip(bills[i]);

	// Adding the tip and total
	tips.push(tip);
	totals.push(bills[i] + tip);
}

console.log(bills);
console.log(tips);
console.log(totals);

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
