// https://www.codewars.com/kata/beginner-reduce-but-grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// My Answer
function grow(arr){
   return arr.reduce((acc, curr) => acc * curr)
}

console.log((grow([1, 2, 3]))) // 6;
console.log((grow([4, 1, 1, 1, 4]))) // 16
console.log((grow([2, 2, 2, 2, 2, 2]))) // 64 