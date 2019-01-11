// https://www.codewars.com/kata/all-star-code-challenge-number-18

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.


// My Answer
function strCount(str, letter) {  
     return str.split('').filter(e => e === letter).length
}

// Best Practice Answer
function strCount(str, letter){  
    return str.split(letter).length-1
}


console.log((strCount('Hello', 'o'), 1))
console.log((strCount('Hello', 'l'), 2))
console.log((strCount('', 'z'), 0))
