// https://www.codewars.com/kata/training-js-number-32-methods-of-math-round-ceil-and-floor

// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

// If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

// roundIt(3.45) should return 4
// If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

// roundIt(34.5) should return 34
// If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

// roundIt(34.56) should return 35

// My Answer
function roundIt(num) {
    const [integer, decimals] = String(num).split('.')
    console.log(integer.length)
    console.log(decimals.length)

    if (decimals.length > integer.length) return Math.ceil(num)
    if (decimals.length < integer.length) return Math.floor(num)
    if (decimals.length === integer.length) return Math.round(num)
}

// Best Practice
function roundIt(n) {
    let [a, b] = n.toString().split('.');
    return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
}

// Another way 
function roundIt(n) {
    let arr = n.toString().split('.');

    if(arr[0].length < arr[1].length) return Math.ceil(n);
    if(arr[0].length > arr[1].length) return Math.floor(n);
    if(arr[0].length === arr[1].length) return Math.round(n);
}

console.log((roundIt(3.45))) // 4;
console.log((roundIt(34.5))) // 34;
console.log((roundIt(34.56))) // 35;