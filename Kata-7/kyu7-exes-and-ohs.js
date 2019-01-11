// https://www.codewars.com/kata/exes-and-ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My Answer
function XO(str) {
 let split = str.split('');
 let filteredX = split.filter(e => e.toLowerCase() === 'x')
 let filteredO = split.filter(e => e.toLowerCase() === 'o')
 return filteredX.length === filteredO.length ? true : false;
}

// Using Regex
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length)
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);
console.log(XO("ooxXm")) // => true