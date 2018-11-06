// https://www.codewars.com/kata/square-n-sum

// Complete the square sum method so that it squares each number passed into it and then sums the results together.

// For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.

// My Answer
function squareSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }
    return sum
}

// ES6
const squareSum = numbers => numbers.reduce((acc, curr) => acc + curr * curr, 0);

console.log((squareSum([1,2]))) // 5
console.log((squareSum([0, 3, 4, 5]))) // 50