// script.js

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
	return (num2 === 0 ? 'Error' : num1 / num2);
}

let firstOperand = null;
let secondOperand = null;
let operator = null;

function operate(a, b, operator) {
	switch (operator) {
		case '+':
			return add(a, b);
		case '-':
			return subtract(a, b);
		case '×':
			return multiply(a, b);
		case '÷':
			return divide(a, b);
	}
}

function populateDisplay(e) {
	const displayText = document.querySelector('#display');
	if (e.srcElement.className === 'number-button') {
		displayText.textContent += e.srcElement.innerText;
	} else if (e.srcElement.className === 'operator-button') {
		firstOperand = parseInt(displayText.textContent);
		operator = e.srcElement.innerText;
		displayText.textContent = '';
	} else if (e.srcElement.className === 'equals-button') {
		secondOperand = parseInt(displayText.textContent);
		displayText.textContent = operate(firstOperand, secondOperand, operator);
	}
}

const buttons = document.querySelectorAll('.number-button, .operator-button, \
	.equals-button');
buttons.forEach(button => button.addEventListener('click', populateDisplay));
