console.log('Assignment Seventeen');
console.log('----------------');

let myData = [1, 1, 1, 2, 3, 'A'];

let myUniqueDataOne = new Set(myData);
console.log(myUniqueDataOne);

let myUniqueDataTwo = new Set().add(1).add(1).add(1).add(2).add(3).add('A');
console.log(myUniqueDataTwo);

console.log(`Is Set Has => A ${myUniqueDataOne.has('a'.toUpperCase())}`);
console.log(myUniqueDataTwo.size);

myUniqueDataTwo.delete('A');
console.log(myUniqueDataTwo);

console.log(myUniqueDataTwo.clear());
console.log(myUniqueDataTwo);

let mySet = new Set([1, 1, 1, 2, 3, 'A', 'A']);
console.log(mySet);
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach
mySet.forEach((el) => console.log(el));

let myWs = new WeakSet([{ 1: 'A', 2: 'B' }]);
console.log(myWs);

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

// let myNewObject = {
//   10: 'Number',
//   '10': 'String', // overwrite 10
// };
// console.log(myNewObject[10]); String

let myNewMap = new Map([
  [10, 'Number'],
  ['Name', 'String'],
  [false, 'Boolean'],
]);

myNewMap.set(10, 'Number');
myNewMap.set('10', 'String');
myNewMap.set(true, 'Boolean');
myNewMap.set({ a: 1, b: 2 }, 'Object');
myNewMap.set(function doSomething() {}, 'Function');

console.log(myNewMap);
console.log(myNewMap.get(10)); // Number
console.log(myNewMap.get('10')); // String
console.log(myNewMap.get('Name'));
console.log(myNewMap.get(false));
console.log(myNewMap.has('Name'));
console.log(myNewMap.size);
console.log(myMap.delete('Name'));
myMap.clear();
console.log(myMap.size);

let mapUser = { theName: 'Elzero' };
myMap = new Map();
myMap.set(mapUser, 'Object Value');
mapUser = null; // Override The Reference
console.log(myMap);

let wMapUser = { theName: 'Elzero' };
let myWeakMap = new WeakMap();
myWeakMap.set(wMapUser, 'Object Value');
wMapUser = null; // Override The Reference
console.log(myWeakMap);

console.log(Array.from('Muhammed'));
console.log(Array.from('12345', (n) => +n + +n));

myArray = [1, 1, 1, 2, 3, 4];
mySet = new Set(myArray);
console.log(Array.from(mySet));
console.log([...new Set(myArray)]);

function af() {
  return Array.from(arguments);
}

console.log(af('Mo', 'Nour', 'Hamaza', 1, 2, 3));

myArray = [10, 20, 30, 40, 50, 'A', 'B'];
console.log(myArray.copyWithin(3));
console.log(myArray.copyWithin(4, 6));
console.log(myArray.copyWithin(4, -1));
console.log(myArray.copyWithin(1, -2));
console.log(myArray.copyWithin(1, -2, -1));

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myNumber = 1;

let check = nums.some(function (e) {
  return e > this;
}, myNumber);

console.log(check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);

const locations = {
  20: 'Place 1',
  30: 'Place 2',
  50: 'Place 3',
  40: 'Place 4',
};

let mainLocation = 15;
let locationsArray = Object.keys(locations);
console.log(locationsArray);

let locationArrayNumbers = locationsArray.map((e) => +e);
console.log(locationArrayNumbers);

check = locationArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);

console.log(check);

console.log('Muhammed');
console.log(...'Muhammed');
console.log([...'Muhammed']);

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];
let allArrays = myArray1.concat(myArray2);
console.log(allArrays);

let copiedArray = [...myArray1];
console.log(copiedArray);

let allFriends = ['Osama', 'Ahmed', 'Sayed'];
let thisYearFriends = ['Sameh', 'Mahmoud'];
allFriends.push(...thisYearFriends);
console.log(allFriends);

let Numbers = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...Numbers));

let objOne = {
  a: 1,
  b: 2,
};

let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers).pop());
console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1]);

myFriends = ['Osama', 'Ahmed', 'Sayed', 'Sayed', 'Mahmoud', 'Osama'];
console.log(Array.from(new Set(myFriends)).sort());

let myInfo = {
  username: 'Osama',
  role: 'Admin',
  country: 'Egypt',
};

myMap = new Map(Object.entries(myInfo));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has('role'));

let theNumber = 100020003000;
console.log(
  +Array.from(new Set([...theNumber.toString()]))
    .filter((e) => +e !== 0)
    .join('')
);

let theName = 'Elzero';
console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(''));
console.log([].concat(...theName));
console.log(Object.assign([], theName));

// let chars = ['A', 'B', 'C', 'D', 'E', 10, 15, 6];
// chars = ['A', 'B', 'C', 20, 'D', 'E', 10, 15, 6];
chars = ['Z', 'Y', 'A', 'D', 'E', 10, 1];

// Challenge
function copyWithinFun(chars) {
  let ArrayNum = chars.filter((e) => typeof e === 'number');
  let ArrayStr = chars.filter((e) => typeof e === 'string');
  chars = [].concat(...ArrayNum, ...ArrayStr);
  console.log(chars.copyWithin(0, ArrayNum.length, ArrayNum.length * 2));
}

copyWithinFun(chars);

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log(numsOne.concat(numsTwo));
console.log([...numsOne, ...numsTwo]);
console.log([].concat(numsOne, numsTwo));
console.log(Object.assign([], numsOne, numsTwo));
numsOne.push(...numsTwo);

mergeArray = numsTwo.reduce((arr, item) => {
  arr.push(item);
  return arr;
}, numsOne);

console.log(mergeArray);

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Math.max(...n2) * [...n1, ...n2].length);
