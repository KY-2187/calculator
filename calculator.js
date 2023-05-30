const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const deleteButtons = document.querySelectorAll('.bottom');
const currentInput = document.querySelector('#current');
const history = document.querySelector('#history');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(first, operator, second) {
    if (operator == '+') {
        return add(first, second);
    } else if (operator == '-') {
        return subtract(first, second);
    } else if (operator == '*') {
        return multiply(first, second);
    } else if (operator == '/') {
        return divide(first, second);
    } else {
        return 'ERROR';
    }
}

let input = '0';
function displayInput() {
    currentInput.textContent = input;
}

let number1 = 0;
let number2 = 0;
let operator = '/';
let hasDecimal = false;

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (input.length < 12) {
            if (input == 0) {
                input = button.textContent;
            } else {
                input += button.textContent;
            }
            displayInput();
            displayCounter++;
        }
    })
})

deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Delete') {
            if (input.length == 1) {
                input = '0';
            } else {
                input = input.slice(0, -1);
            }
            displayInput();
        } else if (button.textContent === 'Clear') {
            input = '0';
            displayInput();
        }
    })
})

// console.log(operate(number1, operator, number2));