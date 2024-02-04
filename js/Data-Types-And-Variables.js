console.log("Assignment Two");
console.log("----------------");

const numberOne = 10,
  numberTwo = 20;

console.log(numberOne.toString() + numberTwo);
console.log(typeof (numberOne.toString() + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberOne + "\n" + numberTwo);
console.log(`${numberOne}
${numberTwo}`);

console.log(elzero.innerHTML);
console.log(typeof elzero);

const data =
  '`I\'m In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ With ++ \n \\"""\\""" \n ""JavaScript""``';

console.log(data);

let a = 24;
let b = 20;

console.log("_" + `${a}_${b}`.repeat(4) + "_");

// Variable And Concatenation Challenge
let theTitle = "ElZERO",
  theDescription = "ElZERO Web School",
  theDate = "25/10";

let pageContent = `<div class = "card" style = "text-align: center;">
  <div class = "child">
      <h2> Hello ${theTitle} </h2>
      <p> ${theDescription} </p>
      <span> ${theDate} </span>
  </div>
</div>
`;

document.write(pageContent.repeat(4));
