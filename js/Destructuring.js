console.log('Assignment Sixteen');
console.log('----------------');

let myNumbers = [1, 2, 3, 4, 5];
[a, , , , e] = myNumbers;
console.log(a * e);

let mySkills = [
  'HTML',
  'CSS',
  'JavaScript',
  ['PHP', 'Python', ['Django', 'Laravel']],
];
[a, b, c, [d, e, [f, g]]] = mySkills;
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

arr1 = ['Ahmed', 'Sameh', 'Sayed'];
arr2 = ['Mohamed', 'Gamal', 'Amir'];
let arr3 = ['Haytham', 'Shady', 'Mahmoud'];
let arr4 = arr1.concat(arr2, arr3);
[c, , , , , , , a, b] = arr4;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

member = {
  age: 30,
  working: false,
  country: 'Egypt',
  hobbies: ['Reading', 'Swimming', 'Programming'],
};

const {
  age: ag,
  working: w,
  country: co,
  hobbies: [hOne, , h3],
} = member;

console.log(`My Age Is ${ag} And Iam ${w ? '' : 'Not'} Working`);
console.log(`I Live in ${co}`);
console.log(`My Hobbies: ${hOne} And ${h3}`);

const game = {
  title: 'YS',
  developer: 'Falcom',
  releases: {
    'Oath In Felghana': ['USA', 'Japan'],
    'Ark Of Napishtim': {
      US: '20 USD',
      JAP: '10 USD',
    },
    Origin: '30 USD',
  },
};

const {
  title: t,
  developer: d1,
  releases: {
    'Oath In Felghana': [u, j],
    'Ark Of Napishtim': { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game;

const o = Object.keys(game.releases)[0];
a = Object.keys(game.releases)[1];
console.log(`My Favourite Games Style Is ${t} Style`);
console.log(`And I Love ${d1} Games`);
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
console.log(`Although I Love ${a}`);
console.log(`${a} Price in USA Is ${u_price}`);
console.log(`Origin Price Is ${or}`);

let chosen = 1;
myFriends = [
  { title: 'Osama', age: 39, available: true, skills: ['HTML', 'CSS'] },
  { title: 'Ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
  { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] },
];

let {
  title,
  age,
  available: av,
  skills: [, skill2],
} = myFriends[chosen - 1];

console.log(title);
console.log(age);
console.log(av ? 'available' : 'not avialable');
console.log(skill2);
