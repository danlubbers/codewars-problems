// https://www.codewars.com/kata/js-golfing-number-2-math-dot-floor

// Round down the number with no more than 8 characters.

// My Answer
x=a=>~~a

// Best Practice 
x=a=>0|a;

console.log(x(1.5), 1);
console.log(x(1.1), 1);
console.log(x(9.9), 9);