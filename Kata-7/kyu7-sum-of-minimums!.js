// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

// For Example:

// [
//   [1, 2, 3, 4, 5], // minimum value of row is 1
//   [5, 6, 7, 8, 9], // minimum value of row is 5
//   [20, 21, 34, 56, 100] // minimum value of row is 20
// ]
// So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

// Note: You will be always given non-empty array containing Positive values.

// My Answer
function sumOfMinimums(arr) {
  return arr.map(e => Math.min.apply(Math, e)).reduce((acc, curr) => acc + curr, 0);
}

// Best Practice
function sumOfMinimums(arr) {
  return arr.reduce((acc, curr) => acc + Math.min(...curr), 0)
}

// Using for loop
function sumOfMinimums(arr) {
  let total = 0;

  for(let i = 0; i < arr.length; i++) {
    total += Math.min(...arr[i])
  }
  return total;
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9);
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76);