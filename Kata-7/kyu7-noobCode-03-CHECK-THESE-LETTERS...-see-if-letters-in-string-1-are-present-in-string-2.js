// https://www.codewars.com/kata/57470efebf81fea166001627/train/javascript

// Write a function that checks if the letters in the second string are present in the first:

// letterCheck(["trances", "nectar"]) // true
// letterCheck(["compadres", "DRAPES"]) // true
// letterCheck(["parses", "parsecs"]) //false
// Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.

// My Answer
function letterCheck(arr) {
  let lowerCaseArr = arr.map(e => e.toLowerCase())
 
  for(let i = 0; i < lowerCaseArr[1].length; i++) {
    if(lowerCaseArr[0].indexOf(lowerCaseArr[1][i]) === -1) return false
  }
  return true;
}

// Best Practice
function letterCheck(arr) {
  return [...arr[1].toLowerCase()].every(e => arr[0].toLowerCase().includes(e));
}

// This was my first guess but messed up the every method
function letterCheck(arr) {
  const arr1 = arr[0].toLowerCase().split('');
  const arr2 = arr[1].toLowerCase().split('');
  return arr2.every(e => arr1.includes(e));
}

console.log(letterCheck(["trances", "nectar"]), true)
console.log(letterCheck(["THE EYES", "they see"]), true)
console.log(letterCheck(["assert", "staring"]), false)
console.log(letterCheck(["arches", "later"]), false)
console.log(letterCheck(["dale", "caller"]), false)
console.log(letterCheck(["parses", "parsecs"]), false)
console.log(letterCheck(["replays", "adam"]), false)
console.log(letterCheck(["mastering", "streaming"]), true)
console.log(letterCheck(["drapes", "compadres"]), false)
console.log(letterCheck(["deltas", "slated"]), true)