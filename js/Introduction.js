console.log('Assignment One');
console.log('----------------');

let h1 = document.createElement('h1');
h1.innerHTML = 'Elzero';
document.body.appendChild(h1);

console.log(
  '%cElzero %cWeb %cSchool',
  'color:red',
  'color:green',
  'color:blue'
);

console.group('Group1');
console.log('Message1');
console.log('Message2');
console.group('Child Group');
console.log('Message1');
console.log('Message2');
console.group('Grand Child Group');
console.log('Message1');
console.log('Message2');
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('Group2');
console.log('Message1');
console.log('Message2');
console.groupEnd();

console.table(['Mo', 'Mustafa', 'Hamaza']);

// console.log("Iam In Console"); Single Line Comment

/*
  MultiLine Comment
  document.write("Iam In Page");
*/

console.log('-----------------------------');

// Variable And Concatenation Challenge
let theTitle = 'Elzero',
  theDescription = 'Elzero Web School',
  theDate = '25/10';

let pageContent = `<div class = "card" style = "text-align: center;">
  <div class = "child">
      <h2> Hello ${theTitle} </h2>
      <p> ${theDescription} </p>
      <span> ${theDate} </span>
  </div>
</div>
`;

document.write(pageContent.repeat(4));
