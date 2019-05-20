// https://www.codewars.com/kata/is-it-a-vowel-on-this-position/train/javascript

// Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

// A few cases:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }
// P.S. If n < 0, return false

// My Answer
function checkVowel(str, pos) {
    let regex = /[aeiou]/gi;
    let split = str.split('');    
    
    for (let i = 0; i < split.length; i++) {
        if(split.indexOf(split[i]) === pos && regex.test(split[i]))  {
            return true
        } 
    }
    return false
};

// Best Practice
const checkVowel = (s, p) => 'aeiouAEIOU'.includes(s[p]);

// Best Practice using regex without for loop "Fastest at 3ms"
const checkVowel = (s, p) => /[aeiou]/i.test(s[p] || "")

console.log(checkVowel('cat', 1), true);
console.log(checkVowel('cat', 0), false);
console.log(checkVowel('cat', 4), false);
  
console.log(checkVowel('Amanda', -2), false);
console.log(checkVowel('Amanda', 0), true);
console.log(checkVowel('Amanda', 2), true);