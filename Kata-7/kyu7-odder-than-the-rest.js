// https://www.codewars.com/kata/odder-than-the-rest/train/javascript

// Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.

// This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.

// Examples:

// oddOne([2,4,6,7,10]) // => 3
// oddOne([2,16,98,10,13,78]) // => 4
// oddOne([4,-8,98,-12,-7,90,100]) // => 4
// oddOne([2,4,6,8]) // => -1

// My Answer
function oddOne(arr) {
    let filtered = arr.filter(e => (e % 2 !== 0));
    
    if(filtered.length <= 0) return -1
    return +arr.map((e, i) => e === +filtered ? i : -1).filter(e => e !== -1).join();
}

// Best Practice
function oddOne(arr) {
    return arr.findIndex(e => e % 2 !== 0);
}

// For Loop
function oddOne(arr) {
    for(let i = 0; i < arr.length; i++) 
        if(arr[i] % 2 !== 0) return i;
        return -1;
}

console.log(oddOne([2,4,6,7,10]), 3);
console.log(oddOne([2,16,98,10,13,78]), 4);
console.log(oddOne([4,-8,98,-12,-7,90,100]), 4);
console.log(oddOne([2,4,6,8]), -1);