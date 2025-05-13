const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let expression = "";

// Handle button click
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value) {
      expression += value;
      display.value = expression;
    }
  });
});

// Clear input
clear.addEventListener("click", () => {
  expression = "";
  display.value = "";
});

// Handle calculation
equals.addEventListener("click", () => {
  try {
    if (expression === "") return;
    const result = eval(expression); // Use with caution
    display.value = result;
    expression = result.toString();
  } catch (err) {
    display.value = "Error";
    expression = "";
  }
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.";
  if (allowedKeys.includes(e.key)) {
    expression += e.key;
    display.value = expression;
  } else if (e.key === "Enter") {
    equals.click();
  } else if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
    display.value = expression;
  } else if (e.key === "Escape") {
    clear.click();
  }
});
