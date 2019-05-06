// https://www.codewars.com/kata/exclamation-marks-series-number-1-remove-a-exclamation-mark-from-the-end-of-string/train/javascript

// Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// My answer
function remove(s){
    if(s[s.length-1] !== '!') return s;
    else return s.split('').slice(0, s.length-1).join('');
}

// Best Practice
const remove = s => s.replace(/!$/, '');

console.log(remove("Hi!") , "Hi")
console.log(remove("Hi!!!") ,"Hi!!")
console.log(remove("!Hi") , "!Hi")
console.log(remove("!Hi!") , "!Hi")
console.log(remove("Hi! Hi!") , "Hi! Hi")
console.log(remove("Hi") , "Hi")