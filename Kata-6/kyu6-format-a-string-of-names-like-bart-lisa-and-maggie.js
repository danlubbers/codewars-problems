// https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

// My Answer
// function list(names){
//   if(names === '') return '';
  
//   let arrNames =  names.map(e=> Object.values(e));

//   if(arrNames.length === 1) {
//     arrNames;

//   } else if(arrNames.length === 2) {
//       arrNames.splice(arrNames.length -1, 0, '&');

//   } else {
//     return names.map(({ name }) => name).join(', ').replace(/[,](?!.*,)/g, ' &');
   
//   }
//     return arrNames.join(' ')
// }

// Best Practice using Reduce
function list(names) {
  return names.reduce((acc, curr, idx, arr) => {
    if(idx === 0) return curr.name;
    else if(idx === arr.length - 1) return `${acc} & ${curr.name}`;
    else return `${acc}, ${curr.name}`;
  }, '')
}



console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
"Must work with two names")
// console.log(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
// console.log(list([]), '', "Must work with no names")