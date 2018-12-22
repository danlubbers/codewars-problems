// https://www.codewars.com/kata/exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right/train/javascript

// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

// My Answer
function remove(s,n){
    let newStr = s
    for(let i = 0; i < n; i++) {
        newStr = newStr.replace('!', '')
    } 
    return newStr
}

// Best Practice
function remove(s, n) {
    for (let i = 0; i < n; i++) {
        s = s.replace('!', '');
    }
    return s;
}

console.log(remove("Hi!",1)) // "Hi"
console.log(remove("Hi!",100)) // "Hi"
console.log(remove("Hi!!!",1)) // "Hi!!"
console.log(remove("Hi!!!",100)) // "Hi"
console.log(remove("!Hi",1) , "Hi")
console.log(remove("!Hi!",1) , "Hi!")
console.log(remove("!Hi!",100) , "Hi")
console.log(remove("!!!Hi !!hi!!! !hi",1) , "!!Hi !!hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi",3) , "Hi !!hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi",5) , "Hi hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi",100) , "Hi hi hi")
