let currentInput = '';
let previousInput = '';
let operation = null;
let shouldResetOnNextInput = false;

const resultDisplay = document.getElementById('result');
const expressionDisplay = document.getElementById('expression');
const clickSound = document.getElementById('click-sound');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const resultButton = document.querySelector('.result-btn');
const clearButton = document.querySelector('.clear');
const themeSelect = document.getElementById('theme-select');

// Button click with ripple + sound
function buttonClickEffect(btn) {
    clickSound.currentTime = 0;
    clickSound.play();
    btn.classList.add('ripple');
    setTimeout(() => btn.classList.remove('ripple'), 300);
}

// Number
numberButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        buttonClickEffect(btn);
        if(shouldResetOnNextInput){ clear(); shouldResetOnNextInput=false; }
        currentInput += btn.textContent;
        updateDisplay();
    });
});

// Operator
operatorButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        buttonClickEffect(btn);
        if(!currentInput) return;
        if(previousInput) calculate();
        operation = btn.textContent;
        previousInput = currentInput;
        currentInput='';
        updateDisplay();
    });
});

// Result
resultButton.addEventListener('click', ()=>{
    buttonClickEffect(resultButton);
    calculate();
    shouldResetOnNextInput=true;
});

// Clear
clearButton.addEventListener('click', ()=>{
    buttonClickEffect(clearButton);
    clear();
});

// Theme toggle
themeSelect.addEventListener('change', ()=>{
    document.body.className = themeSelect.value;
});

// Calculate
function calculate(){
    if(!previousInput || !currentInput || !operation) return;
    const prev=parseFloat(previousInput);
    const curr=parseFloat(currentInput);
    let res;
    switch(operation){
        case '+': res = prev+curr; break;
        case '-': res = prev-curr; break;
        case '×': res = prev*curr; break;
        case '/': 
            if(curr===0){ alert("Cannot divide by zero!"); clear(); return;}
            res = prev/curr; break;
    }
    currentInput = res.toString();
    previousInput='';
    animateResult();
    updateDisplay();
}

// Update Display
function updateDisplay(){
    resultDisplay.textContent = currentInput || '0';
    expressionDisplay.textContent = previousInput && operation ? `${previousInput} ${operation}` : '';
}

// Clear
function clear(){
    currentInput=''; previousInput=''; operation=null; updateDisplay();
}

// Animate Result
function animateResult(){
    resultDisplay.style.transform='scale(1.2)';
    resultDisplay.style.color='var(--particle-color)';
    setTimeout(()=>{
        resultDisplay.style.transform='scale(1)';
        resultDisplay.style.color='var(--text-color)';
    },300);
}
