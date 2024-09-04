'use strict';

const gameEvents = new Map([
	[17, '⚽ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽ GOAL'],
	[80, '⚽ GOAL'],
	[92, '🔶 Yellow card'],
]);

// 1. 
const eventMap = new Set();
for (const [time, event] of [...gameEvents]) {
    eventMap.add(event);
}
const events = [...eventMap];
console.log(events);

// 2. 
gameEvents.delete(64);
console.log(gameEvents);

// TODO: finish 3 and 4