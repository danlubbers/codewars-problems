// https://www.codewars.com/kata/is-it-a-vowel-on-this-position

// Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

// A few cases:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }
// P.S. If n < 0, return false

// My Answer
function checkVowel(string, position) {
    let lower = string.toLowerCase()
    console.log(lower)
    if (position < 0) {
        return false;
    } else {
        let split = lower.split('');
        if (split[position] === 'a' || split[position] === 'e' || split[position] === 'i' || split[position] === 'o' || split[position] === 'u') {
            return true
        } else {
            return false
        }
    }
};

// Best Practice
const checkVowel = (string, position) => 'aeiouAEIOU'.includes(string[position])

console.log(checkVowel('cat', 1), true);
console.log(checkVowel('cat', 0), false);
console.log(checkVowel('cat', 4), false);
console.log(checkVowel('Amanda', -2), false);
console.log(checkVowel('Amanda', 0), true);
console.log(checkVowel('Amanda', 2), true);