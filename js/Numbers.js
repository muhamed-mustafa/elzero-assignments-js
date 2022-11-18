console.log('Assignment Four');
console.log('----------------');

console.log(100_000);
console.log(1_000_00);
console.log(+'100000');
console.log(10 ** 5);
console.log(1e5);
console.log(5e4 * 2);
console.log(5e4 + 5e4);
console.log(Math.pow(10, 5));
console.log(10000 * 10);
console.log(Math.trunc(100000.0));
console.log(parseInt(100000.0));
console.log(Math.floor(100000.0));
console.log(1000000 / 10);

console.log(-Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER + 15);

let myVar = '100.56789 Views';
console.log(parseInt(myVar));
console.log(+parseFloat(myVar).toFixed(2));

num = 10;
console.log(Number.isInteger(num) + true);

let flt = 10.4;
console.log(Math.round(10.4));
console.log(Math.trunc(10.4));
console.log(Math.floor(10.4));
console.log(parseInt(10.4));
console.log((10.4).toFixed());

console.log(Math.floor(Math.random() * 5));

// Number Challenge
a = 100;
b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.trunc(Math.min(a, b, c, d)));
console.log((a * 100 + d).toFixed() - 2);
console.log(a * 100 + d * 0);
console.log(a ** parseInt(d));

console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(parseInt(d));

console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));
console.log((Math.floor(b) / Math.ceil(d)).toFixed(0));
console.log(Math.ceil(parseInt(b) / Math.ceil(d)));
