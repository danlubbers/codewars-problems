// https://www.codewars.com/kata/use-reduce-to-calculate-the-sum-of-the-values-in-an-array/train/javascript

// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

// function sum(array) {
//     // Use array.reduce() to find and return the
//     // sum of the values in array.
//   }
//   For example:
  
//   var someNumbers = [1,2,3,4,5,6,7,8,9,10];
  
//   sum(someNumbers); // should return 55

// My answer
const sum = array => array.reduce((acc, curr) => acc + curr);

var test1 = [1,2,3,4,5,6,7,8,9,10];
var test2 = [71,-548,12.3,83,-47,-1.7,-892,58,31415,2718,-38];
  
console.log(sum(test1), 55);
console.log(sum(test2), 32830.6);