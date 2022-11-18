console.log('Assignment Eleven');
console.log('----------------');

friends = ['Ahmed', 'Sayed', 'Ali', 1, 2, 'Mahmoud', 'Amany'];
index = 0;
counter = 0;

while (index < friends.length) {
  if (typeof friends[index] === 'string' && !friends[index].startsWith('A')) {
    console.log(`" => ${friends[index]}"`);
  }

  index++;
}
