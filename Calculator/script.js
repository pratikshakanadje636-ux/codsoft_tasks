"use strict";

const display = document.getElementById("display");
const expression = document.getElementById("expression");
const buttons = document.querySelector(".buttons");
const clearButton = document.getElementById("clear");

let firstNumber = null;
let selectedOperator = null;
let waitingForNumber = false;
let justCalculated = false;

function updateDisplay(value) {
    display.value = String(value);
}

function resetCalculator() {
    updateDisplay("0");
    expression.textContent = "";
    firstNumber = null;
    selectedOperator = null;
    waitingForNumber = false;
    justCalculated = false;
}

function inputNumber(number) {
    const current = display.value;

    if (current === "Error") {
        resetCalculator();
    }

    if (waitingForNumber || justCalculated) {
        updateDisplay(number);
        waitingForNumber = false;
        justCalculated = false;
        return;
    }

    if (display.value === "0") {
        updateDisplay(number);
    } else if (display.value.length < 16) {
        updateDisplay(display.value + number);
    }
}

function inputDecimal() {
    if (display.value === "Error") {
        resetCalculator();
    }

    if (waitingForNumber || justCalculated) {
        updateDisplay("0.");
        waitingForNumber = false;
        justCalculated = false;
        return;
    }

    if (!display.value.includes(".")) {
        updateDisplay(display.value + ".");
    }
}

function chooseOperator(operator) {
    if (display.value === "Error") {
        resetCalculator();
        return;
    }

    const currentNumber = Number(display.value);

    if (selectedOperator !== null && !waitingForNumber) {
        calculateResult();
    } else {
        firstNumber = currentNumber;
    }

    selectedOperator = operator;
    waitingForNumber = true;
    justCalculated = false;

    expression.textContent = `${display.value} ${operator}`;
}

function calculateResult() {
    if (selectedOperator === null || firstNumber === null) {
        return;
    }

    if (waitingForNumber) {
        return;
    }

    const secondNumber = Number(display.value);
    let result;

    switch (selectedOperator) {
        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":
            if (secondNumber === 0) {
                updateDisplay("Error");
                expression.textContent = "Cannot divide by zero";

                firstNumber = null;
                selectedOperator = null;
                waitingForNumber = true;
                justCalculated = true;
                return;
            }

            result = firstNumber / secondNumber;
            break;

        default:
            return;
    }

    if (!Number.isFinite(result)) {
        updateDisplay("Error");
    } else {
        result = Number(result.toPrecision(12));
        updateDisplay(result);
    }

    expression.textContent = `${firstNumber} ${selectedOperator} ${secondNumber} =`;

    firstNumber = null;
    selectedOperator = null;
    waitingForNumber = true;
    justCalculated = true;
}

function clearEntry() {
    updateDisplay("0");
    waitingForNumber = false;
    justCalculated = false;
}

function deleteDigit() {
    if (display.value === "Error" || waitingForNumber || justCalculated) {
        updateDisplay("0");
        waitingForNumber = false;
        justCalculated = false;
        return;
    }

    const value = display.value;

    if (value.length > 1) {
        const shortened = value.slice(0, -1);
        updateDisplay(shortened === "-" ? "0" : shortened);
    } else {
        updateDisplay("0");
    }
}

function calculatePercentage() {
    if (display.value === "Error") {
        resetCalculator();
        return;
    }

    const result = Number(display.value) / 100;
    updateDisplay(Number(result.toPrecision(12)));

    waitingForNumber = true;
    justCalculated = true;
}

function toggleSign() {
    if (display.value === "Error" || Number(display.value) === 0) {
        return;
    }

    updateDisplay(String(Number(display.value) * -1));
}

buttons.addEventListener("click", function (event) {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    if (button.dataset.number !== undefined) {
        inputNumber(button.dataset.number);
        return;
    }

    if (button.dataset.operator !== undefined) {
        chooseOperator(button.dataset.operator);
        return;
    }

    switch (button.dataset.action) {
        case "clear":
            clearEntry();
            break;

        case "delete":
            deleteDigit();
            break;

        case "decimal":
            inputDecimal();
            break;

        case "equals":
            calculateResult();
            break;

        case "percent":
            calculatePercentage();
            break;

        case "sign":
            toggleSign();
            break;
    }
});

clearButton.addEventListener("click", resetCalculator);

document.addEventListener("keydown", function (event) {
    if (/^[0-9]$/.test(event.key)) {
        inputNumber(event.key);
    } else if (event.key === ".") {
        inputDecimal();
    } else if (["+", "-", "*", "/"].includes(event.key)) {
        event.preventDefault();
        chooseOperator(event.key);
    } else if (event.key === "Enter" || event.key === "=") {
        event.preventDefault();
        calculateResult();
    } else if (event.key === "Backspace") {
        deleteDigit();
    } else if (event.key === "Escape") {
        resetCalculator();
    } else if (event.key === "%") {
        calculatePercentage();
    }
});

document.getElementById("year").textContent = new Date().getFullYear();

resetCalculator();

console.log("CalcPro JavaScript loaded successfully.");