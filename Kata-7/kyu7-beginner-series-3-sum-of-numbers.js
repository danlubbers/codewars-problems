// https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// My Answer
function GetSum(a, b) {
    let total = 0;
    if (a > b) {
        for(let i = b; i <= a; i++) {
            total += i
        } 
    } else {
        for(let j = a; j <= b; j++) {
        total += j
        }
    }
    return total
};

// Best Practice
function GetSum(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

console.log(GetSum(0,-1),-1);
console.log(GetSum(0,1),1);
console.log(GetSum(1, 2))  // 1 + 2 = 3
console.log(GetSum(0, 1))   // 0 + 1 = 1