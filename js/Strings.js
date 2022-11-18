console.log('Assignment Five');
console.log('----------------');

let userName = 'Elzero';
console.log(userName[0].toLowerCase());
console.log(userName.charAt(0).toLowerCase());
console.log(userName.substring(0, 1).toLowerCase());
console.log(userName.slice(0, 1).toLowerCase());
console.log(userName.charAt(0).toLowerCase());
console.log(userName[0].toLowerCase().repeat(3));

let word = 'Elzero';
let letterZ = 'z';
let letterE = 'e';
let letterO = 'O';

console.log(word.includes(letterZ));
console.log(word.startsWith(letterE.toUpperCase()));
console.log(word.endsWith(letterO.toLowerCase()));

// String Challenge
let a1 = 'Elzero Web School';

console.log(a1.charAt(2).toUpperCase() + a1.slice(3, 6));
console.log(a1.slice(13, 14).repeat(8).toUpperCase());
console.log(a1[13].repeat(8).toUpperCase());
console.log(a1.split(' ', 1));
console.log(`${a1.substr(0, 6)} ${a1.substr(11)}`);
console.log(`${a1.substr(0, 6)}${a1.substr(a1.length - 7)}`);
console.log(
  a1.charAt(0).toLowerCase() +
    a1.slice(1, 16).toUpperCase() +
    a1[a1.length - 1].toLowerCase()
);
