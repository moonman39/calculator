const input = document.querySelector(".calculator");
const inputBoxes = () => {
  for (let i = 1; i < 17; i++) {
    input.innerHTML += `<div class="input-box box-${i}"></div>`;
  }
};

inputBoxes();

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
