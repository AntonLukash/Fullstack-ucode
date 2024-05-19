const resultElement = document.getElementById('result');
const historyElement = document.getElementById('history');
const extraButtons = document.getElementById('extraButtons');

let currentInput = '';
let history = '';
let operator = '';
let memory = 0;
let expressionBuffer = [];

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.id;

        switch (value) {
            case 'clear':
                clearAll();
                break;
            case 'sign':
                toggleSign();
                break;
            case 'percent':
                applyPercent();
                break;
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
                setOperator(value);
                break;
            case 'equals':
                calculate();
                break;
            case 'decimal':
                addDecimal();
                break;
            case 'factorial':
                calculateFactorial();
                break;
            case 'exponent':
                calculateExponent();
                break;
            case 'sqrt':
                calculateSqrt();
                break;
            case 'memRecall':
                memoryRecall();
                break;
            case 'memClear':
                memoryClear();
                break;
            case 'memPlus':
                memoryPlus();
                break;
            case 'memMinus':
                memoryMinus();
                break;
            case 'convertLength':
                convertLength();
                break;
            case 'convertWeight':
                convertWeight();
                break;
            case 'convertArea':
                convertArea();
                break;
            case 'convertNumeralSystem':
                convertNumeralSystem();
                break;
            case 'backspace':
                deleteLastCharacter();
                break;
                case 'openMenu':
                    openAddMenu();
                break;
            default:
                addNumber(value);
                break;
        }
    });
});

function openAddMenu() {
    extraButtons.classList.toggle('show');
}

function deleteLastCharacter() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        resultElement.textContent = currentInput || '0';
    }
}

function clearAll() {
    currentInput = '';
    history = '';
    operator = '';
    resultElement.textContent = '0';
    historyElement.textContent = '';
    expressionBuffer = [];
}

function toggleSign() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        resultElement.textContent = currentInput;
    }
}

function applyPercent() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        resultElement.textContent = currentInput;
    }
}

function setOperator(op) {
    if (currentInput) {
        history += currentInput + ' ' + getOperatorSymbol(op) + ' ';
        operator = op;
        currentInput = '';
        resultElement.textContent = '0';
        historyElement.textContent = history;
    }
}

function calculate() {
    if (currentInput) {
        history += currentInput;
        try {
            const result = evaluate(history);
            resultElement.textContent = result;
            expressionBuffer.push(history + ' = ' + result);
            updateHistory();
            history = '';
            currentInput = result.toString();
            operator = '';
        } catch (error) {
            resultElement.textContent = 'Error';
        }
    }
}

function addDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        resultElement.textContent = currentInput;
    }
}

function addNumber(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    resultElement.textContent = currentInput;
}

function getOperatorSymbol(op) {
    switch (op) {
        case 'divide':
            return '/';
        case 'multiply':
            return '*';
        case 'subtract':
            return '-';
        case 'add':
            return '+';
        default:
            return '';
    }
}

function evaluate(expression) {
    try {
        return Function('"use strict";return (' + expression + ')')();
    } catch (e) {
        throw new Error('Invalid expression');
    }
}

function calculateFactorial() {
    if (currentInput) {
        let number = parseInt(currentInput);
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        currentInput = result.toString();
        resultElement.textContent = currentInput;
        expressionBuffer.push(number + '! = ' + result);
        updateHistory();
    }
}

function calculateExponent() {
    if (currentInput) {
        let base = parseFloat(currentInput);
        let result = Math.pow(base, 2);
        currentInput = result.toString();
        resultElement.textContent = currentInput;
        expressionBuffer.push(base + '^2 = ' + result);
        updateHistory();
    }
}

function calculateSqrt() {
    if (currentInput) {
        let number = parseFloat(currentInput);
        let result = Math.sqrt(number);
        currentInput = result.toString();
        resultElement.textContent = currentInput;
        expressionBuffer.push('√' + number + ' = ' + result);
        updateHistory();
    }
}

function memoryRecall() {
    currentInput = memory.toString();
    resultElement.textContent = currentInput;
}

function memoryClear() {
    memory = 0;
}

function memoryPlus() {
    if (currentInput) {
        memory += parseFloat(currentInput);
    }
}

function memoryMinus() {
    if (currentInput) {
        memory -= parseFloat(currentInput);
    }
}

function convertLength() {
    if (currentInput) {
        let value = parseFloat(currentInput);
        let result = `${value} cm = ${(value / 100).toFixed(2)} m, ${(value / 100000).toFixed(5)} km`;
        resultElement.textContent = result;
        expressionBuffer.push(result);
        updateHistory();
    }
}

function convertWeight() {
    if (currentInput) {
        let value = parseFloat(currentInput);
        let result = `${value} g = ${(value / 1000).toFixed(2)} kg, ${(value / 1000000).toFixed(5)} tonnes`;
        resultElement.textContent = result;
        expressionBuffer.push(result);
        updateHistory();
    }
}

function convertArea() {
    if (currentInput) {
        let value = parseFloat(currentInput);
        let result = `${value} кв.см = ${(value / 10000).toFixed(2)} кв.м, ${(value / 100000000).toFixed(5)} кв.км, ${(value / 10000).toFixed(2)} гектар`;
        resultElement.textContent = result;
        expressionBuffer.push(result);
        updateHistory();
    }
}

function convertNumeralSystem() {
    if (currentInput) {
        let decimalValue = parseInt(currentInput);
        let binaryValue = decimalValue.toString(2);
        let hexadecimalValue = decimalValue.toString(16).toUpperCase();
         let result = `${decimalValue} = Binary: ${binaryValue}, Hex: ${hexadecimalValue}`;
        resultElement.textContent = result;
        expressionBuffer.push(result);
        updateHistory();
    }
}

function updateHistory() {
    historyElement.textContent = expressionBuffer.join(';\n');
}

