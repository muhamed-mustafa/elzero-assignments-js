console.log('Assignment Eighteen');
console.log('----------------');

myString = 'Hello Elzero Web School I Love elzero';
console.log(myString.match(/elzero/gi));

let myStringReg = 'Hello World Web School I Love world';
console.log(myStringReg.match(/world/gi));

let tld = 'Com Net Org Info Code Io';
console.log(tld.match(/(org|info|io)/gi));

nums = '12345678910';
console.log(nums.match(/[0-9]/g));

let notNums = '12345678910';
console.log(notNums.match(/[^0-2]/g));

let specialNums = '1!2@3#4$5%678910';
console.log(specialNums.match(/[^0-9]/g));

let practice = 'Os1 Os1Os Os2 Os8 Os8Os';
console.log(practice.match(/Os[5-9]Os/gi));

myString = 'AaBbcdefG123!234%^&*';

let atozSmall = /[a-z]g/;
console.log(myString.match(atozSmall));

let NotAtozSmall = /[^a-z]/g;
console.log(myString.match(NotAtozSmall));

let atozCapital = /[A-Z]/g;
console.log(myString.match(atozCapital));

let NotAtozCapital = /[^A-Z]/g;
console.log(myString.match(NotAtozCapital));

let aAndcAnde = /[ace]/g;
console.log(myString.match(aAndcAnde));

let NotaAndcAnde = /[^ace]/g;
console.log(myString.match(NotaAndcAnde));

let lettersCapsAndSmall = /[a-zA-Z]/g;
console.log(myString.match(lettersCapsAndSmall));

let numsAndSpecials = /[^a-zA-Z]/g;
console.log(myString.match(numsAndSpecials));

let specials = /[^a-zA-Z0-9]/g;
console.log(myString.match(specials));

names = 'Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo';
let re = /(\bspam|spam\b)/gi;
console.log(names.match(re));
console.log(re.test(names));
console.log(/(\bspam|spam\b)/gi.test('Osama'));
console.log(/(\bspam|spam\b)/gi.test('1Spam'));
console.log(/(\bspam|spam\b)/gi.test('Spam1'));

let mails = 'o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru';
let mailsRe = /\w+@\w+.(com|net)/gi;
mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

nums = '0110 10 150 05120 0560 350 00';
let numsRe = /0\d*0/gi;
console.log(nums.match(numsRe));

let urls = 'https://google.com http://www.website.net web.com';
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

let serials = 'S100S S3000S S50000S S950000S';
console.log(serials.match(/s\d{3}s/gi));
console.log(serials.match(/s\d{4,5}s/gi));
console.log(serials.match(/s\d{4,}s/gi));

myString = 'We Love Programming';
names = '1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ';

console.log(/ing$/gi.test(myString));
console.log(/^we/gi.test(myString));
console.log(/lz$/gi.test(names));
console.log(/^\d/gi.test(names));
console.log(names.match(/\d\w{5}(?=Z)/gi));
console.log(names.match(/\d\w{8}(?!Z)/gi));

document.getElementById('register').onsubmit = function () {
  let phoneInput = document.getElementById('phone').value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    return false;
  }
  return true;
};

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
re = /(https?:\/\/)?(www.)?\w+.\w+(:\d{4}\/\w+.\w+\?\w+\=\d{3}\&\w+\=\w+)?/gi;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

let ip = '2001:db8:3333:4444:5555:6666:7777:8888';
let regexIp = /\d{4}:\w{2}\d{1}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;
console.log(ip.match(regexIp));

let specialNames = 'Os10O OsO Os100O Osa100O Os1000 Os100m';
re = /O\w(\d+)?O/gi;
console.log(specialNames.match(re));

let phone = '+(995)-123 (4567)';
re = /\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
console.log(phone.match(re));

let date1 = '25/10/1982';
let date2 = '25 - 10 - 1982';
let date3 = '25 10 1982';
let date4 = '25 10 82';

re = /\d+(\/)?(\s)?(-)?(\s)?\d+(\s)?(\/)?(-)?(\s)?\d+/gi;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
