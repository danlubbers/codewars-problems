// https://www.codewars.com/kata/count-letters-in-string/train/javascript

// In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

// Example:

// letter_count('arithmetics') #=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

// My Answer
function letterCount(str) {
  let obj ={};
  
  for(let i = 0; i < str.length; i++) {
    if(typeof obj[str[i]] === 'undefined') {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] = obj[str[i]] + 1;
    }
  }

  return obj;
  
}

// Best Practice
function letterCount(str) {
  let result = {};
    str.split('').sort((a, b) => a - b).map(e => result[e] ? result[e]++ : result[e] = 1);

    return result;
}

// Using Reduce
function letterCount(str) {
  return str.split('').reduce((acc, currVal) => {
    acc[currVal] = acc[currVal] ? acc[currVal] + 1 : 1;
    return acc
  }, {});
}

// console.log(letterCount("codewars"), {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1});
// console.log(letterCount("activity"), {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1});
// console.log(letterCount("arithmetics"), {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2});
console.log(letterCount("traveller"), {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1});
// console.log(letterCount("daydreamer"), {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1});
