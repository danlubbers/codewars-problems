// https://www.codewars.com/kata/highest-scoring-word/train/javascript

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// My Answer
function high(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = [];

    let splitWords = str.split(' ');
    // console.log(splitWords);
    let charNum = splitWords.map(e => e.split('').map(e => alphabet.indexOf(e) + 1));
    // console.log(charNum);

    for(let i = 0; i < charNum.length; i++) {
        // charNum[i] gives me the location index number for each character
        // console.log(charNum[i]);
        // sum each word array and push to arr 
        arr.push(charNum[i].reduce((acc, curr) => acc + curr, 0)); 
    }

    // max gives me the high sum of each array
    const max = Math.max(...arr);
    // console.log(max);
    
    // wordIndex then gives me the index based off the highest sum from max
    const wordIndex = arr.indexOf(max);
    // console.log(wordIndex);
    
    // using the wordIndex variable we use it to match the index in .find
    return splitWords.find((e, i) => wordIndex === i);
}

// Best Practice
function high(str) {
    let arr = str.split(' ');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let newArr = arr.map(e => {
        let sum = 0;
        for(let i = 0; i < e.length; i++) {
            sum += alphabet.indexOf(e[i])
        }
        return sum
    })
    return arr[newArr.indexOf(Math.max(...newArr))];
}

// Most Clever
function high(str) {
    let as = str.split(' ').map(e => [...e].reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0));
    console.log(as);
    return str.split(' ')[as.indexOf(Math.max(...as))];
    
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');  
