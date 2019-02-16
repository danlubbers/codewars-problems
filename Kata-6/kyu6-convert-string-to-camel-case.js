// https://www.codewars.com/kata/convert-string-to-camel-case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// My Answer
function toCamelCase(str){
    // if empty string, return an empty string
    if(str === '') return ''
    // Using Regex it will replace all Non-characters with whitespace to keep the words separate
    str = str.replace(/[^a-zA-Z]+/ig, ' ')
    // split the string into an array of words
    let split = str.split(' ')
    let cap = [];
    // Loop through array and capitalize every first letter of each word
    for(let i = 0; i < split.length; i++) {
        cap.push(split[i][0].toUpperCase()+split[i].slice(1))
    }
    // check if first letter of first work in original str was lowercase and if so make that letter 
    // lowercase, otherwise leave it as is
    if(str[0] === str[0].toLowerCase()) {
        cap = cap[0][0].toLowerCase()+cap[0].slice(1)+cap.slice(1)
        return cap.replace(/[^a-zA-Z]+/ig,  '')
    } else {
        return cap.join('') 
    }
}

// Best Practice
function toCamelCase(str) {
    let regex = /[-_]\w/ig;
    return str.replace(regex, function(match){
        return match.charAt(1).toUpperCase();
    })
}

console.log(toCamelCase('')) // ''
console.log(toCamelCase("the_stealth_warrior")) // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")) // "TheStealthWarrior"
console.log(toCamelCase("A-B-C")) // "ABC"