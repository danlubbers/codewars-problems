// https://www.codewars.com/kata/function-iteration/train/javascript 

// The purpose of this kata is to write a higher-order function returning a new function that iterates on a specified function a given number of times. This new function takes in an argument as a seed to start the computation from.

// For instance, consider the function getDouble. When run twice on value 3, yields 12 as shown below.

// getDouble(3) => 6
// getDouble(6) => 12
// Let us name the new function createIterator and we should be able to obtain the same result using createIterator as shown below:

// var doubleIterator = createIterator(getDouble, 2); // This means, it runs *getDouble* twice
// doubleIterator(3) => 12
// For the sake of simplicity, all function inputs to createIterator would be functions returning a small number and number of iterations would always be integers.

// My Answer
var createIterator = function (func, n) {
    let iterator = function(x) {
        let y = x;
        for(let i = 0; i < n; i++)
            y = func(y)
            return y
    }
    return iterator;
};

// Best Practice
var createIterator = function (func, n) {
    return function(x) {
        for(let i = 0; i < n; i++) x = func(x);
        return x;
    }
}

// Using ES6
const createIterator = (f, n) => x => [...Array(n)].reduce(f, x);



var getDouble = function (n) {
    return n + n;
};
      

var doubleIterator = createIterator(getDouble, 1);
      
console.log(doubleIterator(3), 6, "Returns double of 3 as 6");
console.log(doubleIterator(5), 10, "Returns double of 5 as 10");
    
    
    
var getQuadruple = createIterator(getDouble, 2);
      
console.log(getQuadruple(2), 8, "Returns quadruple of 2 as 8");
console.log(getQuadruple(5), 20, "Returns quadruple of 5 as 20");
    