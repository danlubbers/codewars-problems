// https://www.codewars.com/kata/thinkful-string-drills-repeater/train/javascript

// Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string where the input string is repeated that many times

// My Answer
function repeater(str, num) {
    let repeatedStr = '';
    for(let i = 0; i < num; i++) {
        repeatedStr += str;
    }
    return repeatedStr
}

// Best Practices
function repeater(str, num) {
    return str.repeat(num);
}

console.log(repeater('a', 5))
console.log(repeater('Na', 16))
console.log((repeater('Wub ', 6)))