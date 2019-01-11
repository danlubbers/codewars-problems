// https://www.codewars.com/kata/return-negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// My Answer
function makeNegative(num) {
    return num >= 0 ? -num : num;
}

// Best Practices
function makeNegative(num) {
    return -Math.abs(num);
}

console.log(makeNegative(42));