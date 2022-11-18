console.log('Assignment Ten');
console.log('----------------');

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i);
}

console.log('----------------');

start = 10;
end = 0;
let stop = 3;

for (let i = start; i > end; i--) {
  if (i >= start) console.log(i);
  else console.log(`${end}${i}`);
  if (i === stop) break;
}

console.log('----------------');

start = 1;
end = 6;
let breaker = 2;
let value = end - breaker - start;

for (; start <= end; start++) {
  console.log(`${start}`);
  for (let i = breaker; i <= end - breaker; i++) {
    if (i === value) continue;
    console.log(`-- ${i}`);
  }
}

console.log('----------------');

let index = 10;
let jump = 2;
end = 0;

for (let i = index; i > end; i--) {
  if (i % jump === end) {
    console.log(`${i}`);
    if (i === jump * jump) break;
  }
}

console.log('----------------');

friends = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer', 'Osama', 'Sameh'];
let letter = 'a';
start = friends.length - friends.length;

for (let i = start; i < friends.length; i++) {
  if (friends[i].charAt(start).toLowerCase() !== letter) {
    console.log(`"${i} => ${friends[i]}"`);
  }
}

console.log('----------------');

start = 0;
let swappedName = 'elZerO';
let newSwappedName = [];

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase())
    newSwappedName[i] = swappedName[i].toLowerCase();
  else newSwappedName[i] = swappedName[i].toUpperCase();
}

console.log(newSwappedName.join(''));

console.log('----------------');

start = 0;
let mix = [1, 2, 3, 'A', 'B', 'C', 4];
let firstItem = mix.splice(0, 1)[0];

for (; start < mix.length; start++) {
  if (typeof mix[start] === 'number' && mix[start] !== firstItem) {
    console.log(`${mix[start]}`);
  }
}

console.log('----------------');

let products = ['Keyboard', 'Mouse', 'Pen', 'Pad', 'Monitor', 'iphone'];
let i = 0;
for (;;) {
  console.log(products[i]);
  i++;
  if (i === products.length) break;
}

console.log('----------------');
