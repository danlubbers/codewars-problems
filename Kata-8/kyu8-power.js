// https://www.codewars.com/kata/power/train/javascript

// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some others Math functions are disabled on final tests.

// My Answer & Best Practice
function numberToPower(number, power){
    let finalNum = 1;
    for(let i = 0; i < power; i++) {
        // or finalNum = finalNum * number
        finalNum *= number
    }
    return finalNum;   
}

// Most Clever
const numberToPower = (number, power) => power > 0 ? number * numberToPower(number, power - 1) : 1;

console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);

console.log(numberToPower(3,2))  // -> 9 ( = 3 * 3 )
console.log(numberToPower(2,3))  // -> 8 ( = 2 * 2 * 2 )
console.log(numberToPower(10,6)) // -> 1000000