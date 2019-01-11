// https://www.codewars.com/kata/find-maximum-and-minimum-values-of-a-list/train/javascript

// Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

// #Examples

// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0

// My Answer
function min(arr) {
    return Math.min(...arr)
}

function max(arr) {
    return Math.max(...arr)
}

// ES6
const min = arr => Math.min(...arr)
const max = arr => Math.max(...arr)

console.log(max([4,6,2,1,9,63,-134,566]))// returns 566
console.log(min([-52, 56, 30, 29, -54, 0, -110])) // returns -110
console.log(max([5])) // returns 5
console.log(min([42, 54, 65, 87, 0])) // returns 0