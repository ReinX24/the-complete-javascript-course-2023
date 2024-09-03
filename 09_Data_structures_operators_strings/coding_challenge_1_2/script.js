'use strict';

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

//* Coding Challenge #2
// 1.
game.scored.forEach((player, i) => {
	console.log(`Goal ${i + 1}: ${player}`);
});

// 2.
const {
	odds: { team1, x: draw, team2 },
} = game;
const average = (team1 + draw + team2) / 3;
console.log(average);

// 3.
console.log(`Odd of victory of Bayern Munich: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory of Borrussia Dortmund: ${game.odds.team2}`);

// 4.
const scorers = {};
game.scored.forEach((player) => {
	scorers[player] = scorers[player] ?? 0;
	scorers[player]++;
});

console.log(scorers);

//* Coding Challenge #1
// 1.
// const [players1, players2] = [game.players[0], game.players[1]];
// console.log(players1, players2);

// 2.
// Get the first element and stores all the remaining values in an array
// const [gk1, ...fieldPlayers1] = game.players[0];
// const [gk2, ...fieldPlayers2] = game.players[1];

// console.log(gk1, fieldPlayers1);
// console.log(gk2, fieldPlayers2);

// 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// console.log(players1Final);

// 5.
// const {
// 	odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// function printGoals(...players) {
// 	console.log(`${players.length} goals were scored`);
// 	players.forEach((player) => {
// 		console.log(player);
// 	});
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// If the first value is true, goes to next value and prints
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');
