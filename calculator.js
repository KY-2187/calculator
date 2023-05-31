const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const equalButton = document.querySelector('#equal');
const decimalButton = document.querySelector('#decimal');
const inputDisplay = document.querySelector('#current');
const historyDisplay = document.querySelector('#history');

let number1 = '';
let number2 = '';
let operation = '';
let createNewInput = true;

function add(a, b) {
    
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(first, operator, second) {
    if (operator == '+') {
        return add(first, second);
    } else if (operator == '-') {
        return subtract(first, second);
    } else if (operator == 'x') {
        return multiply(first, second);
    } else if (operator == '/') {
        return divide(first, second);
    } else {
        return 'ERROR';
    }
}

function roundOff(number) {
    return Math.round(number * 1000000000) / 1000000000;
}

function clearInput() {
    inputDisplay.textContent = '';
}

function reset() {
    number1 = '';
    number2 = '';
    operation = '';
    inputDisplay.textContent = '0';
    historyDisplay.textContent = '';
    createNewInput = true;
}

function backspace() {
    if (inputDisplay.textContent.length == 1) {
        inputDisplay.textContent = '0';
        createNewInput = true;
    } else {
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
    }
}

function setOperation(operator) {
    number1 = inputDisplay.textContent;
    operation = operator;
    historyDisplay.textContent = number1 + operation;
    createNewInput = true;
}

function evaluate() {
    if (operation == '') return;
    number2 = inputDisplay.textContent;
    inputDisplay.textContent = roundOff(operate(number1, operation, number2));
    createNewInput = true;
    operation = '';
}

function chainOperations() {
    number2 = inputDisplay.textContent;
    inputDisplay.textContent = roundOff(operate(number1, operation, number2));
}

clearButton.addEventListener('click', reset);
deleteButton.addEventListener('click', backspace);

equalButton.addEventListener('click', () => {
    evaluate();
    historyDisplay.textContent += number2 + '=';
});

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (createNewInput || inputDisplay.textContent === '0') {
            clearInput();
            inputDisplay.textContent = button.textContent;
            createNewInput = false;
        } else {
            if (inputDisplay.textContent.length < 12) {
                inputDisplay.textContent += button.textContent;
            }
        }
    })
});

decimalButton.addEventListener('click', () => {

})

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operation != '') {
            chainOperations();
            setOperation(button.textContent);
        } else {
            setOperation(button.textContent);
        }
    });
});