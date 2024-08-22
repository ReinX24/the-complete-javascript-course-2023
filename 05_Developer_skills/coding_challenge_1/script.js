'use strict';

const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

const printForecast = function (celcTemperatures) {
	let strResult = '';
	celcTemperatures.forEach((temp, day) => {
		strResult += `${temp}ºC in ${day + 1} days ... `;
	});
	console.log('... ' + strResult);
};

printForecast(temperatures1);
printForecast(temperatures2);
