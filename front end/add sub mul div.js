// Addition function
function add(a, b) {
  return a + b;
}

// Subtraction function
function subtract(a, b) {
  return a - b;
}

// Multiplication function
function multiply(a, b) {
  return a * b;
}

// Division function
function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

// Example usage:
console.log("Add: 5 + 3 =", add(5, 3));          // 8
console.log("Subtract: 5 - 3 =", subtract(5, 3)); // 2
console.log("Multiply: 5 * 3 =", multiply(5, 3)); // 15
console.log("Divide: 5 / 3 =", divide(5, 3));     // 1.666...
console.log("Divide: 5 / 0 =", divide(5, 0));     // Error: Division by zero