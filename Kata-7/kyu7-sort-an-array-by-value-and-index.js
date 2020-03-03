// https://www.codewars.com/kata/58e0cb3634a3027180000040/train/javascript

// Sort an array by value and index
// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

// My Answer
function sortByValueAndIndex(array) {
  return array.map((e, i) => ({e, i: i + 1}))
              .sort((a, b) => a.e * a.i - b.e * b.i) 
              .map(({e}) => e);
}

// Best Practice
function sortByValueAndIndex(arr) {
  return arr
      .map((e, i) => [e, e * i + e])
      .sort((a, b) => a[1] - b[1])
      .map(e => e[0])
}

// Mix of For Loop and Higher Order Functions
function sortByValueAndIndex(arr) {
  let multiplied = arr.map((e, i) => e * (i + 1));

  let result = [];
  let final = [];

  for (let i = 0; i < arr.length; i++) {
    result.push([arr[i], multiplied[i]])
  } 

  let sorted = result.sort((a, b) => a[1] - b[1]);

  for(let i = 0; i < arr.length; i++) {
    final.push(sorted[i][0])
  }

  return final;
  
}

console.log(sortByValueAndIndex([ 1, 2, 3, 4, 5 ])); // [ 1, 2, 3, 4, 5 ];      
console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ])); // [ 2, 3, 4, 23, 5 ];    
console.log(sortByValueAndIndex([ 26, 2, 3, 4, 5 ])); // [ 2, 3, 4, 5, 26 ];    
console.log(sortByValueAndIndex([ 9, 5, 1, 4, 3 ])); // [ 1, 9, 5, 3, 4 ];      