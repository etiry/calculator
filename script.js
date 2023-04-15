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
		case '*':
			return multiply(a, b);
		case '/':
			return divide(a, b);
	}
}

function populateDisplay(e) {
	const displayText = document.querySelector('#display');
	displayText.textContent = e.srcElement.innerText;
	const displayValue = parseInt(e.srcElement.innerText);
}

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach(button => button.addEventListener('click', populateDisplay));