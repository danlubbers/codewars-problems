// https://www.codewars.com/kata/palindrome-strings/train/javascript

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Examples
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

// My Answer
function isPalindrome(str) {
    let forward = str.toString().split('').join('');
    let reversed = str.toString().split('').reverse().join('')
    return forward === reversed;
}

// Best Practice
function isPalindrome(line) {
    return String(line) == String(line).split('').reverse().join('');
}


console.log(isPalindrome("anna"), true);
console.log(isPalindrome("walter"), false);
console.log(isPalindrome(12321), true);
console.log(isPalindrome(123456), false);
console.log(isPalindrome("."), true);
console.log(isPalindrome(".!!."), true);