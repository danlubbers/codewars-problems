// https://www.codewars.com/kata/to-square-root-or-not-to-square-root/train/javascript

// #To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// The input array will always contain only positive numbers and will never be empty or null.

// The input array should not be modified!

// My Answer & Best Practice
function squareOrSquareRoot(arr) {
    return arr.map(e => Math.sqrt(e) % 1 == 0 ? Math.sqrt(e) : e * e);
}

var input = [ 4, 3, 9, 7, 2, 1 ];
var expected = [ 2, 9, 3, 49, 4, 1 ];
console.log(squareOrSquareRoot(input), expected);

input = [ 100, 101, 5, 5, 1, 1 ];
expected = [ 10, 10201, 25, 25, 1, 1 ];
console.log(squareOrSquareRoot(input), expected);

input = [ 1, 2, 3, 4, 5, 6 ];
expected = [ 1, 4, 9, 2, 25, 36 ];
console.log(squareOrSquareRoot(input), expected);