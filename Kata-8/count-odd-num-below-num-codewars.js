// https://www.codewars.com/kata/count-odd-numbers-below-n

// Given a number n, return the number of positive odd numbers below n, EASY!

// My Answer
function oddCount(num) {
    let count = []
    for (let i = 0; i < num; i++) {
        if (i % 2 === 1) {
          count.push(i)
        }
    }
    return count.length
}

// Without modulus
function oddCount(num) {
    let count = []
    for (let i = 1; i < num; i += 2) {
        count.push(i)
    }
    return count.length
} 



console.log(oddCount(7)) //=> 3, i.e [1, 3, 5]
console.log(oddCount(15)) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
console.log(oddCount(15023))