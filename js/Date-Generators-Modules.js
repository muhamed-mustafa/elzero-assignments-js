console.log('Assignment Twenty');
console.log('----------------');

const calculateAge = (dateString) => {
  let dateNow = new Date();
  let myBirthday = new Date(dateString);
  let dateDiff = dateNow - myBirthday;

  let seconds = Math.floor(dateDiff / 1000);
  console.log(`${seconds} Seconds`);

  let minutes = Math.floor(seconds / 60);
  console.log(`${minutes} Minutes`);

  let hours = Math.floor(minutes / 60);
  console.log(`${hours} Hours`);

  let days = Math.floor(hours / 24);
  console.log(`${days} Days`);

  let months = Math.floor(days / 30);
  console.log(`${months} Months`);

  let years = Math.floor(days / 365);
  console.log(`${years} Years`);
};

calculateAge('Jan 1 ,99');

let dateNow = new Date();
dateNow.setFullYear(1980, 0, 1);
dateNow.setHours(0, 0, 1);
console.log(dateNow);

let date = new Date();
date.setDate(-1);
console.log(date);
console.log(
  `Previous Month Is ${
    date.toDateString().split(' ')[1]
  } And Last Day Is ${date.getDate()}`
);

// One
let birthday = new Date('Jan 1 ,99');
console.log(birthday);

// Two
birthday = new Date('99');
console.log(birthday);

// Three
birthday = new Date('1999-1');
console.log(birthday);

// let t0 = performance.now();

// for (let i = 0; i < 100000; i++) {
//   document.write(`<div>${i}</div>`);
// }

// let t1 = performance.now();

// console.log(`Loop Took ${Math.trunc(t1 - t0)} Milliseconds.`);

const maxDate = (dates) =>
  dates.slice(1).reduce((acc, next) => {
    const date = new Date(next);
    return acc > date ? acc : date;
  }, new Date(dates[0]));

const values = ['01/05/10', '03/01/09', '06/22/01', '09/09/02', '10/12/20'];
console.log(maxDate(values));

function* gen() {
  yield 14;
  yield 154;
  yield 494;
  yield 1034;
  yield 1774;
  yield 2714;
  yield 3854;
  yield 5194;
  yield 6734;
}

let generator = gen();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}

function* genLetters() {
  yield* ['A', 'B', 'B', 'B', 'C', 'D'];
}

// Write Your Generator Function Here
function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

import calc from './mod-one.js';
import * as modOne from './mod-two.js';

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
