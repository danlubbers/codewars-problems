// https://www.codewars.com/kata/multiply-the-strings-in-the-array/train/javascript

// You received an array with two strings. Create a function that will return their product as a string. E.g.

// arrMultiply(['9','6']) should return '54'

// My Answer
function arrMultiply(arr){
    return String(arr[0] * arr[1]);
}

// Best Practice / Most Clever
function arrMultiply([a, b]) {
    return " " + a * b;
}


console.log(arrMultiply(['4','5']),"20");
console.log(arrMultiply(['2','-5']),"-10");
console.log(arrMultiply(['9','0']),"0");