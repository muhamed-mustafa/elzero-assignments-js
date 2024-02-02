console.log("Assignment One");
console.log("----------------");

document.body.appendChild(
  Object.assign(document.createElement("h1"), { innerHTML: "ElZERO" })
);

const commonStyles = "font-size:40px";

console.log(
  `%cElZERO %cWEB %cSCHOOL`,
  `color:red; ${commonStyles}`,
  `color:green; ${commonStyles}`,
  `color:blue; ${commonStyles}`
);

console.group("Group1");
console.log("Message1");
console.log("Message2");
console.group("Child Group");
console.log("Message1");
console.log("Message2");
console.group("Grand Child Group");
console.log("Message1");
console.log("Message2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group2");
console.log("Message1");
console.log("Message2");
console.groupEnd();

console.table(["Muhammed", "Mustafa", "Al-SAYED"]);

// console.log("Iam In Console"); Single Line Comment

/*
  MultiLine Comment
   document.write("Iam In Page");
 */

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
