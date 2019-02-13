// https://www.codewars.com/kata/array-plus-array

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// My Answer
function arrayPlusArray(arr1, arr2) {
    let a1 = arr1.reduce((acc, val) => acc + val, 0);
    let a2 = arr2.reduce((acc, val) => acc + val, 0);
    return a1 + a2;
}

// Best Practice
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

// Using Spread Operator
function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);