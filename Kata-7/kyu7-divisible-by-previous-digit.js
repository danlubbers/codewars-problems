// https://www.codewars.com/kata/divisible-by-previous-digit/train/javascript

// Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

// The booleans should always start with false becase there is no digit before the first one.

// Examples
// 73312        => [false, false, true, false, true]
// 2026         => [false, true, false, true]
// 635          => [false, false, false]
// * Remember 0 is evenly divisible by all integers but not the other way around *

// My Answer
function divisibleByLast(n) {
    let arr = (""+n).split('');
    let arrBool = [false];
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i+1] % arr[i] === 0) arrBool.push(true)
        else arrBool.push(false)
    }
    return arrBool;
}

// Best Practice
function divisibleByLast(n) {
    n = String(n);
    let result = [false];

    for(let i = 1; i < n.length; i++) {
        result.push(n[i] & n[i+1] === 0);
    }
    return result;
}

// Using ES6
const divisibleByLast = n => {
        return n.toString().split('').map((e, i, arr) => e % arr[i - 1] === 0);
}

console.log(divisibleByLast(73312), [false, false, true, false, true]);
console.log(divisibleByLast(2026), [false, true, false, true]);
console.log(divisibleByLast(635), [false, false, false]);
console.log(divisibleByLast(1337), [false, true, true, false]);