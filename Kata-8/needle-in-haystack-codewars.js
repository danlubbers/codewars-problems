// https://www.codewars.com/kata/a-needle-in-the-haystack

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// My Answer
function findNeedle(arr) {
    let index = arr.indexOf('needle')
    return `found the needle at position ${index}`
}

// Best Practice
function findNeedle(arr) {
    return "found the needle at position " + arr.indexOf('needle'); 
}


console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))