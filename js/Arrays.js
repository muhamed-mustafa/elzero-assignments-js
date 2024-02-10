console.log("Assignment Nine");
console.log("----------------");

// optional chaining operator
const arr = [1, 2, 3];
console.log(arr?.length);

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
num = 3;

console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num));
console.log(myFriends.slice(myFriends, num));
console.log(myFriends.slice(myFriends.splice(3, 1), num));

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends = [friends[friends.indexOf("Eman")], friends[friends.indexOf("Osama")]];
console.log(friends);

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
console.log(finalArr.concat(arrOne, arrTwo).sort().reverse());

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words.pop()[0].split("").slice(words.indexOf("z")).join("").toUpperCase()
); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
console.log(haystack.includes(needle) ? "Found" : "Not Found");
console.log(haystack[1] === needle ? "Found" : "Not Found");
console.log(haystack[1] == needle.split(",").concat() ? "Found" : "Not Found");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrays = [];
allArrays = (arr2.slice(2, 3) + arr1.slice(2) + arr2.slice(3)).toLowerCase();
console.log(allArrays); // fxy

// Arrays Challenge
let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log(my.slice(0, ++counter).reverse());
console.log(my.slice(++zero, --counter).reverse());
my.splice(--zero, zero, "Elzero");
console.log(my.slice(zero, ++zero).join(""));

let case4 = my.shift().split("").slice(++counter).join("");
console.log(case4[0] + case4[1].toUpperCase());

const people = [
  {
    name: "Adam Mohamed",
    age: 21,
  },
  {
    name: "Nour Mustafa",
    age: 22,
  },
  {
    name: "Hamaza Nour",
    age: 23,
  },
];

const output = people.reduce((p, c, i, a) => {
  const split = c.name.split(" ");

  let part = `${split[0][0]}${split[1][0]}`;

  if (i === a.length - 1) {
    part += ".";
  } else {
    part += ",";
  }

  return p + part;
}, "");
