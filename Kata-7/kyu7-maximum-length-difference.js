// https://www.codewars.com/kata/maximum-length-difference

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// #Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

// My Answer
function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) {
        return -1;

    } else {
        let x = a1.map(e => e.length);
        let y = a2.map(e => e.length);

       return Math.max(
           Math.max(...x) - Math.min(...y),
           Math.max(...y) - Math.min(...x)
       );
    } ; 
}

// Second best way
// function mxdiflg(a1, a2) {
//     let max = -1;
//     for(let A1 of a1)
//         for(let A2 of a2)
//             max = Math.max(max, Math.abs(A1.length - A2.length));
//     return max;
// }

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);

console.log(mxdiflg(['ccct','tkkeeeyy','ggiikffsszzoo','nnngssddu','rrllccqqqqwuuurdd','kkbbddaakkk' ], [ 'tttxxxxxxgiiyyy',
'ooorcvvj','yzzzhhhfffaaavvvpp','jjvvvqqllgaaannn','tttooo','qmmzzbhhbb']), 14)

console.log(mxdiflg([], [ 'cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww' ]), -1);