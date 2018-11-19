// https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"


function toAlternatingCase(str) {
    let split = str.split('')
    console.log(split)
    let arr = []
    for(let i = 0; i < split.length; i++) {
        if(split[i] === Number) {
            } else if(split[i] === split[i].toUpperCase()) {
                arr.push(split[i].toLowerCase())
            } else {
                arr.push(split[i].toUpperCase())
        }
    }
        return arr.join('')
    }
    
console.log(toAlternatingCase('hello world'))
console.log(toAlternatingCase('HELLO WORLD'))
console.log(toAlternatingCase('hello WORLD'))
console.log(toAlternatingCase('12345'))
console.log(toAlternatingCase('1a2b3c4d5e'))

String.prototype.toAlternatingCase = function () {
    let split = String().split('')
    console.log(split)
    let arr = []
    for(let i = 0; i < split.length; i++) {
        if(split[i] === Number) {
        } else if(split[i] === split[i].toUpperCase()) {
            arr.push(split[i].toLowerCase())
        } else {
            arr.push(split[i].toUpperCase())
        }
    }
    return arr.join('') 
}


console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
                    

