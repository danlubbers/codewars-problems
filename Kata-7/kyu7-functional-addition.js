// https://www.codewars.com/kata/functional-addition/train/javascript

// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6

// My Answer & Best Answer
function add(n) {
    return function (num) {
       return  n + num
    }
}

// ES6
const add = n => num => num + n;

console.log(add(1)(3), 4, 'add one to three equals four')