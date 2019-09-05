// https://www.codewars.com/kata/say-hello/train/javascript

// Say hello!

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil if input is empty string or null/nil.

// Example:

// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null

// My Answer
function greet(name) {
    return name === '' || name === null ? null : `hello ${name}!`;
}

// Best Practice
function greet(name) {
    return name ? 'hello ' + name + '!' : null;
}

console.log(greet("Niks"), "hello Niks!", "try again");
console.log(greet(null), null, "try again");