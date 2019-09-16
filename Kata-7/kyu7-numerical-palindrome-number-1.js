// https://www.codewars.com/kata/numerical-palindrome-number-1/train/javascript

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

// Return "Not valid" if the input is not an integer or less than 0.

// My Answer
function palindrome(num) { 
    if(typeof num !== 'number' || num < 0) {
        return 'Not valid';
    } else {
        let split = num.toString().split('');
        return split.reverse().join('') === num.toString();
    }
} 

// Best Practice
function palindrome(num) {
    if (typeof num !== 'number' || num < 0) return 'Not valid'
    return String(num). split('').reverse().join('') === String(num)
}

console.log(palindrome(1221),true);
console.log(palindrome(123322),false);
console.log(palindrome("ACCDDCCA"),"Not valid");
console.log(palindrome("1221"),"Not valid");
console.log(palindrome(-450),"Not valid");