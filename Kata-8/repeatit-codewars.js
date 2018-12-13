// https://www.codewars.com/kata/repeatit

// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

// My Answer
var repeatIt = function(str, n) {
    let finalStr = '';
    if(typeof str === 'string') {
        for(let i = 1; i <= n; i++) {
            finalStr += str
        }
        return finalStr
    } else {
        return 'Not a string'
    }
}

// Best Practice
var repeatIt = function(str, n) {
    return typeof str === 'string' ? Array(n+1).join(str) : 'Not a string';
}

console.log(repeatIt("*",3), "***", 'Returned unexpected value')
console.log(repeatIt("Hello",11), "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello", 'Returned unexpected value')
console.log(repeatIt([], 3))
console.log(repeatIt(54, 3))