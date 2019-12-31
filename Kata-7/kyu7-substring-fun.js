// https://www.codewars.com/kata/substring-fun/train/javascript

// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

// My Answer
function nthChar(words){
  let finalArr = [];

  for(let i = 0; i < words.length; i++) {
    finalArr.push(words[i][i]);
  }

  return finalArr.join('');
}

// Best Practice & Most Clever
function nthChar(words) {
  return words.reduce((acc, curr, idx) => acc + curr[idx], '');
}

// Using Map
function nthChar(words) {
  return words.map((e, i) => e[i]).join('');
}

console.log(nthChar(['yoda', 'best', 'has']), 'yes');
