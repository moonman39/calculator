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

// Change the display to the input
const display = document.querySelector(".display-text");
let displayValue = [];
const inputs = document.querySelectorAll(".input-box");
let operatorClicked;
let operation;

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = input.textContent;
    } else if (operatorClicked === true) {
      display.textContent = input.textContent;
      operatorClicked = false;
    } else {
      display.textContent += input.textContent;
    }
  });
});

// Operator event listener
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    operatorClicked = true;
    displayValue.push(Number(display.textContent));
    console.log(displayValue);
    if (displayValue.length === 2) {
      display.textContent = operate(
        operation,
        displayValue[0],
        displayValue[1]
      );
      displayValue = [Number(display.textContent)];
      console.log(displayValue);
    }
    operation = operator.textContent;
    console.log(operation);
  });
});

// Equals event listener
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  displayValue.push(Number(display.textContent));
  console.log(displayValue);
  display.textContent = operate(operation, displayValue[0], displayValue[1]);
  displayValue = [];
});

// Clear the display
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = "0";
  displayValue = [];
});

// // Eventually, I think I can change the mechanics of toggling the operator
// clicked variable to something like toggling a class.  Could even change the back-
// ground color to stay highlighted, e.g.
