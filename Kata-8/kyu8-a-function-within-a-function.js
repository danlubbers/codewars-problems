// https://www.codewars.com/kata/a-function-within-a-function

// Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

var three = always(3);
three(); // returns 3

// My Answer
function always(n) {
    return function() {
        return n
    }
}

// ES6
// const always = n = () => n

console.log(always(true)(), 'A function that is always true will return true')