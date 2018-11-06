// https://www.codewars.com/kata/sum-without-highest-and-lowest-number

// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// My Answer
function sumArray(arr) {
    let sum = 0;
      if(arr !== null && arr.length !== 0) {
          arr.sort((a, b) => a - b)
          arr.shift()
          arr.pop()
          sum = arr.reduce((acc, curr) => {
          return acc + curr
          },0)
          return sum;
      } else {
        return sum;
      }
  }

console.log((sumArray([ 6, 2, 1, 8, 10 ])))