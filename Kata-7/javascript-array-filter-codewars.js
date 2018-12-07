// https://www.codewars.com/kata/javascript-array-filter/train/javascript

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:


function getEvenNumbers(arr){
    return arr.filter(e => e % 2 === 0)
}   

console.log(getEvenNumbers([2,4,5,6])) // should == [2,4,6]