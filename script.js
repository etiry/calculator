// script.js

function add(num1, num2) {
	return round((num1 + num2), 3);
}

function subtract(num1, num2) {
	return round((num1 - num2), 3);
}

function multiply(num1, num2) {
	return round((num1 * num2), 3);
}

function divide(num1, num2) {
	return (num2 === 0 ? 'Error' : round((num1 / num2), 3));
}

function round(value, decimals) {
	if (Number.isInteger(value)) {
		return value;
	} else {
    	return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }
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
	if (e.srcElement.className === 'number-button' ||
		e.srcElement.className === 'decimal-button') {
		displayText.textContent += e.srcElement.innerText;
	} else if (e.srcElement.className === 'operator-button') {
		firstOperand = Number(displayText.textContent);
		operator = e.srcElement.innerText;
		displayText.textContent = '';
	} else if (e.srcElement.className === 'equals-button') {
		secondOperand = Number(displayText.textContent);
		displayText.textContent = operate(firstOperand, secondOperand, operator);
	}
}

function clearDisplay(e) {
	firstOperand = null;
	secondOperand = null;
	operator = null;
	displayText.textContent = '';
}

function backspace(e) {
	displayText.textContent = (displayText.textContent)
		.substring(0, displayText.textContent.length - 1);
}

const displayText = document.querySelector('#display');

const buttons = document.querySelectorAll('.number-button, .operator-button, \
	.equals-button, .decimal-button');
buttons.forEach(button => button.addEventListener('click', populateDisplay));

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearDisplay);

const backspaceButton = document.querySelector('#backspace-button');
backspaceButton.addEventListener('click', backspace);
