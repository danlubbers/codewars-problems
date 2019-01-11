// https://www.codewars.com/kata/enumerable-magic-number-2-true-for-any

// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

// My Answer
function any(arr, fun){
    for (let i = 0; i < arr.length; i++) {
        if(fun(arr[i])) {
            return true
        }
    }
    return false
}

// Best Practice
function any(arr, fun) {
    return arr.some(fun)
}

// Can use
function any(arr, fun) {
    return arr.filter(fun).length > 0
}

console.log(any([1,2,3,4], function(v,i){return v>3}), true)
console.log(any([1,2,3,4], function(v,i){return v>4}), false)