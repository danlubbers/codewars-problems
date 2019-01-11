// https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence

// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// My answer
function replace(str){
    let split = str.split('')
    let arrayMap = split.map(e => {
        if(e.toLowerCase() === 'a' || e.toLowerCase() === 'e' || e.toLowerCase() === 'i' || e.toLowerCase() === 'o' || e.toLowerCase() === 'u') {
            console.log(e)
            return e.replace(e, '!')
        } else {
            return e
        }
    })
    return arrayMap.join('')
}

// Best Practice

function replace(s) {
    return s.replace(/[aeiou]/ig, '!')
}

console.log(replace("Hi!") , "H!!")
console.log(replace("!Hi! Hi!") , "!H!! H!!")
console.log(replace("aeiou") , "!!!!!")
console.log(replace("ABCDE") , "!BCD!")