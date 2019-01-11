// https://www.codewars.com/kata/basic-mathematical-operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples:

// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

// My Answer
function basicOp(operation, val1, val2) {
    if(operation === '+') {
        return val1 + val2;
    } else if(operation === '-') {
        return val1 - val2;
    } else if(operation === '*') {
        return val1 * val2;
    } else if(operation === '/') {
        return val1 / val2;
    }
}

// Best Practice SWITCH STATEMENT
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// Shortest Way
function basicOp(operation, val1, val2) {
    return eval(val1 + operation + val2);
}

console.log((basicOp('+', 4, 7)))
console.log((basicOp('-', 15, 18)))