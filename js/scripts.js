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
// operate
function operate(num1, num2 ,operator){
    return window[operator](num1, num2);
}
// clear
function clear(){
    pastScreen.textContent = 0;
    resultScreen.textContent = 0;
    sign = 'add';
    clearQuestion = true;
}
// update result screen
function addToDisplay(numberToDisplay){
    // resultScreen.textContent == 0 ? resultScreen.textContent = '' : null;
    resultScreen.textContent += numberToDisplay;
}
// clear result screen 
function clearResultScreen(){
    resultScreen.textContent = '';
}
// Div that displays last number and operator
const pastScreen = document.querySelector('.past');
// Div that displays current user input and last result
const resultScreen = document.querySelector('.result');
// Equals
const equalsButton = document.querySelector('.equals');
// Separator
const separator = document.querySelector('.separator');
// Clear
const clearButton = document.querySelector(".clear");
// Backspace
const undoButton = document.querySelector(".backspace");
// Numpad
const numberButtons = document.querySelectorAll('.number');
// Operators
const operatorButtons = document.querySelectorAll('.opera > button');
// sign
let sign = 'add'
// to clear or not to clear
let clearQuestion = true;

// addEventListener

// on click add number to resultDisplay
numberButtons.forEach(button => button.addEventListener('click', () => {
    if (clearQuestion) {
        clearQuestion = false;
        clearResultScreen();
    }
    addToDisplay(button.textContent);
}));

// on click, operate on last 2 numbers, set resultDisplay to result
operatorButtons.forEach(button => button.addEventListener('click', ()=>{
    if (clearQuestion) {
        pastScreen.textContent = `${resultScreen.textContent} ${button.textContent} `;
        sign = button.classList.value;
        return
    };
    let result = operate(pastScreen.textContent.split(' ')[0], resultScreen.textContent, sign);
    pastScreen.textContent = `${result} ${button.textContent} `;
    resultScreen.textContent = result;
    sign = button.classList.value;
    clearQuestion = true;
}));

// on click do math
equalsButton.addEventListener('click', ()=>{
    result = operate(pastScreen.textContent.split(' ')[0], resultScreen.textContent, sign);
    pastScreen.textContent = `${pastScreen.textContent} ${resultScreen.textContent} =`
    resultScreen.textContent = result;
    clearQuestion = true;
});

// add separator
separator.addEventListener('click', () => {
    if (!resultScreen.textContent.includes('.')){
        resultScreen.textContent += '.';
        clearQuestion=false;
    }
})

// on click clear
clearButton.addEventListener('click', () => clear());

// remove last number from result screen
undoButton.addEventListener('click', () => {
    resultScreen.textContent = resultScreen.textContent.slice(0, -1);
    if (resultScreen.textContent == ''){
        resultScreen.textContent = 0;
        clearQuestion=true;
    }
})