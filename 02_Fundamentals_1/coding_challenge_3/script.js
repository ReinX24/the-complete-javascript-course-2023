// Dataset #1
// const dolphins = [96, 108, 89];
// const koalas = [88, 91, 110];

// Dataset #2
// const dolphins = [97, 112, 101];
// const koalas = [109, 95, 123];

// Dataset #3
const dolphins = [97, 112, 80];
const koalas = [109, 95, 50];

const minimumScore = 100;

const dolphinsAverage = calculateAverage(dolphins);
const koalasAverage = calculateAverage(koalas);

console.log(dolphinsAverage, koalasAverage);

// Comparing averages to determine the winner
if (dolphinsAverage > koalasAverage && dolphinsAverage >= minimumScore) {
  console.log("Dolphins win!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= minimumScore) {
  console.log("Koalas win!");
} else if (
  koalasAverage === dolphinsAverage &&
  dolphinsAverage >= minimumScore &&
  koalasAverage >= minimumScore
) {
  console.log("Tie!");
} else {
  console.log("No one wins!");
}

function calculateAverage(scores) {
  averageScore = 0;
  scores.forEach(function (score) {
    averageScore += score;
  });
  return averageScore / scores.length;
}
