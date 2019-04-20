// https://www.codewars.com/kata/regexp-basics-is-it-a-letter/train/javascript

// Implement String#letter? (Ruby), StringUtils.isLetter(String) (Java), String.prototype.isLetter() (JavaScript) or letter? (Clojure), which should return true if given object is a single ASCII letter (lower or upper case), false otherwise.

// My Answer & Best Practice
String.prototype.isLetter = function() {
    return /^[a-z]{1}$/i.test(this);
}

console.log("".isLetter(), false);
console.log("a".isLetter(), true);
console.log("X".isLetter(), true);
console.log("7".isLetter(), false);
console.log("*".isLetter(), false);
console.log("ab".isLetter(), false);
console.log("a\n".isLetter(), false);