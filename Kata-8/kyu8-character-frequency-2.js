// https://www.codewars.com/kata/character-frequency-2/train/javascript

// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

// Example
// charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}

// My Answer
function charFreq(str) {
    let split = str.split('')
    
    return split.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1
        return acc
    }, {})
}

// Using For Loop
function charFreq(str) {
    let arr = str.split('')
    let obj = {};

    for(let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) obj[arr[i]] = 1
        else obj[arr[i]]++
    }
    return obj
}

// Using For of
function charFreq(str) {
    const result = {};

    for (const c of str) {
        result[c] = (result[c] || 0) + 1
    }
    return result
}


console.log(charFreq("I like cats"), {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1});