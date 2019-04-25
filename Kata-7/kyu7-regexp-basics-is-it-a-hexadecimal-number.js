// https://www.codewars.com/kata/regexp-basics-is-it-a-hexadecimal-number/train/javascript

// Implement String#hex_number? (in Java StringUtils.isHexNumber(String)), which should return true if given object is a hexadecimal number, false otherwise.

// Hexadecimal numbers consist of one or more digits from range 0-9 A-F (in any case), optionally prefixed by 0x.

// My Answer
String.prototype.hexNumber = function() {
    return /^(0x)?[0-9a-f]+$/i.test(this);
};

// Best Practice
String.prototype.hexNumber = function() {
    return /^(0x)?[a-f\d]+$/i.test(this);
};

console.log(''.hexNumber(), false);
console.log('0x'.hexNumber(), false);
console.log('0'.hexNumber(), true);
console.log('0xDEADBEEF'.hexNumber(), true);
console.log('1337bAbe'.hexNumber(), true);