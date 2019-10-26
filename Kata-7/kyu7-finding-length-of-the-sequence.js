// https://www.codewars.com/kata/finding-length-of-the-sequence/train/javascript

// As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.

// For example, for a given array arr

// [0, -3, 7, 4, 0, 3, 7, 9]
// Finding length between two 7s like

// lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)
// would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0, or in Haskell, Nothing.

// My Answer
function lengthOfSequence(arr, n) {
    if(arr.length <= 1) return 0;

    let arrIndex = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === n) arrIndex.push(i)
    }
    if(arrIndex.length > 2) return 0;
    return arr.slice(arrIndex[0], arrIndex[1]).length + 1;
}

// Most Clever
function lengthOfSequence(arr, n) {
    return arr.count(n) === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
}

Array.prototype.count = function(n) {
    return this.filter(function(v){ return v === n}).length
}

// I like this one
var lengthOfSequence = function(arr, n) {
    let start = arr.indexOf(n);
    let end = arr.lastIndexOf(n)
    return arr.filter(e => e === n).length === 2 ? end + 1 - start : 0;
}

console.log(lengthOfSequence([1, 1], 1), 2, 'Returns two when there are only two elements in the array');
console.log(lengthOfSequence([1, 2, 3, 1], 1), 4, 'Returns four for an array of length four and the number to be searched at the boundaries');
console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5, 'Returns five');
console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7), 4, 'Returns four');
console.log(lengthOfSequence([-7, 6, 2, -7, -4, -7], -7), 0, 'Returns zero');