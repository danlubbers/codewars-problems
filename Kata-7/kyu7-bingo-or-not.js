// https://www.codewars.com/kata/bingo-or-not/train/javascript

//For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// My Answer
function bingo(arr) {
  const letters = arr.map(e => (e + 9).toString(36)).join('');
  const onlyBingo = letters.match(/[bingo]/gi);
  
  if(onlyBingo !== null) {
    let filterDuplicates = onlyBingo.filter((e, i) => onlyBingo.indexOf(e) === i);
    return filterDuplicates.length === 5 ? 'WIN' : 'LOSE';
  }
  return 'LOSE';
};

// Best Practice
function bingo(arr) {
  return [2, 9, 14, 7, 15].every(e => arr.includes(e)) ? 'WIN' : 'LOSE';
}

// another way
function bingo(arr) {
  return ([...'bingo'])
            .map(e => e.charCodeAt(0) - 96)
            .every(e => arr.includes(e)) ? 'WIN' : 'LOSE';
}

console.log( bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE");
console.log( bingo([21,13,2,7,5,14,7,15,9,10]), "WIN");
console.log( bingo([17, 13, 21, 13, 10, 26, 6, 24, 11, 18]));