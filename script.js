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
	if (num2 === 0) return "Infinity";
	return num1 / num2;
}

let num1 = 0;
let num2 = 0;
let operator = "";
let displayValue = "0";
let firstNum = "";
let secondNum = "";

function operate(operator, num1, num2) {
	if (operator === "+") return add(num1, num2);
	else if (operator === "-") return subtract(num1, num2);
	else if (operator === "*") return multiply(num1, num2);
	else if (operator === "/") return divide(num1, num2);
	else return "Invalid Operation";
}

function showNumber(num) {
	if (displayValue === "0" || displayValue === "Invalid Operation") {
		displayValue = num.toString();
	} else {
		if (num === "." && displayValue.includes(".")) {
			return;
		}
		displayValue += num.toString();
	}

	document.getElementById("display").textContent = displayValue;

	if (operator === "") {
		firstNum = displayValue;
	} else {
		secondNum = displayValue;
	}
}

function setOperator(selectedOperator) {
	if (firstNum != "" && secondNum != "") {
		calculate();
	}

	operator = selectedOperator;
	displayValue = "0";
	document.getElementById("display").textContent = firstNum + " " + operator;
}

function calculate() {
	if (firstNum != "" && operator != "" && secondNum != "") {
		const result = operate(
			operator,
			parseFloat(firstNum),
			parseFloat(secondNum)
		);
		document.getElementById("display").textContent = result.toString();

		//reset for further calculation
		firstNum = result.toString();
		operator = "";
		secondNum = "";
	}
}

document
	.getElementById("clearButton")
	.addEventListener("click", clearCalculator);

function clearCalculator() {
	firstNum = "";
	secondNum = "";
	operator = "";
	displayValue = "";

	document.getElementById("display").textContent = displayValue;
}

function deleteChar() {
	if (displayValue) {
		displayValue = displayValue.toString().slice(0, -1);
	}

	document.getElementById("display").textContent = displayValue;
}
