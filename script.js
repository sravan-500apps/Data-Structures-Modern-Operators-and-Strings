'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tus', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


///////////////////////////////////////
// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // below is before Es6
  //openingHours: openingHours,
  // es6 enhanced object literals
  openingHours,
  // es6 new way of funtion decarleration
  order(staterIndex, mainindex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainindex]];
  },

  orderDelivery({ staterIndex = 1, mainindex = 0, time = '20:30', address }) {
    console.log(
      `Order recived ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainindex]} will be deliverd to ${address} at ${time} `
    );
  },
  // below is old way of declaring
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your decliouses pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// the foe-of for
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let i of menu) console.log(i);

// for (let i of menu.entries()) {
//   console.log(`${i[0] + 1}:${i[1]}`);
// }
for (let [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
*/

/*
//nullesh
restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);

//nullesh: null and undefined but not (0 or '')
const guestCoreection = restaurant.numGuest ?? 10;
console.log(guestCoreection); //now o/p is 0
*/
/*
//short circuiting
console.log('----- OR------');
// use Any data types, return any data type, short-circuting
console.log(3 || 'sravan');
console.log('' || 'sravan');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null); //in this or short circuit we print 1st truthy value : hello is that 1st truthy value

// normal
restaurant.numGuest = 30;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);
// short circuit
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('----- AND------');
console.log(0 && 'sravan');
console.log(7 && 'sravan');
console.log('hello' && 23 && null && 'sravan'); // o/p is null because it is falsy after this "&&" will not going to check
// practical

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrom', 'onion', 'pepper');
}

restaurant.orderPizza && restaurant.orderPizza('mushrom', 'onion', 'pepper');
*/

/*
// Rest partern
// spreed, because on Right side of =
const arr = [1, 2, ...[3, 4]];

// Rest, because on Left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7]; // rest partren collectsor put rest of the elements or unused elements into a new Array
// Rest element must be last element  "...others" const[a, b, ...others]

const [pizza, , Risotto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, other);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat, weekdays);

// 2) funtions
const add = function (...numbers) {
  // ...numbers are rest prameters
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 4, 7, 9, 3, 1, 2, 5);
// below is example for spreed operator above part is for rest partern
console.log('spreed operator:');
const x = [23, 58, 69];
add(...x);

restaurant.orderPizza(
  'BabyCorn',
  'cassicium',
  'onions',
  'Tomatomato',
  'chiken'
);


restaurant.orderPizza('Babycorn');
*/

/*
// spreed operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// spreed operator
const newArray = [1, 2, ...arr]; // spreedoperator will take elements from an array writing element indivualy for that reason 7,8,9
console.log(newArray); //1 2 7 8 9
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Burger'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// spreedoperator not only for arrays it will work for all iterables like arrays,strings,maps,sets . but not objects
const str = 'sravan';
const letters = [...str, '', 'M.'];
console.log(letters);

// Real-world example
// const ingredients = [
//   prompt("let's make pasta with ingregrant 1"),
//   prompt(' ingregrant 2'),
//   prompt(' ingregrant 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);
// object in es2018 spreedoperator also works object
const newRestrrent = { foundedIn: 1994, ...restaurant, founder: 'gerange' };
console.log(newRestrrent);

const restaurentCopy = { ...restaurant };
restaurentCopy.name = 'Ristorant';
console.log(restaurentCopy.name);
console.log(restaurant.name);
*/

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'c2-46',
//   mainindex: 2,
//   starterIndex: 2,
// });

/*
// Destructuring Objects
//{} notation . hear order of the object not needed we can retrive in anything we want
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//insted of varible we can give our own name like we gave in arrays
// this object destructuring helps to dealing with thrid party data
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: stater = [] } = restaurant;
console.log(menu, stater);

// mutating varibles or swaping the varibles  while destrucring object
let a = 111;
let b = 555;
const obj = { a: 7, b: 25, c: 14 };
({ a, b } = obj);
console.log(a, b); //o/p is 7,25 before this a and b values are 111,555

// nested object
const { fri } = openingHours;
console.log(fri); // o/p {open: 11, close: 23}
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); // o/p 11 23

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // o/p 11 23
*/

/*
// Destructuring Arrays
// [] notation
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr; // destrucring
console.log(x, y, z);
console.log(arr); // heare there will not effecting(distracting ) orginal array . we just destructuring the array.

// now we performing on our restaurant array
let [frist, last] = restaurant.categories;
console.log(frist, last);
// below we want destructuring 1 and 3 elements in array for this
const [frist1, , last1] = restaurant.categories;
console.log('we destructuring 1,3 elements:  ', frist1, last1);

// heare restrarent owner wants to switch(swaping both of them) primary:Italian and secoundary:Vegetarian
// normal swaping logic
let [main, , secoundary] = restaurant.categories;

// switching varibles

// const temp = main;
// main = secoundary;
// secoundary = temp;
// console.log('swaped', main, secoundary);

// now by destrucring
[main, secoundary] = [secoundary, main]; // heare like above no need to create temp
console.log(main, secoundary);

// console.log(restaurant.order(2, 0));
// destructuring

// retriving 2 return values from s function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// destructuring nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(nested);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
// const [p, q, r] = [7, 8];
//console.log(p, q, r);// O/P :- 7 8 undefined . in order to aviod this we have to give expisitly default values

const [p = 1, q = 1, r = 1] = [7, 8];
console.log(p, q, r); // O/P : 7 8 1
*/

/*We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK �
*/

/*
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
const [player1, player2] = game.players;
console.log(player1, player2);

console.log('---goalkepper', 'fileldplayer---');
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// const [gk, ...fieldPlayers] = player;
// console.log(gk, fieldPlayers);

console.log('---all players----');
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

console.log('---player1Final---');
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

console.log('---odds---');
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

console.log('---Funtion----');
const printGoals = function (...numbers) {
  console.log(`the players are ${numbers} no of goals ${numbers.length}`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
*/
