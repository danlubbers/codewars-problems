// https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript

// Convert number to reversed array of digits

// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

// My Answer
function digitize(num) {
    return num.toString().split('').reverse().map(e => +e)
}

// ES6 Refactor
const digitize = num => num.toString().split('').reverse().map(e => +e)


// Best Practices
function digitize(num) {
    return String(num).split('').map(Number).reverse()
}


console.log((digitize(35231)));