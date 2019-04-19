// https://www.codewars.com/kata/regexp-basics-is-it-a-vowel/train/javascript

// Implement String#vowel? (in Java StringUtils.isVowel(String)), which should return true if given object is a vowel, false otherwise.

// My Answer 'Actually don't need to use ternary'
String.prototype.vowel = function() {
    //  $ matches the end of a string
    return /^[aeiou]$/i.test(this) ? true : false;
};



console.log(''.vowel(), false);
console.log('a'.vowel(), true);
console.log('E'.vowel(), true);
console.log('ou'.vowel(), false);
console.log('z'.vowel(), false);
console.log('lol'.vowel(), false);