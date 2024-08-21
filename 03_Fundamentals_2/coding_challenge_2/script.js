"use strict";

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

let bills = [125, 555, 44];
let tips = [];
let total = [];

bills.forEach((bill, i) => {
  const tip = calcTip(bill);
  tips.push(tip);
  total.push(bill + tip);
});

console.log(bills);
console.log(tips);
console.log(total);
