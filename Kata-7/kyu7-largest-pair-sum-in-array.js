// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

// Given an array of numbers, find the largest pair sum in the array.

// For example

// [10,14,2,23,19] should return 42 (i.e. sum of 23,19)

// [99,2,2,23,19] should return 122 (i.e. sum of 99,23)

// Input array contains minimum two elements and every element is a number.

// My Answer
function largestPairSum(numbers) {
    return numbers.sort((a, b) => b - a).slice(0, 2).reduce((acc, curr) => acc + curr);
}

// Best Practice
function largestPairSum(numbers){
  numbers.sort(function(a, b){ return b - a });
  return numbers[0] + numbers[1];
}

console.log(largestPairSum([-10, -8, -16, -18, -19]), -18);