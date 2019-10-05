// https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters/train/javascript

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// My Answer
function printArray(array){
    return array.join();
}

// Use toString()
function printArray(array) {
    return array.toString();
}


console.log(printArray( [2,4,5,2] )) //"2,4,5,2"
console.log(printArray( ["h","o","l","a"] )) // "h,o,l,a"