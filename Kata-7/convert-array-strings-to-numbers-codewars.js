// https://www.codewars.com/kata/convert-an-array-of-strings-to-array-of-numbers

// Oh no!
// Some really funny web dev gave you an array of numbers from his API response as an array of strings!

// You need to cast the whole array to the correct type.

// Create the function

// that takes as a parameter an array of numbers represented as strings and outputs an array of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// My Answer
function toNumberArray(stringarray){
    return stringarray.map(e => +e)
}

// Best Practice
function toNumberArray(stringarray) {
  return stringarray.map(parseFloat);
}

console.log(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3])