// https://www.codewars.com/kata/love-vs-friendship/train/javascript

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

// My Answer
function wordsToMarks(str) {
  return str.split('')
            .map(e => e.charCodeAt() - 96)
            .reduce((acc, val) => acc + val, 0);
};

// Best Practice & Most Clever
function wordsToMarks(str) {
  return [...str].reduce((acc, val) => acc += val.charCodeAt() - 96, 0)
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);