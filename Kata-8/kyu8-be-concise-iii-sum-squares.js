// https://www.codewars.com/kata/be-concise-iii-sum-squares/train/javascript

// Be Concise III - Sum Squares
// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.

// Refactor this
// function sumSquares(array) {
//     var result = 0;
//     for (let i = 0; i < array.length; i++) {
//       result += array[i] ** 2;
//     }
//     return result;
// }

// My Answer
// const sumSquares = arr => arr.map(e => e ** 2).reduce((acc, curr) => acc + curr);

// Best Practice - better way with reduce without using .map
const sumSquares = arr => arr.reduce((acc, curr) => acc + curr * curr, 0);

console.log(sumSquares([1,2,3,4,5]), 55);
console.log(sumSquares([7,3,9,6,5]), 200);
console.log(sumSquares([11,13,15,18,2]), 843);
console.log(sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5]), 110);
