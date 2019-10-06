// https://www.codewars.com/kata/get-array-elements-with-specified-keys/train/javascript

// Create a function that lets people easily grab only the array elements with given keys.

// For example:

// var array = ['a', 'b', 'c', 'd', 'e'];
// array2 = array.only([0, 3]);
// // at this point array2 should be ['a', 'd']
// Note: The order of the elements should be preserved in the resulting array.

// My Answer
Array.prototype.only = function(keys) {
    let sorted = keys.sort((a, b) => a - b);
    let arr = [];
    for(let i = 0; i < sorted.length; i++) {
        arr.push(this[sorted[i]])   
    }
    return arr;
}

// Best Practice
Array.prototype.only = function(keys) {
    return this.filter((e, i) => keys.includes(i));    
}



var array = ['a', 'b', 'c', 'd', 'e'];
  
console.log(array.only([0, 3]), ['a', 'd']);
console.log(array.only([1]), ['b']);
console.log(array.only([0,1,3,4]), ['a', 'b', 'd', 'e']);




var array = ['a', 'b', 'c', 'a', 'b'];
  
console.log(array.only([0, 1, 3]), ['a', 'b', 'a']);
console.log(array.only([1, 2, 3, 4]), ['b','c','a','b']);
