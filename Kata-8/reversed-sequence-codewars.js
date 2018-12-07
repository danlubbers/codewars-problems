// https://www.codewars.com/kata/reversed-sequence

// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

// My Answer
function reverseSeq(num) {
    let arr = [];
    for (let i = num; i > 0; i--) {
        arr.push(i)
    }
    return arr;
}

// Best Practice
function reverseSeq(num) {
    return Array(num).fill().map((e, i) => num - i)
}

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
console.log(reverseSeq(12));