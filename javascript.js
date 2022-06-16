// Functions for add, subtract, multiple, and divide
const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

// Operate Function
const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "×":
      return multiply(num1, num2);
      break;
    case "÷":
      return divide(num1, num2);
      break;
  }
};

// // Eventually, I think I can change the mechanics of toggling the operator
// clicked variable to something like toggling a class.  Could even change the back-
// ground color to stay highlighted, e.g.
