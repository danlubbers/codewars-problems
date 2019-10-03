// https://www.codewars.com/kata/adding-arrays/train/javascript

// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

// Examples:

// arrAdder([
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']
// ]) // => "Just Live Life Man"

// arrAdder([ 
//   [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//   [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//   [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//   [ '', 'o', '', '', 'e', '', '', 'l' ],
//   [ '', 'c', '', '', 'r', '', '', '' ],
//   [ '', 'h', '', '', 'h', '', '', '' ],
//   [ '', 'o', '', '', 'o', '', '', '' ],
//   [ '', 'n', '', '', 'u', '', '', '' ],
//   [ '', 'd', '', '', 's', '', '', '' ],
//   [ '', 'r', '', '', 'e', '', '', '' ],
//   [ '', 'i', '', '', '', '', '', '' ],
//   [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mictochondria is the powerhouse of the cell"

// My Answer
function arrAdder(arr) {
    let finalArr = [];

    for(let i = 0; i < arr[0].length; i++) {
        let workingArr = [];
        console.log(arr[0].length);
        

        for(let j = 0; j < arr.length; j++) {
            console.log(arr[j][i]);

            if(arr[j][i] !== '') workingArr.push(arr[j][i]);
        }

        finalArr.push(workingArr.join(''));

    } 
    return finalArr.join(' ');
}

// Most Clever
function arrAdder(arr) {
    return arr[0].map((_, i) => arr.map((_, j) => arr[j][i]).join('')).join(' ');
}

// Best Practice using string instead of Array
function arrAdder(arr) {
    let sentence = '';

    for(let i = 0; i < arr[0].length; i++) {
        for(let j = 0; j < arr.length; j++) {
            sentence += arr[j][i]
        }
        sentence += ' ';
    }
    return sentence.trim();
}

console.log(arrAdder([
    ['J','L','L','M'],
    ['u','i','i','a'],
    ['s','v','f','n'],
    ['t','e','e','']
    ]),"Just Live Life Man");
    
    console.log(arrAdder([ 
      [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
      [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
      [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
      [ '', 'o', '', '', 'e', '', '', 'l' ],
      [ '', 'c', '', '', 'r', '', '', '' ],
      [ '', 'h', '', '', 'h', '', '', '' ],
      [ '', 'o', '', '', 'o', '', '', '' ],
      [ '', 'n', '', '', 'u', '', '', '' ],
      [ '', 'd', '', '', 's', '', '', '' ],
      [ '', 'r', '', '', 'e', '', '', '' ],
      [ '', 'i', '', '', '', '', '', '' ],
      [ '', 'a', '', '', '', '', '', '' ] ]), "The Mitochondria is the powerhouse of the cell");