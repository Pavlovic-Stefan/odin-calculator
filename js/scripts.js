// Basic Math Operations
// add
function add(num1, num2){
    return Number(num1)+Number(num2);
}
// subtract
function subtract(num1, num2){
    return Number(num1)-Number(num2);
}
// multiply
function multiply(num1, num2){
    return Number(num1)*Number(num2);
}
// divide
function divide(num1, num2){
    return Number(num1)/Number(num2);
}
// result
function equals(){
    number2 = resultDisplay.textContent;
    result = operate(number1, number2, operator);
    pastDisplay.textContent = `${number1} ${opSign} ${number2} =`;
    resultDisplay.textContent = result;
    number1 = result;
    equalsCheck = true;
    number2 = 0;
    result = 0;
    operator = 'add';

}
// clear
function clear(){
    number1 = 0;
    operator = 'add';
    number2 = 0;
    result = 0;
    opSign = '+';
    equalsCheck = false;
    resultDisplay.textContent = 0;
    pastDisplay.textContent = 0;
}

//
function operate(num1, num2 ,operator){
    return window[operator](num1, num2);
}

let number1 = 0;
let operator = 'add';
let number2 = 0;
let result = 0;
let opSign = '+';
let equalsCheck = false;


const resultDisplay = document.querySelector('.result');
//
function calculatorDisplay(toDisplay){
    if (resultDisplay.textContent == number1){resultDisplay.textContent = 0}
    // if it contains 0 and doesn't contain '.', empty display, else do nothing
    (resultDisplay.textContent == 0 && !resultDisplay.textContent.includes('.')) ? resultDisplay.textContent = '' : null ;
    // if it's empty and input is '.', add a 0, else do nothing
    (resultDisplay.textContent == '' && toDisplay == '.') ? resultDisplay.textContent += 0 : null ;
    // if input is '.' and there already exists a '.', don't add anything, else add to display
    (toDisplay == '.' && resultDisplay.textContent.includes('.')) ? null : resultDisplay.textContent += toDisplay;
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button=>button.addEventListener('click', ()=>calculatorDisplay(button.textContent)));

const pastDisplay = document.querySelector('.past');


// 12 + 7 - 5 * 3 = 42
const operatorButtons = document.querySelectorAll('.opera > button');
operatorButtons.forEach(button=>button.addEventListener('click', () => {
    if (equalsCheck){
        equalsCheck = false;
        number2 = 0;
        result = operate(number1, number2, operator);
        pastDisplay.textContent = `${result} ${button.textContent}`
        operator = button.classList.value;
        opSign = button.textContent;
        resultDisplay.textContent = result;
        number1 = result;
        return;
    }
    number2 = resultDisplay.textContent;
    result = operate(number1, number2, operator);
    pastDisplay.textContent = `${result} ${button.textContent}`
    operator = button.classList.value;
    opSign = button.textContent;
    resultDisplay.textContent = result;
    number1 = result;
} ));

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', ()=> equals());