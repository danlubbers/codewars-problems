// https://www.codewars.com/kata/debug-the-functions-easy/train/javascript

// Should be easy, begin by looking at the code. Debug the code and the functions should work.

// There are three functions:
// Multiplication (x)
// Addition (+)
// and
// Reverse (!esreveR)

// My Answer & Best Practice
function multi(arr) {
  return arr.reduce((acc, val) => acc *= val);
}
function add(arr) {
  return arr.reduce((acc, val) => acc += val);
}
function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(multi([5, 1, 5]), 25);
console.log(add([9, 8, 5]), 22);
console.log(reverse('tah'), 'hat');
