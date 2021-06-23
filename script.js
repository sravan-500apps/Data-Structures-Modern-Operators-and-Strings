'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (staterIndex, mainindex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainindex]];
  },

  orderDelivery: function ({ starterIndex, mainindex, time, address }) {
    console.log(
      `Order recived ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainindex]} will be deliverd to ${address} at ${time} `
    );
  },
};

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
