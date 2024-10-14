// Calculator function
function calculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const operator = prompt("Enter operator ( +, -, *, / ):");
  const num2 = parseFloat(prompt("Enter the second number:"));
  
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      return;
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}

// To run the calculator
calculator();
