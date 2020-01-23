// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

// Given an vector of numbers, determine whether the sum of all of the numbers is odd or even.

// Give your answer as a String matching 'odd' or 'even'.

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// odd_or_even(vec![0]) returns "even"
// odd_or_even(vec![0, 1, 4]) returns "odd"
// odd_or_even(vec![0, -1, -5]) returns "even"

// My Answer
function oddOrEven(array) {
  return array.length === 0 ? 'even' : array.reduce((acc, curr) => acc + curr) % 2 === 0 ? 'even' : 'odd';
}

// Best Practice
function oddOrEven(array) {
  return array.reduce((acc, curr) => acc + curr, 0) % 2 ? 'odd' : 'even';
}

console.log(oddOrEven([0]), 'even')
console.log(oddOrEven([1]), 'odd')
console.log(oddOrEven([]), 'even')
  
  
  
console.log(oddOrEven([0, 1, 5]), 'even')
console.log(oddOrEven([0, 1, 3]), 'even')
console.log(oddOrEven([1023, 1, 2]), 'even')
  
  
  
console.log(oddOrEven([0, -1, -5]), 'even')
console.log(oddOrEven([0, -1, -3]), 'even')
console.log(oddOrEven([-1023, 1, -2]), 'even')
  
  
  
console.log(oddOrEven([0, 1, 2]), 'odd')
console.log(oddOrEven([0, 1, 4]), 'odd')
console.log(oddOrEven([1023, 1, 3]), 'odd')
  
  
  
console.log(oddOrEven([0, -1, 2]), 'odd')
console.log(oddOrEven([0, 1, -4]), 'odd')
console.log(oddOrEven([-1023, -1, 3]), 'odd')
  