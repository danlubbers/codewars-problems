// https://www.codewars.com/kata/what-is-between/train/javascript

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4] 

// My Answer & Best Practice
function between(a, b) {
  let finalArr = [];

  for(let i = a; i <= b; i++) {
    finalArr.push(i);
  }
  return finalArr;
}

// Most Clever
function between(a, b) {
  return Array.from({length: (b - a + 1)}, (e, i) => a + i);
}

console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);
