// https://www.codewars.com/kata/closest-elevator/train/javascript

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The called floor, i.e. the floor you want to reach
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

// My Answer
function elevator(left, right, call){
    if (left === right && right === call) return 'right';
    else if (left === call) return 'left';
    else if(left < right && call === 0) return 'left'
    if(left > right && call - left === 1) return 'left'
    return 'right';
}

// Best Practice
function elevator(left, right, call) {
    return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
}

console.log(elevator(0, 1, 1)); // => "right"
console.log(elevator(0, 1, 2)); // => "right"
console.log(elevator(0, 0, 0)); // => "right"
console.log(elevator(0, 2, 1)); // => "right"
console.log(elevator(1, 1, 1)); // => "right
console.log(elevator(2, 0, 1)); // => "right

console.log(elevator(1, 2, 0)); // => "left
console.log(elevator(0, 1, 0)); // => "left"
console.log(elevator(1, 0, 2)); // => "left


