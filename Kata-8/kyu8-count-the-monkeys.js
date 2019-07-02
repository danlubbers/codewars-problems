// https://www.codewars.com/kata/count-the-monkeys/train/javascript

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example, if n = 10:

// return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// My Answer
function monkeyCount(n) {
    let arr = [];
    let i = 1;

    while (i <= n) {
        arr.push(i)
        i++
    }
    return arr
}

// Most Clever
function monkeyCount(n) {
    return Array.from({length: n}, (_,i) => i + 1);
}


console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
console.log((monkeyCount(3)), [1, 2, 3]);
console.log((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
