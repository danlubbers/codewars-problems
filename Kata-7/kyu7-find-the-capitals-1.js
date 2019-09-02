// https://www.codewars.com/kata/find-the-capitals-1/train/javascript

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// My Answer
function capitals(word) {
    let wordSplit = word.split('');
    let wordIndex = [];

    for(let i = 0; i < wordSplit.length; i++) {
        if(/[A-Z]/g.test(wordSplit[i])) {
            wordIndex.push(word.indexOf(wordSplit[i]))
        }
    }
    return wordIndex;
}

// Best Pracctice
function capitals(word) {
    return word.split('').reduce((acc, curr, i) => {
        return curr === curr.toUpperCase() ? acc.concat(i) : acc;
     }, [])
}

// Another way without splitting or regex
function capitals(word) {
    let caps = [];
    for(let i = 0; i < word.length; i++) {
        if(word[i].toUpperCase() === word[i]) caps.push(i)
    }
    return caps;
}

console.log(capitals('CodEWaRs'), [0,3,4,6] );