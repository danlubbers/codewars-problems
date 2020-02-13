// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

// My Answer Regex
function solution(str) { 
   return str.replace(/([A-Z])/g, ' $1').trim()
}

// Looping answer
function solution(str) {
  return str.split('').map(e => e === e.toUpperCase() ? e = ' ' + e : e).join('');
}


console.log(solution('camelCasing'), 'camel Casing')
console.log(solution('camelCasingTest'), 'camel Casing Test')
