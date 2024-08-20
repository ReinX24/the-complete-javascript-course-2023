// Dataset #1
const markWeight = 78;
const johnWeight = 92;

const markHeight = 1.69;
const johnHeight = 1.95;

// Dataset #2
// const markWeight = 95;
// const johnWeight = 85;

// const markHeight = 1.88;
// const johnHeight = 1.76;

const markBMI = calculateBMI(markWeight, markHeight);
const johnBMI = calculateBMI(johnWeight, johnHeight);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Marks's! (${markBMI})`);
}

function calculateBMI(weight, height) {
  return weight / height ** 2;
}
