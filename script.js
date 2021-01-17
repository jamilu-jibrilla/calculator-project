let display = document.querySelector('.display');
let numButtons = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equals = document.querySelector('#equals');
let clear = document.querySelector('.clear');
let dotNotation = document.querySelector('#dot')
let subtrSign = document.querySelector('#subtr')

let firstValue = null;
let currentValue = 0
let secondValue = null
let operator =  null;
let equalsTo = false

display.textContent = currentValue

function displayValues(e) {
    if (currentValue === 0) {
        currentValue = ''
    }
    let num = e.target.innerText
    currentValue += num
    display.innerText = currentValue
}

function clearDisplay() {
    display.innerText = 0
    currentValue = 0
    secondValue = null
    firstValue = null
    operator = null
}

function operate(opr, num1, num2) {
    num1 = +num1
    num2 = +num2

    switch (opr) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2)
        case '/':
            return divide(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '%':
            return percentage(num1, num2)
    }
}

function operand(e) {
    if(equalsTo === true) {
        operator = e.target.innerText
        equalsTo = false
    }
    // debugger
    //when operator is pressed current = first
    if (firstValue !== null) {
        secondValue = currentValue
    } else {
        firstValue = currentValue
        operator = e.target.innerText
    }
    currentValue = 0
    console.log('a' +operator)
    console.log('a' +firstValue)
    console.log('a' +secondValue)
    
    if(secondValue) {
        let result = operate(operator, +firstValue, +secondValue)
        // result = result.toFixed(4);
        display.innerText = result
        firstValue = result
        operator = e.target.innerText
    }
}




function results() {
    secondValue = currentValue
    if(!operator || (firstValue === null) ||!secondValue) {
        clearDisplay()
        return
    }
    let result = operate(operator,firstValue, secondValue)
    firstValue = result
    currentValue = 0
    display.innerText = result
    equalsTo = true
    console.log('b' +operator)
    console.log('b' +firstValue)
    console.log('b' +secondValue)
    
}


function add(a, b) {
    return a + b;
}
function percentage(a, b) {
    return a % b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    let ans = a / b;
    return ans;
}
function multiply(a, b) {
    return a * b
}

dotNotation.addEventListener('click', function(){
    if(currentValue.indexOf('.') !== -1) return
    currentValue += '.'
    display.innerText += '.'

})
subtrSign.addEventListener('click', function() {
    if(currentValue.indexOf('-') !== -1) return
    currentValue = '-' + currentValue
    display.innerText = currentValue
})
equals.addEventListener('click',results);

clear.addEventListener('click', clearDisplay);

for (let button of numButtons) {
    button.addEventListener('click', displayValues)
}

for (let operator of operators) {
    operator.addEventListener('click', operand)
}

