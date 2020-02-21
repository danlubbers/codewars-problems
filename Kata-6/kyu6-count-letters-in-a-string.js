// https://www.codewars.com/kata/58e6868cfd2d89e9370001ad/train/javascript

//A string. e.g. "Hello World" If input is anything other than a string, it should return null

// Output
// Should be an object of the letters and how often they show up. e.g. { d:1 e:1 h:1 l:3 o:2 r:1 w:1 }

// Special
// Case-insensitive. So convert all letters to lowercase
// Ignore whitespace
// Ignore anything not a-z
// Challenge input:
// "Hello World" // { d:1 e:1 h:1 l:3 o:2 r:1 w:1 }

// Works in VSCode but codewars says Object.values is not a function???
// function countLetters (str) {
//   let onlyLetters = str.match(/[a-zA-Z]/gi);

//   let lowerArr = Object.values(onlyLetters).map(e => e.toLowerCase())
//   let countedArr = lowerArr.reduce((acc, val) => {
//     if(!acc[val]) acc[val] = 1;
//     else acc[val]++
//     return acc
//   }, {});

//   return countedArr
// }

// My Answer
function countLetters (str) {
  if(typeof str !== 'string') return null;
  let onlyLetters = str.match(/[a-zA-Z]/gi);
  
  return onlyLetters.reduce((acc, val) => {
    acc += val.toLowerCase()
    return acc;
  }, []).split('').reduce((acc, val) => {
    if(!acc[val]) acc[val] = 1;
    else acc[val]++
    return acc;
  }, {})
}

// Most Clever
const countLetters = str => typeof str === 'string' ? [...str.toLowerCase().replace(/[^a-z]/gi, '')].reduce((acc, val) => (acc[val] = ~~acc[val] + 1, acc), {}) : null;



console.log(countLetters(24)) // { d:1 e:1 h:1 l:3 o:2 r:1 w:1 }
console.log(countLetters("Hello World")) // { d:1 e:1 h:1 l:3 o:2 r:1 w:1 }
console.log(countLetters("TestING good UCKLUS 489842ulsjur;vnahehehehehhehe~~~~IJKDAFDS")) 
// { t: 2, e: 7, s: 4, i: 2, n: 2, g: 2, o: 2, d: 3, u: 4, c: 1, k: 2, l: 2, j: 2, r: 1, v: 1, a: 2, h: 7, f: 1 }