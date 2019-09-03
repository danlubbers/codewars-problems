// https://www.codewars.com/kata/numbers-in-strings/train/javascript

// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// My Answer
function solve(s){
    return +s.match(/\d+/g).map(Number).sort((a, b) => a - b).splice(-1).join();
};

// Most Clever
function solve(s) {
   return Math.max(...s.match(/\d+|$/g))
}

// using spread Operator
function solve(s) {
    let arr = s.replace(/[^0-9]/g, ' ').split(' ');
    return Math.max(...arr);
}

console.log(solve('gh12cdy695m1'),695);
console.log(solve('2ti9iei7qhr5'),9);
console.log(solve('vih61w8oohj5'),61);
console.log(solve('f7g42g16hcu5'),42);
console.log(solve('lu1j8qbbb85'),85);