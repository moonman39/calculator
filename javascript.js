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
    case "*":
      return multiply(num1, num2);
      break;
    case "divide":
      return divide(num1, num2);
      break;
  }
};

// Function to populate the display when number buttons are clicked
const display = document.querySelector(".display-text");
let displayValue;

const inputButtons = document.querySelectorAll(".input-box");
inputButtons.forEach((button) =>
  button.addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = button.textContent;
      displayValue = button.textContent;
      console.log(displayValue);
    } else {
      display.textContent += button.textContent;
      displayValue = displayValue + button.textContent;
      console.log(displayValue);
    }
  })
);

// Function to clear the display when clicked
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = 0;
});
