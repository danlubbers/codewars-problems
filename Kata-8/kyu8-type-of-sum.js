// https://www.codewars.com/kata/type-of-sum

// Return the type of the sum of the two arguments

// My Answer
function typeOfSum(a, b) {
    return typeof (a + b);
}

console.log(typeOfSum(12, 1), 'number');
console.log(typeOfSum('d', 1), 'string');
console.log(typeOfSum(1, 'a'), 'string');
console.log(typeOfSum('dd', ''), 'string');
console.log(typeOfSum(true, 1), 'number');
console.log(typeOfSum('s', false), 'string');
console.log(typeOfSum(null, 1), 'number');
console.log(typeOfSum('s', null), 'string');
console.log(typeOfSum(null, undefined), 'number');
console.log(typeOfSum(undefined, 're'), 'string');
console.log(typeOfSum(undefined, true), 'number');
console.log(typeOfSum(null, false), 'number');