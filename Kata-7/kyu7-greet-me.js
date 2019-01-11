// https://www.codewars.com/kata/greet-me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// greet("maya") # returns "Hello Maya!"
// greet("JACK") # returns "Hello Jack!"

// My Answer
function greet(name) {
    let lowerCase = name.split('').map(e => e.toLowerCase()).join('')
    let cap = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
    return `Hello ${cap}!`
}

// Best Practice
var greet = name => 'Hello ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!'

console.log(greet("maya")) // returns "Hello Maya!"
console.log(greet('JACK')) // returns "Hello Jack!"