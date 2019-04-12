// https://www.codewars.com/kata/exclamation-marks-series-number-4-remove-all-exclamation-marks-from-sentence-but-ensure-a-exclamation-mark-at-the-end-of-string/train/javascript

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

// My Answer and Best Practice
// function remove(s){
//     return `${s.replace(/\!/g, '')}!`;
// }

// Using For Loop
function remove(s) {
    let str = '';
    for(let i = 0; i < s.length; i++) {
        if(s[i] != '!') {
           str += s[i]
        }
    }
    return str + '!'
}

console.log(remove("Hi!") , "Hi!")
console.log(remove("Hi!!!") ,"Hi!")
console.log(remove("!Hi") , "Hi!")
console.log(remove("!Hi!") , "Hi!")
console.log(remove("Hi! Hi!") , "Hi Hi!")
console.log(remove("Hi") , "Hi!")