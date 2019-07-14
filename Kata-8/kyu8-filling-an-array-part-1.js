// https://www.codewars.com/kata/filling-an-array-part-1/train/javascript

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

// My Answer
function arr(n) {
    let arr = [];

    for(let i = 0; i < n; i++) {
        arr.push(i)
    }
    return arr
}

// Best Practice
const arr = n => Array.from({length: n}, (_, i) => i);


console.log(arr(4), [0,1,2,3]);