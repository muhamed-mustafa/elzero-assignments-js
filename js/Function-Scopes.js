console.log('Assignment thirteen');
console.log('----------------');

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let name = zName.split(' ');
    name = `${name[0]} ${name[1][0].toUpperCase()}.`;
    return `Hello ${name}`;
  }

  function ageWithMessage(zAge) {
    const age = zAge.match(/[0-9]+/g);
    return `Your Age Is ${age},`;
  }

  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }

  function fullDetails() {
    return `${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(
      zCountry
    )}`;
  }

  return fullDetails(); // Do Not Edit This
}

console.log(getDetails('Osama Mohamed', '38 Is My Age', 'Egypt'));
console.log(getDetails('Ahmed ali', '32 Is The Age', 'Syria'));

console.log('----------------');

function itsMe() {
  return `Iam A Normal Function`;
}

console.log(itsMe());

itsMe = () => {
  return `Iam A Arrow Function`;
};

console.log(itsMe());

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate('https', 'elzero', 'org'));

urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};
console.log(urlCreate('https', 'elzero', 'org'));

console.log('----------------');

function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === 'Available'
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checker('Osama')('Available')(4000));
console.log(checker('Ahmed')('Not Available')());

checker = (zName) => {
  return (status) => {
    return (salary) => {
      return status === 'Available'
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
};

console.log(checker('Osama')('Available')(4000));
console.log(checker('Ahmed')('Not Available')());

console.log('----------------');

function specialMix(...data) {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
      sum += data[i];
    } else {
      sum += +data[i].match(/[0-9]+/g);
    }
  }

  console.log(sum);
}

specialMix(10, 20, 30);
specialMix('10Test', 'Testing', '20Cool');
specialMix('Testing', '10Testing', '40Cool');
specialMix('Test', 'Cool', 'Test');

console.log('----------------');

const log = (empNo, empName, job, totalSalary) => {
  console.log(
    `employee number is ${empNo} and Name is ${empName} and Job is ${job} and the total salary is ${totalSalary}`
  );
};

function getEmployeee(empNo, empName, job) {
  if (job == 'manager') {
    salary = 5000;
    bonus = 400;
    totalSalary = salary + bonus;
    log(empNo, empName, job, totalSalary);
  } else if (job == 'engineer') {
    salary = 3000;
    bonus = 200;
    totalSalary = salary + bonus;
    log(empNo, empName, job, totalSalary);
  } else {
    salary = 1000;
    bonus = 100;
    totalSalary = salary + bonus;
    log(empNo, empName, job, totalSalary);
  }
}

getEmployeee(1, 'Moo', 'manager');
getEmployeee(2, 'Aya', 'engineer');
getEmployeee(3, 'selim', 'doctor');

console.log('----------------');

// Function Challenge
let names = function (...names) {
  return `String [${names.join('] , [ ')}] => Done !`;
};

console.log(names('Mo', 'Aya', 'Hamaza', 'Koko'));

let numbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + +nums;

console.log(
  calc(
    10,
    numbers[numbers.length - numbers.length],
    numbers[++numbers.length - --numbers.length]
  )
);
