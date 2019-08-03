// https://www.codewars.com/kata/validate-code-with-simple-regex/train/javascript

// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

// My Answer & Best Practice
function validateCode (code) {
    return /^[1-3]/.test(code);
}

console.log(validateCode(123), true);
console.log(validateCode(248), true);
console.log(validateCode(8), false);
console.log(validateCode(321), true);
console.log(validateCode(9453), false);