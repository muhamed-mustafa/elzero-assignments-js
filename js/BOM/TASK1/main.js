let userInput = prompt("Print Number From – To", "Example: 5-20");

if (!userInput || !/^(\d+)\s*-\s*(\d+)$/.test(userInput)) {
  userInput = prompt(
    "Invalid format. Please enter a message in the format 'Num1 - Num2' with a dash:"
  );
}

const [firstNumber, secondNumber] = userInput
  .split("-")
  .map((num) => parseInt(num.trim()))
  .sort((a, b) => a - b);

for (let i = firstNumber; i <= secondNumber; i++) {
  console.log(i);
}
