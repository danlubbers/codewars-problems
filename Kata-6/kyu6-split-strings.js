// https://www.codewars.com/kata/split-strings/train/javascript

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// My Answer
function solution(str){
  const pairs = str.match(/.{1,2}/g);
  return pairs.map(e => e.length < 2 ? e + '_' : e);
}

// Best Practice
function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}

// Shorter
function solution(str) {
  return (str + '_').match(/../g);
}

console.log(solution('abc')); // should return ['ab', 'c_']
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']
