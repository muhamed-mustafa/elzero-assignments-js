console.log('Assignment fifteen');
console.log('---------------------');

let member = {
  name: 'Elzero',
  age: 38,
  country: 'Egypt',
  fullDetails: function () {
    return `My Name is ${this.name} My Age Is ${this.age} I Live In ${this.country}`;
  },
};

console.log(member.name);
console.log(member.age);
console.log(member.country);
console.log(member.fullDetails());

let objMethodOne = { property: 'Method One' };
console.log(objMethodOne.property);

let objMethodTwo = Object.create({ property: 'Method Two' });
console.log(objMethodTwo.property);

let objMethodThree = new Object({ property: 'Method Three' });
console.log(objMethodThree.property);

let objMethodFour = {};
console.log((objMethodFour.property = 'Method Four'));

let objMethodFive = Object.assign({}, { property: 'Method Five' });
console.log(objMethodFive.property);

a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ a }, threeNums, twoNums);
console.log(finalObject);

// Object Challenge
let myFavGames = {
  'Trinity Universe': {
    publisher: 'NIS America',
    price: 40,
  },

  'Titan Quest': {
    publisher: 'THQ',
    bestThree: {
      one: 'Immortal Throne',
      two: 'Ragnarök',
      three: 'Atlantis',
    },
    price: 50,
  },

  YS: {
    publisher: 'Falcom',
    bestThree: {
      one: 'Oath in Felghana',
      two: 'Ark Of Napishtim',
      three: 'origin',
    },
    price: 40,
  },
};

let objectLengthKeys = Object.keys(myFavGames);
let objectLengthValues = Object.values(myFavGames);

for (let i = 0; i < objectLengthKeys.length && objectLengthValues.length; i++) {
  console.log(`"The Game Name Is ${objectLengthKeys[i]}"`);
  console.log(`"The Publisher Is ${objectLengthValues[i].publisher}"`);
  console.log(`"The Price Is ${objectLengthValues[i].price}"`);

  if (objectLengthValues[i].bestThree) {
    console.log('- Game Has Releases');
    console.log(`"First =>  ${objectLengthValues[i].bestThree.one}"`);
    console.log(`"Second => ${objectLengthValues[i].bestThree.two}"`);
    console.log(`"Third =>  ${objectLengthValues[i].bestThree.three}"`);
  }

  console.log('#'.repeat(20));
}
