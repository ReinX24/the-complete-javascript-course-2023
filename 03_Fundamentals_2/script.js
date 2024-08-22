'use strict'; // enables strict mode

//* Loops
// const jonas = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"]
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

//* Object methods
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonas.getSummary());

//* Intro to objects
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const interesetedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// if (jonas[interesetedIn]) {
//   console.log(jonas[interesetedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";

// console.log(jonas[`first${nameKey}`]);
// console.log(jonas[`last${nameKey}`]);

// console.log(jonas."last" + ${nameKey})

//* Basic array operations
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay"); // add element to end
// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); // add element to start
// console.log(friends);

// friends.pop(); // remove last element
// const popped = friends.pop();
// console.log(popped);

// friends.shift(); // removes first element

// console.log(friends);
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); // -1

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

//* Functions calling other functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//* Arrow functions
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// const age3 = calcAge3(1991);
// console.log(age3);

// console.log(yearsUntilRetirement(1991, "Rein"));
// console.log(yearsUntilRetirement(1980, "Bob"));

//* Function declarations vs expressions
// Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age1 = calcAge1(1991);
// const age2 = calcAge2(1991);

// console.log(age1, age2);

//* Enabling strict mode
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if = 23;
