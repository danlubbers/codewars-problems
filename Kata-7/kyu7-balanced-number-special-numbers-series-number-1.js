// https://www.codewars.com/kata/balanced-number-special-numbers-series-number-1/train/javascript

// Definition
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

// Task
// Given a number, Find if it is Balanced or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

// Number passed is always Positive .

// Return the result as String

// Input >> Output Examples
// 1- balancedNum (7) ==> return "Balanced"   .
// Explanation:
// Since , The sum of all digits to the left of the middle digit (0)

// and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced

// 2- balancedNum (295591) ==> return "Not Balanced" .
// Explanation:
// Since , The sum of all digits to the left of the middle digits (11)

// and the sum of all digits to the right of the middle digits (10) are equal , then It's Not Balanced

// Note : The middle digit(s) are 55 .

// 3- balancedNum (959) ==> return "Balanced"  .
// Explanation:
// Since , The sum of all digits to the left of the middle digits (9)

// and the sum of all digits to the right of the middle digits (9) are equal , then It's Balanced

// Note : The middle digit is 5 .

// 4- balancedNum (27102983) ==> return "Not Balanced"  .
// Explanation:
// Since , The sum of all digits to the left of the middle digits (10)

// and the sum of all digits to the right of the middle digits (20) are equal , then It's Not Balanced

// Note : The middle digit(s) are 02 .

// My Answer
function balancedNum(number) {
    let numStr = String(number);
    let numLength =  numStr.length;

    if(numLength <= 2) return 'Balanced';
    
    else {
        let split = numStr.split('')
        let reverseSplit = numStr.split('').reverse()
        let left = [];
        let right = [];
        
        for(let i = 0; i < ( split.length / 2 ) - 1; i++) {
            left.push(split[i])
        }

        for(let i = 0; i < ( reverseSplit.length / 2 ) - 1; i++) {
            right.push(reverseSplit[i])
        }

        let leftSum = left.reduce((acc, curr) => +acc + +curr);
        let rightSum = right.reduce((acc, curr) => +acc + +curr);

        return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
    } 
};

// Best Practice
function balancedNum(number) {
    let str = `${number}`
    ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
    ,   sum = digits => [...digits].reduce((a, b) => a + +b, 0);

    return sum(str.slice(0, len)) === sum(str.slice(-len))
    ? 'Balanced'
    : 'Not Balanced';
}

console.log(balancedNum(7), "Balanced")
console.log(balancedNum(959), "Balanced")
console.log(balancedNum(13), "Balanced")
console.log(balancedNum(432), "Not Balanced")
console.log(balancedNum(424), "Balanced")
console.log(balancedNum(1024), "Not Balanced")
console.log(balancedNum(66545), "Not Balanced")
console.log(balancedNum(295591), "Not Balanced")
console.log(balancedNum(1230987), "Not Balanced")
console.log(balancedNum(56239814), "Balanced")