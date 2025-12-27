🧮 Movable Calculator App

A beautifully designed movable (draggable) calculator with a cute, image-based retro UI. The calculator can be freely dragged anywhere on the screen, providing a desktop-like interactive experience. Built using HTML, CSS, and Vanilla JavaScript as part of a hands-on project challenge.

<p align="center"> <img src="images/cute-calculator.png" alt="Calculator Preview" width="400"> </p>
✨ Features
🎨 Design

Cute Image-Based UI: Custom calculator design using a background image

Retro Look & Feel: Soft pastel colors and playful layout

Smooth Interaction: Clean transitions and responsive clicks

Minimal UI: No unnecessary icons or headers for a clean appearance

🖱️ Movable / Draggable Window ⭐

Drag Anywhere: Click and drag the calculator to move it across the screen

Desktop-like Experience: Mimics movable app windows

Mouse-Based Drag Support: Smooth and responsive movement

🔢 Functionality

Basic Arithmetic Operations: Addition (+), Subtraction (-), Multiplication (×), Division (/)

Real-time Display: Shows current input and expression

Continuous Calculations: Chain multiple operations smoothly

Error Handling: Prevents division by zero

Smart Input Reset: Clears automatically after result when starting a new calculation

⌨️ Keyboard Support

Number Keys (0–9): Input numbers

Operators (+, -, *, /): Perform calculations

Enter / =: Calculate result

Escape / C: Clear calculator

🚀 Getting Started
Prerequisites

Any modern web browser (Chrome, Firefox, Edge, Safari)

Installation

Clone the repository

git clone https://github.com/YOUR-USERNAME/Calculator.git
cd Calculator


Run the Project

Simply open index.html in your browser
OR

Use a local server:

python -m http.server 8000


Then open: http://localhost:8000

📂 Project Structure
Calculator/
├── index.html        # Calculator structure
├── style.css         # Image-based styling
├── script.js         # Calculator logic + drag functionality
├── README.md         # Documentation
└── images/
    └── cute-calculator.png

🎯 How to Use

Click & Drag the calculator to move it anywhere on the screen

Click Numbers (0–9) to enter values

Choose Operator (+, −, ×, /)

Press "=" or Enter to get result

Start New Calculation by pressing any number after result

Clear using C or Esc

💻 Code Highlights
🖱️ Drag & Move Functionality
let isDragging = false;
let offsetX, offsetY;

calculator.addEventListener("mousedown", e => {
  isDragging = true;
  offsetX = e.clientX - calculator.offsetLeft;
  offsetY = e.clientY - calculator.offsetTop;
});

document.addEventListener("mousemove", e => {
  if (isDragging) {
    calculator.style.left = e.clientX - offsetX + "px";
    calculator.style.top = e.clientY - offsetY + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

Smart Input Reset
let shouldResetOnNextInput = false;

resultButton.addEventListener('click', () => {
  calculate();
  shouldResetOnNextInput = true;
});

Division by Zero Protection
case '/':
  if (current === 0) {
    alert('Cannot divide by zero!');
    clear();
    return;
  }

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Image-based UI, layout, responsiveness

Vanilla JavaScript – Calculator logic, keyboard handling, drag functionality

🔮 Future Enhancements

 Add decimal support

 Add backspace/delete key

 Add sound effects on button click

 Touch support for mobile dragging

 Save calculator position (localStorage)

 Dark / light themes

 Scientific calculator mode

📝 Learning Outcomes

This project helped me learn:

JavaScript state management

DOM event handling

Mouse events for drag & drop

Image-based UI alignment

Clean project structuring

Improving UX with small interactions

👩‍💻 Author

Charvi Singh

GitHub: https://github.com/charvi-web

Project Type: Frontend Mini Project

📄 License

This project is open-source and free to use for learning and personal projects.