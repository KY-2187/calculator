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

let number1 = 3;
let number2 = 2;
let operator = '/';

console.log(operate(number1, operator, number2));