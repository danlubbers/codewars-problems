// https://www.codewars.com/kata/basic-js-building-a-calculator/train/javascript

// Let's build a calculator.

// This is very basic Javascript kata.

// The test expects you to provide a Calculator object with the following methods:

// Calculator.add()
// Calculator.subtract()
// Calculator.multiply()
// Calculator.divide()
// Each method expects two arguments, so for instance:

// Calculator.add(1,4) should return 5.

// Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.

// My Answer & Best Practice
var Calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },
  
  divide(a, b) {
    if(b !== 0) return a / b;
    else return false;
    // Use Ternary
    // return b !== 0 ? a / b : false;
  }
};


console.log(Calculator.add(2, 2));
console.log(Calculator.subtract(4, 2));
console.log(Calculator.multiply(3, 2));
console.log(Calculator.divide(8, 2));
console.log(Calculator.divide(8, 0));
