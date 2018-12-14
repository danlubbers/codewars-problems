// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// My Answer to pass codewars test
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

// My Answer testing in VScode
function findSmallestInt(arr) {
    return Math.min(...arr)
}

console.log(findSmallestInt([78,56,232,12,8]))
console.log(findSmallestInt([78,56,232,12,18]))
console.log(findSmallestInt([78,56,232,412,228]))