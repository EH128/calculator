const numbers = document.querySelectorAll("[num]");
const operators = document.querySelectorAll("[op]");
const equal = document.querySelector("[equal]");
const clear = document.querySelector("[clear]");
const display = document.getElementById("display");
const posneg = document.querySelector("[pos-neg]");
const percent = document.querySelector("[percent]");
let construct = "";
let firstSave = "";
let answer = 0;
const percentage = () => {
  construct /= 100;
  updateDisplay(construct);
};
const changeSign = () => {
  construct = construct * -1;
  updateDisplay(construct);
};
const addNumber = (e) => {
  number = e.target.innerText;
  if (number === "." && construct.includes(".")) {
    return;
  }
  construct += number;
};
const updateDisplay = (text) => {
  display.innerText = text;
};
const solve = () => {
  let firstNum = parseFloat(firstSave);
  let secondNum = parseFloat(construct);
  switch (op) {
    case "+":
      answer = firstNum + secondNum;
      break;
    case "-":
      answer = firstNum - secondNum;
      break;
    case "*":
      answer = firstNum * secondNum;
      break;
    case "÷":
      answer = firstNum / secondNum;
      break;
  }
  construct = answer;
  firstSave = "";
  op = undefined;
  updateDisplay(answer);
};
const identifyOp = (e) => {
  if (construct === "") {
    return;
  }
  if (firstSave !== "") {
    solve();
  }
  firstSave = construct;
  op = e.target.innerText;
  construct = "";
};
const clearing = () => {
  display.innerText = 0;
  op = undefined;
  construct = "";
  firstSave = "";
};
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    addNumber(e);
    updateDisplay(construct);
  });
});
operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    identifyOp(e);
  });
});
clear.addEventListener("click", clearing);
equal.addEventListener("click", () => {
  solve();
});
posneg.addEventListener("click", () => {
  changeSign();
});
percent.addEventListener("click", () => {
  percentage();
});
