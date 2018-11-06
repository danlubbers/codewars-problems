// https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.\

const maps = arr => arr.map(e => e * 2)

console.log((maps([1, 2, 3])));
console.log((maps([4, 1, 1, 1, 4]))); 
console.log((maps([2, 2, 2, 2, 2, 2])));