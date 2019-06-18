// https://www.codewars.com/kata/regexp-basics-is-it-a-digit

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

// My Answer and Best Practice
String.prototype.digit = function() {
    // ^ matches the start of a string
    // d matches any digit character
    // $ matches the end of the string
    // g is a global search, doesn't return after the first match
    return /^\d$/g.test(this)
};

// Longer way
String.prototype.digit = function() {
    return /^[0-9]$/.test(this);
};

console.log(''.digit(), false);
console.log('7'.digit(), true);
console.log(' '.digit(), false);
console.log('a'.digit(), false);
console.log('a5'.digit(), false);
console.log('14'.digit(), false);