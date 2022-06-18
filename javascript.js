const display = document.querySelector(".display-text");
const inputs = document.querySelectorAll(".input-box");
let operation;
let firstNumber;
let secondNumber;
let operatorClicked;
let newNumber;
let result;
let values = [];

// Display
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    if (!operatorClicked) {
      if (display.textContent === "0") {
        display.textContent = input.textContent;
      } else {
        display.textContent += input.textContent;
      }
      firstNumber = Number(display.textContent);
    } else if (operatorClicked) {
      if (display.textContent === "0" || display.textContent == firstNumber) {
        display.textContent = input.textContent;
      } else {
        display.textContent += input.textContent;
      }
      secondNumber = Number(display.textContent);
    }
  });
});

// Operators
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (firstNumber && secondNumber) {
      display.textContent = operate(operation, firstNumber, secondNumber);
      operation = operator.textContent;
      firstNumber = Number(display.textContent);
    } else {
      operation = operator.textContent;
      operatorClicked = true;
    }
  });
});

// Equals
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  result = operate(operation, firstNumber, secondNumber);
  if (result % 1 !== 0) {
    display.textContent = result.toFixed(2);
  } else {
    display.textContent = result;
  }
});

// Clear Button
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = "0";
  operatorClicked = false;
  firstNumber = "";
  secondNumber = "";
});

// // Eventually, I think I can change the mechanics of toggling the operator
// clicked variable to something like toggling a class.  Could even change the back-
// ground color to stay highlighted, e.g.

// Functions for add, subtract, multiple, and divide
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Operate Function
function operate(operator, num1, num2) {
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
}

// Function to update the display
function updateDisplay() {
  display.textContent;
}
