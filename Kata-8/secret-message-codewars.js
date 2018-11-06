// https://www.codewars.com/kata/jennys-secret-message

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// My Answer
function greet(name){
    if(name === "Johnny") {
        return "Hello, my love!";
    } else {
    return "Hello, " + name + "!";
    }
}

// ES6 with Ternary
const greet = name => name === 'Johnny' ? `Hello, my love!` : `Hello, ${name}!`

// Best Practice
function greet(name) {
    return "Hello, " + (name === "Johnny" ? "my love" : name) + "!";
}

console.log((greet("Simon"), "Hello, Simon!"))
console.log((greet("Johnny"), "Hello, my love!"))