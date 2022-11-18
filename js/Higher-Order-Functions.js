console.log('Assignment fourteen');
console.log('----------------');

const myNums = [10, 20, 30, 40, 50];
const addation = (ele) => ele + ele;
console.log(myNums.map(addation));

let swappingCases = 'elZERo';
let newSwappingCases = swappingCases
  .split('')
  .map((ele) =>
    ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
  )
  .join('');

console.log(newSwappingCases);

let invertedNumbers = [1, -10, -20, 15, 100, -30];
let newInvertedNumbers = invertedNumbers.map((e) => -e);
console.log(newInvertedNumbers);

let ignoreNumbers = 'Elz123er4o';
let newIgnoreNumbers = ignoreNumbers
  .split('')
  .map((e) => (isNaN(e) ? e : ''))
  .join('');

console.log(newIgnoreNumbers);

friends = ['Ahmed', 'Sameh', 'Sayed', 'Asmaa', 'Amgad', 'Israa'];
friends = friends.filter((e) => e.startsWith('A'));
console.log(friends);

numbers = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers.filter((e) => e % 2 == 0);
console.log(evenNumbers);

let sentence = 'I Love Foood Code Too Playing Much';
sentence = sentence
  .split(' ')
  .filter((e) => e.length <= 4)
  .join(' ');

console.log(sentence);

mix = 'A13BS2ZX';
mix = mix
  .split('')
  .filter((e) => !isNaN(e))
  .map((e) => e * e)
  .join('');

console.log(mix);

let nums = [10, 20, 15, 30];
nums = nums.reduce((acc, current) => acc + current, 5);
console.log(nums);

let theBiggest = [
  'Bla',
  'Propaganda',
  'Other',
  'AAA',
  'Battery',
  'Test',
  'Propaganda_Two',
];

theBiggest = theBiggest.reduce((acc, current) =>
  acc.length > current.length ? acc : current
);
console.log(theBiggest);

let removeChars = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];
removeChars = removeChars
  .filter((e) => !e.startsWith('@'))
  .reduce((acc, current) => acc + current);
console.log(removeChars);

mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o'];
mix = mix
  .map((ele) => (isNaN(ele) ? ele : ''))
  .reduce((acc, current) => `${acc}${current}`);
console.log(mix);

let myString = 'EElllzzzzzzzeroo';
myString = myString
  .split('')
  .filter((ele, index) => (myString.indexOf(ele) === index ? ele : ''))
  .join('');
console.log(myString);

let myArray = ['E', 'l', 'z', ['e', 'r'], 'o'];
// console.log([].concat.apply([], myArray).join(''));
myArray = myArray.reduce((acc, current) => acc.concat(current), []).join('');
console.log(myArray);

let numsAndStrings = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C'];
numsAndStrings = numsAndStrings.filter((e) => !isNaN(e)).map((e) => -e);
console.log(numsAndStrings);

nums = [2, 12, 11, 5, 10, 1, 99];
nums = nums.reduce(
  (acc, current) => (current % 2 !== 0 ? acc + current : acc * current),
  1
);
console.log(nums);

// Higher Order Functions - Challenge
myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z';
let solution = myString
  .split('')
  .filter(
    (e) => isNaN(e) && !e.startsWith(',') && e !== myString.split('').pop()
  )
  .reduce((acc, current) => acc + current)
  .split('_')
  .join(' ')
  .slice(true);

console.log(solution);
