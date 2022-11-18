console.log('Assignment Nignteen');
console.log('----------------');

class Car {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }

  run() {
    console.log('Car Is Running Now');
  }

  stop() {
    console.log('Car Is Stopped');
  }
}

const carOne = new Car('Toyota', 2022, 420000);
console.log(
  `Car One Is ${carOne.name} And Model Is ${carOne.model} And Price Is ${carOne.price}`
);
carOne.run();

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size;
  }

  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${
      this.size || 'unknown'
    }`;
  }
}

let TabletOne = new Tablet('iPad', 100200300, 1500, 12.9);
let TabletTwo = new Tablet('Nokia', 350450650, 800, 10.5);
let TabletThree = new Tablet('LG', 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// Edit The Class
class User {
  #card; // private property
  constructor(username, card) {
    this.username = username;
    this.#card = card;
  }

  separatorCard(str, sep) {
    let result = '';

    for (let i = str.length; i > 0; i -= 4) {
      let len = i - 1;

      if (result) {
        result =
          str.charAt(len - 3) +
          str.charAt(len - 2) +
          str.charAt(len - 1) +
          str.charAt(len) +
          sep +
          result;
      } else {
        result =
          str.charAt(len - 3) +
          str.charAt(len - 2) +
          str.charAt(len - 1) +
          str.charAt(len);
      }
    }

    return result;
  }

  checkOnFormatCreditCard(card) {
    let regex = /^(\d{4}[-]){3}\d{4}$/g;
    return regex.test(card);
  }

  formatCreditCard(card) {
    let regex = /^(\d{4}){3}\d{4}$/g;
    if (regex.test(card)) {
      return this.separatorCard(card.toString(), '-');
    } else {
      return `Not Valid`;
    }
  }

  logData(username, card) {
    return `Hello ${username} Your Credit Card Number Is ${card}`;
  }

  get showData() {
    if (this.checkOnFormatCreditCard(this.#card)) {
      return this.logData(this.username, this.#card);
    } else {
      return this.logData(this.username, this.formatCreditCard(this.#card));
    }
  }
}

// Do Not Edit Anything Below
let userOne = new User('Osama', '1234-5678-1234-5678');
let userTwo = new User('Ahmed', '1234567812345678');
let userThree = new User('Ghareeb', 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.card); // Prevent Accessing To Card Property Here
// Undefined

// Write Your Code Here
String.prototype.addLove = () => {
  return `I Love Elzero Web School`;
};

// Do Not Edit Below
let myStr = 'Elzero';
console.log(myStr.addLove()); // I Love Elzero Web School

const myObj = {
  username: 'Elzero',
  id: 100,
  score: 1000,
  country: 'Egypt',
};

// Write Your Code Here
Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  },

  country: {
    enumerable: false,
  },
});

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

delete myObj.country;
console.log(myObj);
