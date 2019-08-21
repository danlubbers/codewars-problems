// https://www.codewars.com/kata/filter-out-the-vowels/train/javascript

// Write a function, vowelFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'vowels' removed.

// The vowels are any strings in the following array, which is pre-populated in your solution:

// vowels = ["a", "e", "i", "o", "u"]
// For example, if this array were passed as an argument:

// ["d", "a", "r", "z", "i", "q", "o"]
// Your function would return the following array:

// ["d", "r", "z", "q"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'vowels' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// My Answer using ES6 & Regex
const vowelFilter = letters => letters.filter(e => !/[aeiou]/.test(e));

// Best Practice
const vowelFilter = letters => letters.filter(e => !'aeiou'.includes(e));

// Using For Loop
function vowelFilter(letters) {
    let vowels = ["a", "e", "i", "o", "u"];
    let ans = [];
    for(let i = 0; i < letters.length; i++) {
        if(!vowels.includes(letters[i])) {
            ans.push(letters[i]);
        }
    }
    return ans;
}

console.log(vowelFilter(["i", "s", "e", "a", "w", "e", "m"]),["s", "w", "m"]);
console.log(vowelFilter(["s", "d", "r", "l", "n"]),["s", "d", "r", "l", "n"]);
console.log(vowelFilter(["i", "e", "a", "o", "u"]),[]);
