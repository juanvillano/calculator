const display = document.querySelector(".display");
const numbers = document.querySelectorAll('button:not(.no-display)');
const operands = document.querySelectorAll('button.orange-button');
const ac = document.querySelectorAll('.dark-button.no-display');

let firstValue = 0;
let operand = '';
let secondValue = 0;
let result = 0;

//add
function add(one, two) {
    return Math.floor(parseInt(one) + parseInt(two));
}

//subtract
function subtract(one, two) {
    return Math.floor(parseInt(one) - parseInt(two));
}

//multiply
function multiply(one, two) {
    return Math.floor(parseInt(one) * parseInt(two));
}

//divide
function divide(one, two) {
    return Math.floor(parseInt(one) / parseInt(two));
}

// operate
function operate(firstNumber, operand, secondNumber) {
    switch(operand) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case 'x':
            return multiply(firstNumber, secondNumber);
        case '÷':
            return divide(firstNumber, secondNumber);
    }
}

// show numbers on display
numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        let num = e.currentTarget.textContent;
        if(!firstValue) {
            firstValue = num;
            console.log("first number:", firstValue);
        } else if (firstValue && !secondValue) {
            secondValue = num;
            console.log('second number:', secondValue);
        }
            display.textContent = num;
    })
});

// operands
operands.forEach(operative => {
    operative.addEventListener("click", (e) => {
        e.preventDefault();
        let symbol = e.currentTarget.textContent;
        
        // if symbol is different than = sign
        if(symbol != '=') {
            // if values already contain data evaluate operation
            if(firstValue && secondValue && operand) {
                result = operate(firstValue, operand, secondValue);
                display.textContent = result;
                firstValue = result;
                operand = symbol;
                result = 0;
            // if operand has no data assign the current symbol
            } else {
                operand = symbol;
                console.log('new operand:', operand);
            }
        // if symbol is = sign and first and second number have data evaluate operation
        } else if (symbol === '=' && firstValue && secondValue) {
            result = operate(firstValue, operand, secondValue);
            // console.log('equals:', symbol);
            // console.log('number one:', firstValue);
            // console.log('number two:', secondValue);
            // console.log('result: ', result);
            display.textContent = result;
        }
    })
});

ac.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let button = e.currentTarget.textContent;

        if(button === 'AC') {
            display.textContent = '0';
            firstValue = 0;
            secondValue = 0;
            operand = '';
        }

    });
});