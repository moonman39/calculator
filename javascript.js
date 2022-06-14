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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    display.textContent = button.textContent;
  })
);

// Function to clear the display when clicked
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = 0;
});
