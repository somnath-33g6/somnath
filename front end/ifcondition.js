function calculator(num1, num2, operator) {
    let result;
    
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            return "Error: Division by zero is not allowed.";
        }
        result = num1 / num2;
    } else {
        return "Error: Invalid operator. Please use '+', '-', '*', or '/'.";
    }
    
    return result;
}

// Example usage:
console.log(calculator(10, 5, '+')); 
console.log(calculator(10, 5, '-')); 
console.log(calculator(10, 5, '*')); 
console.log(calculator(10, 5, '/')); 
console.log(calculator(10, 0, '/')); 
console.log(calculator(10, 5, '%'));