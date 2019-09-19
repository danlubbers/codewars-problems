// https://www.codewars.com/kata/grasshopper-debug-sayhello/train/javascript

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

// My Answer
function sayHello(name) {
    return `Hello, ${name}`;
}

console.log(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
console.log(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
console.log(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
console.log(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')