// https://www.codewars.com/kata/return-the-missing-element/train/javascript

// Fellow code warrior, we need your help! We seem to have lost one of our array elements, and we need your help to retrieve it! Our array, superImportantArray, was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) // returns 8
// getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) // returns 3

// My Answer
function getMissingElement(arr){
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sortedArr = arr.sort();
    let missingNum = 0;
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] !== numbers[i]) missingNum = numbers[i];
    }
    return missingNum
}

// Best Practice
function getMissingElement(arr) {
    for(let i = 0; i < 10; i++) {
        if(arr.indexOf(i) === -1) return i;
    }
}

// using reduce
function getMissingElement(arr) {
    return arr.reduce((acc, curr) => acc - curr, 45);
}


console.log(getMissingElement( [0,5,1,3,2,9,7,6,4]), 8);
console.log(getMissingElement( [9,2,4,5,7,0,8,6,1]), 3);