// https://www.codewars.com/kata/filter-unused-digits/train/javascript

// Given few numbers, you need to print out the digits that are not being used.

// Example:

// unusedDigits(12, 34, 56, 78) // "09"
// unusedDigits(2015, 8, 26) // "3479"
// Note:

// Result string should be sorted
// The test case won't pass Integer with leading zero

// My Answer
function unusedDigits(...arr){
    // console.log(Array.isArray(arr))
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
    let finalArr = [];
    
    let numberArr = arr.toString().split('').map(e => parseInt(e)).filter(e => parseInt(e) || e === 0)

    for(let i = 0; i <= 9; i++) {
        // console.log(numbers[i]);
        // console.log(numbers.includes(numberArr[i]));
        if(!numberArr.includes(numbers[i])) {
            finalArr.push(numbers[i])
        }
    }
    return finalArr.join('')
}

// Best Practice
function unusedDigits(...args) {
    return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '');
}

// Using Filter and indexOf
function unusedDigits(...args) {
    return '01233456789'.split('').filter(e => `${args}`.split('').indexOf(e) === - 1).join('');
}

// Using Reduce
function unusedDigits(...args) {
    return args.reduce((left, num) => {
        (num+'').split('').map(digit => {
            left = left.replace(digit, '')
        });
        return left;
    }, '0123456789');
}


console.log(unusedDigits(12, 34, 56, 78), "09")
console.log(unusedDigits(2015, 8, 26), "3479")
