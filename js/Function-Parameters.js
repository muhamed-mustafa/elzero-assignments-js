console.log('Assignment Twelve');
console.log('----------------');

function sayHello(theName, theGender) {
  theGender === 'Male'
    ? console.log(`Hello Mr ${theName}`)
    : theGender === 'Female'
    ? console.log(`Hello Mrs ${theName}`)
    : console.log(`Hello ${theName}`);
}

function sayHello(theName, theGender) {
  if (theGender === 'Male') console.log(`Hello Mr ${theName}`);
  else if (theGender === 'Female') console.log(`Hello Mrs ${theName}`);
  else console.log(`Hello ${theName}`);
}

sayHello('Mo', 'Male');
sayHello('Aya', 'Female');
sayHello('Hamaza');

console.log('----------------');

function calculate(firstNum, secondNum, operation) {
  if (firstNum && secondNum && !operation) console.log(firstNum + secondNum);
  else if (firstNum && secondNum && operation == 'add')
    console.log(firstNum + secondNum);
  else if (firstNum && secondNum && operation == 'subtract')
    console.log(firstNum - secondNum);
  else if (firstNum && secondNum && operation == 'multiply')
    console.log(firstNum * secondNum);
  else if (firstNum && !secondNum) console.log(`Second Number Not Found`);
}

calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

console.log('----------------');

function ageInTime(theAge) {
  if (theAge > 10 && theAge <= 100)
    console.log(`${theAge * 7} ${theAge * 12} ${theAge * 356}`);
  else console.log(`Age Out Of Range`);
}

ageInTime(110);
ageInTime(38);

console.log('----------------');

// Function Challenge
function checkStatus(a, b, c) {
  if (typeof a == 'string' && typeof b == 'number' && typeof c == 'boolean') {
    if (c == true) {
      console.log(`hello ${a}, Your Age is ${b}, You Are available For Hire`);
    } else {
      console.log(
        `hello ${a}, Your Age is ${b}, You Are Not available For Hire`
      );
    }
  }

  if (typeof a == 'number' && typeof b == 'string' && typeof c == 'boolean') {
    if (c == true) {
      console.log(`hello ${b}, Your Age is ${a}, You Are available For Hire`);
    } else {
      console.log(
        `hello ${b}, Your Age is ${a}, You Are Not available For Hire`
      );
    }
  }

  if (typeof a == 'boolean' && typeof b == 'number' && typeof c == 'string') {
    if (a == true) {
      console.log(`hello ${c}, Your Age is ${b}, You Are available For Hire`);
    } else {
      console.log(
        `hello ${c}, Your Age is ${b}, You Are Not available For Hire`
      );
    }
  }

  if (typeof a === 'number' && typeof b == 'boolean' && typeof c === 'string') {
    if (b === true) {
      console.log(`hello ${c}, Your Age is ${a}, You Are available For Hire`);
    } else {
      console.log(
        `hello ${c}, Your Age is ${a}, You Are Not available For Hire`
      );
    }
  }
}

checkStatus('Mo', 22, true);
checkStatus(22, 'Mo', true);
checkStatus(true, 22, 'Mo');
checkStatus(22, false, 'Mo');

// Alternative Solution
console.log('----------------');

function showDetails(a, b, c) {
  const params = [a, b, c];

  const name = params.find((item) => typeof item === 'string');
  const age = params.find((item) => typeof item === 'number');
  const status = params.find((item) => typeof item === 'boolean');

  console.log(
    `hello ${name}, Your Age is ${age}, You Are ${
      status ? 'available' : 'Not Available'
    } For Hire`
  );
}

showDetails('Mo', 22, true);
showDetails(22, 'Mo', true);
showDetails(true, 22, 'Mo');
showDetails(22, false, 'Mo');

console.log('----------------');

function createSelectBox(startYear, endYear) {
  console.log('<select>');
  for (let i = startYear; i <= endYear; i++) {
    console.log(`<option value ="${i}">${i} </option>`);
  }
  console.log(`</select>`);
}

createSelectBox(2000, 2021);

console.log('----------------');

function multiply(...numbers) {
  let sum = 1;
  for (i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum *= Math.trunc(numbers[i]);
    }
  }

  console.log(sum);
}

multiply(10, 20);
multiply('A', 10, 30, 4);
multiply(100.5, 10, 'B');

console.log('----------------');
