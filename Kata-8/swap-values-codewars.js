// https://www.codewars.com/kata/swap-values

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// My Answer
function swapValues(arr) {
    return arr.reverse()
}

console.log(swapValues([1, 2], "Failed swapping numbers"))
console.log(swapValues([2, 1], "Failed swapping numbers"))
