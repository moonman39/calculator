const display = document.querySelector(".display-text");
const inputs = document.querySelectorAll(".input-box");
let operation;
let firstNumber;
let secondNumber;
let operatorClicked;
let newNumber;
let result;
let validOperators = ["+", "-", "*", "x", "X", "/"];

// Button Events

// Display and Variable Creation
inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    createInputs(e);
  });
});

// Operators
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e);
  });
});

// Equals
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  showResult();
});

// Clear Button
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  clearDisplay();
});

// Backspace
const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
  deleteOne();
});

// Keydown Events
document.addEventListener("keydown", (e) => {
  if (isFinite(e.key) || e.key === ".") {
    keyboardNumber(e);
  } else if (e.key === "Enter" || e.key === "=") {
    showResult();
  } else if (e.key === "c" || e.key === "C") {
    clearDisplay();
  } else if (e.key === "Backspace") {
    deleteOne();
  } else if (validOperators.includes(e.key)) {
    inputKeyOperator(e);
  }
});

// Functions
// Function to change the display via clicking the inputs
function createInputs(e) {
  if (!operatorClicked) {
    if (display.textContent === "0") {
      display.textContent = e.target.innerText;
    } else if (display.textContent.length === 9) {
      return;
    } else if (
      display.textContent.includes(".") &&
      e.target.innerText === "."
    ) {
      return;
    } else {
      display.textContent += e.target.innerText;
    }
  } else if (operatorClicked) {
    if (display.textContent.length === 9) {
      return;
    } else if (
      display.textContent.includes(".") &&
      e.target.innerText === "."
    ) {
      return;
    } else if (secondNumber) {
      display.textContent += e.target.innerText;
    } else if (display.textContent == firstNumber) {
      display.textContent = e.target.innerText;
    }
    secondNumber = Number(display.textContent);
  }
}

// Function to input a number via a keyboard
function keyboardNumber(e) {
  if (!operatorClicked) {
    if (display.textContent === "0") {
      display.textContent = e.key;
    } else if (display.textContent.length === 9) {
      return;
    } else if (display.textContent.includes(".") && e.key === ".") {
      return;
    } else {
      display.textContent += e.key;
    }
  } else if (operatorClicked) {
    if (display.textContent.includes(".") && e.key === ".") {
      return;
    } else if (secondNumber && display.textContent.length < 9) {
      display.textContent += e.key;
    } else if (display.textContent == firstNumber) {
      display.textContent = e.key;
    }
    secondNumber = Number(display.textContent);
  }
}

// Function to select an operator when clicking the inputs
function inputOperator(e) {
  if (firstNumber && secondNumber) {
    showResult();
    operation = e.target.innerText;
    firstNumber = Number(display.textContent);
  } else {
    operation = e.target.innerText;
    firstNumber = Number(display.textContent);
    operatorClicked = true;
  }
}

function inputKeyOperator(e) {
  if (firstNumber && secondNumber) {
    showResult();
    operation = e.key;
    firstNumber = Number(display.textContent);
  } else {
    operation = e.key;
    firstNumber = Number(display.textContent);
    operatorClicked = true;
  }
}

// Function to display the operation
function showResult() {
  if (!secondNumber) {
    firstNumber = display.textContent;
    display.textContent = firstNumber;
  } else {
    result = operate(operation, firstNumber, secondNumber);
    if (result % 1 !== 0) {
      display.textContent = result.toFixed(2);
    } else {
      display.textContent = result;
    }
    secondNumber = undefined;
  }
}

// Function to clear the display
function clearDisplay() {
  display.textContent = "0";
  operatorClicked = false;
  firstNumber = "";
  secondNumber = "";
  result = false;
}

// Function to backspace
function deleteOne() {
  if (display.textContent.length === 1) {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(
      0,
      display.textContent.length - 1
    );
  }
}
// Math function
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
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (
    operator == "×" ||
    operator == "X" ||
    operator == "x" ||
    operator == "*"
  ) {
    return multiply(num1, num2);
  } else if (operator === "/" || operator == "÷") return divide(num1, num2);
}
