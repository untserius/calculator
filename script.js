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

let num1 = 0;
let num2 = 0;
let operator = "";

function operate(operator, num1, num2) {
	if (operator === "+") return add(num1, num2);
	else if (operator === "-") return subtract(num1, num2);
	else if (operator === "*") return multiply(num1, num2);
	else if (operator === "/") return divide(num1, num2);
	else return "Invalid Operation";
}

console.log(operate("+", 2, 2));
