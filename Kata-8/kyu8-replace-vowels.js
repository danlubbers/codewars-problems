// https://www.codewars.com/kata/replace-vowels/train/javascript

// Create a function to replace all vowels (aeiou) of string for ?, example:

// replaceVogals('lorem ipsum') => 'l?r?m ?ps?m'

// My Answer and Best Practice
function replaceVogals(str) {
  return str.replace(/[aeiou]/gi, '?');
}

console.log(replaceVogals('a'), '?');
console.log(replaceVogals('ab'), '?b');