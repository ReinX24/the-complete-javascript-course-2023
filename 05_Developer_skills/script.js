'use strict';

const measureKelvin = function () {
	const measurement = {
		type: 'temp',
		unit: 'celsius',
		// Prompt gets triggered when the function is called, stores in value
		value: Number(prompt('Degrees celcius:')),
	};

	// console.table(measurement);
	const kelvin = measurement.value + 273;
	return kelvin;
};

// console.log(measureKelvin());

const calcTempAltitudeBug = function (t1, t2) {
	const temps = t1.concat(t2);
	console.log(temps);

	let max = temps[0];
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') {
			continue; // skips loop
		}

		// debugger; // opens the debugger
		if (curTemp > max) {
			max = curTemp;
		}
		if (curTemp < min) {
			min = curTemp;
		}
	}

	console.log(max, min);
	return max - min;
};

const amplitudeBug = calcTempAltitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
