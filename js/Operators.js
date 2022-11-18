console.log('Assignment three');
console.log('----------------');

// Replace ? With Arithmetic Operators
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

let num = 3;

// Solution One
console.log(num + true + true + true);

// Solution Two
console.log(num + num);

// Solution Three
console.log((num += 3));

// Solution Four
console.log(num);

// Solution Five
console.log(++num - true);

let num2 = '10';

// Solution One
console.log(+num2 + +num2);

// Solution Two
console.log(+num2 * (true + true));

// Solution Three
console.log(+num2++ * (true + true));

let points = 10;
points = ++points + true + true;

console.log(points); // 13

points = --points - (true + true + true + true);
points = console.log(points); // 8;
