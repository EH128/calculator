class Calculator {
  constructor(currentNumber) {
    this.currentNumber = currentNumber;
    this.clear();
  }

  clear() {
    this.current = "";
    this.previous = "";
    this.operation = undefined;
    this.currentNumber.innerText = "0";
  }
  addNumber(number) {
    if (number === "." && this.current.includes(".")) {
      return;
    }
    this.current = this.current.toString() + number.toString();
  }
  updateDisplay() {
    this.currentNumber.innerText = this.current;
  }
  idOperator(op) {
    if (this.current === "") {
      return;
    }
    if (this.previous !== "") {
      this.solve();
    }
    this.op = op;
    this.previous = this.current;
    this.current = "";
  }
  solve() {
    const curr = parseFloat(this.current);
    const prev = parseFloat(this.previous);
    switch (this.op) {
      case "+":
        this.current = prev + curr;
        break;
      case "-":
        this.current = prev - curr;
        break;
      case "*":
        this.current = prev * curr;
        break;
      case "÷":
        this.current = prev / curr;
        break;
    }
    this.previous = "";
    this.op = undefined;
    this.updateDisplay();
  }
  posNeg() {
    this.current *= -1;
    this.updateDisplay();
  }
  percentage() {
    this.current /= 100;
    this.updateDisplay();
  }
}

const numbers = document.querySelectorAll("[num]");
const operators = document.querySelectorAll("[op]");
const equal = document.querySelector("[equal]");
const clear = document.querySelector("[clear]");
const percent = document.querySelector("[percent]");
const changeSign = document.querySelector("[pos-neg]");
const currentNumber = document.getElementById("display");
let previousNumber = "0";

const calculator = new Calculator(currentNumber);

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.addNumber(number.innerText);
    calculator.updateDisplay();
  });
});
operators.forEach((op) => {
  op.addEventListener("click", () => {
    calculator.idOperator(op.innerText);
  });
});
clear.addEventListener("click", () => calculator.clear());
equal.addEventListener("click", () => {
  calculator.solve();
});
changeSign.addEventListener("click", () => {
  calculator.posNeg();
});
percent.addEventListener("click", () => {
  calculator.percentage();
});
