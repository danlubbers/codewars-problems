// https://www.codewars.com/kata/simple-multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My Answer
function simpleMultiplication(num) {
    return num % 2 === 0 ? num * 8 : num * 9;
}

// Best Practices
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

console.log(simpleMultiplication(2),16,'Should return given argument times eight...')
console.log(simpleMultiplication(1),9,'Should return given argument times nine...')
console.log(simpleMultiplication(8),64,'Should return given argument times eight...')