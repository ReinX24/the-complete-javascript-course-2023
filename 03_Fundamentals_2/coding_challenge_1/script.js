"use strict";

const calcAverage = (teamScores) => {
  let average = 0;
  teamScores.forEach((score) => (average += score));
  return average / teamScores.length;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return "No team wins...";
  }
};

const dolphinScores = [44, 23, 71];
const koalaScores = [65, 54, 49];

// const dolphinScores = [85, 54, 41];
// const koalaScores = [23, 34, 27];

const dolphinAverage = calcAverage(dolphinScores);
const koalaAverage = calcAverage(koalaScores);

console.log(checkWinner(dolphinAverage, koalaAverage));
