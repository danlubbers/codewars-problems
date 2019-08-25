// https://www.codewars.com/kata/is-it-a-palindrome/train/javascript

// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

// My Answer & Best Practice
function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split('').slice().reverse().join('') ? true : false;
}

console.log(isPalindrome("a"), true);
console.log(isPalindrome("aba"), true);
console.log(isPalindrome("Abba"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Bob"), true);
console.log(isPalindrome("Madam"), true);
console.log(isPalindrome("AbBa"), true);
console.log(isPalindrome(""), true);