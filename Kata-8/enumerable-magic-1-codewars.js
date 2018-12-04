// https://www.codewars.com/kata/enumerable-magic-number-1-true-for-all

// Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.

// Here's a (Ruby) resource if you get stuck: http://www.rubycuts.com/enum-all

// My Answer
function all(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if(!fun(arr[i])) {
            return false
        }
    }
    return true 
}

// Best Practice
function all(arr, fun) {
    return arr.every(fun)
}
console.log(all([1,2,3,4,5], function(v){return v<9}), true)
console.log(all([1,2,3,4,5], function(v){return v>9}), false)
