/* ================= CALCULATOR LOGIC ================= */

let currentInput = '';
let previousInput = '';
let operation = null;
let shouldResetOnNextInput = false;

const resultDisplay = document.getElementById('result');
const expressionDisplay = document.getElementById('expression');

// Buttons
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const resultButton = document.querySelector('.result-btn');

// OPTIONAL buttons (safe check)
const closeButton = document.querySelector('.close');
const minimizeButton = document.querySelector('.minimize');

/* ========== NUMBER BUTTONS ========== */
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;

    if (shouldResetOnNextInput) {
      currentInput = '';
      previousInput = '';
      operation = null;
      shouldResetOnNextInput = false;
    }

    if (currentInput === '0' && number === '0') return;

    currentInput += number;
    updateDisplay();
  });
});

/* ========== OPERATOR BUTTONS ========== */
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const op = button.textContent;
    if (currentInput === '') return;

    shouldResetOnNextInput = false;

    if (previousInput !== '') {
      calculate();
    }

    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
  });
});

/* ========== RESULT BUTTON ========== */
resultButton.addEventListener('click', () => {
  calculate();
  operation = null;
  shouldResetOnNextInput = true;
});

/* ========== OPTIONAL WINDOW BUTTONS ========== */
if (closeButton) {
  closeButton.addEventListener('click', () => {
    alert('Calculator closed!');
  });
}

if (minimizeButton) {
  minimizeButton.addEventListener('click', () => {
    alert('Calculator minimized!');
  });
}

/* ========== CALCULATE FUNCTION ========== */
function calculate() {
  if (previousInput === '' || currentInput === '' || operation === null) return;

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '×':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero!');
        clear();
        return;
      }
      result = prev / current;
      break;
  }

  currentInput = result.toString();
  previousInput = '';
  updateDisplay();
}

/* ========== UPDATE DISPLAY ========== */
function updateDisplay() {
  resultDisplay.textContent = currentInput || '0';

  if (previousInput && operation) {
    expressionDisplay.textContent = `${previousInput} ${operation} ${currentInput || ''}`;
  } else {
    expressionDisplay.textContent = '';
  }
}

/* ========== CLEAR ========== */
function clear() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay();
}

/* ========== KEYBOARD SUPPORT ========== */
document.addEventListener('keydown', e => {
  if (e.key >= '0' && e.key <= '9') {
    if (shouldResetOnNextInput) {
      clear();
      shouldResetOnNextInput = false;
    }
    currentInput += e.key;
    updateDisplay();
  }

  if (['+', '-', '*', '/'].includes(e.key)) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();

    operation = e.key === '*' ? '×' : e.key;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
  }

  if (e.key === 'Enter' || e.key === '=') {
    calculate();
    operation = null;
    shouldResetOnNextInput = true;
  }

  if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
    clear();
  }
});

/* ================= DRAG (MOVE) FUNCTIONALITY ================= */

const calculator = document.getElementById('calculator');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

calculator.addEventListener('mousedown', e => {
  isDragging = true;
  offsetX = e.clientX - calculator.offsetLeft;
  offsetY = e.clientY - calculator.offsetTop;
});

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  calculator.style.left = e.clientX - offsetX + 'px';
  calculator.style.top = e.clientY - offsetY + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

/* ========== INITIALIZE ========== */
updateDisplay();
