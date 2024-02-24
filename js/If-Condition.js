console.log("Assignment Seven");
console.log("----------------");

let numOne = 9;
if (numOne < 10) console.log(`00${numOne}`);

let numTwo = 20;
if (numTwo > 10 && numTwo < 100) console.log(`0${numTwo}`);

let numThree = 110;
if (numThree >= 100) console.log(`${numThree}`);

num1 = 9;
let str2 = "20";
let str = "9";

if (num1 == str) console.log(`${num1} Is The Same Value As ${str}`);
if (num1 == str && typeof num1 !== typeof str)
  console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);

if (num1 != str2 && typeof num1 !== typeof str2)
  console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);

if (str != str2 && typeof str !== typeof num)
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);

num1 = 10;
num2 = 30;
let num3 = "30";

if (num3 > num1 && typeof typeof num3 !== typeof num2)
  console.log(
    `${num3} Is Larger Than ${num1} And Not The Same Type As ${num2}`
  );

if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2)
  console.log(
    `${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type Is Not The Same As ${num2}`
  );

if (num3 != num1 && typeof num3 !== typeof num1 && typeof num3 !== typeof num2)
  console.log(
    `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
  );

num1 = 8;
num2 = 7;
num3 = +"8";
let num4 = 24;

// Condition 1
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4
if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5
if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6
if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// if Condition Challenge
a = 10;
a > 10
  ? console.log(a)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log("UnKnown");

let st = "Elzero Web School";
typeof st === typeof "34" ? console.log("Good") : "";
st.match(/W/gi)[0].toLowerCase() === "w" ? console.log("Good") : "";
typeof st === "string" ? console.log("Good") : "";
typeof st === typeof "number" ? console.log("Good") : "";
st.match(/Elzero/gi)[0].repeat(2) === "ElzeroElzero" ? console.log("Good") : "";
