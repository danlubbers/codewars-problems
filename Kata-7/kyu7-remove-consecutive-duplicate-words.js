// https://www.codewars.com/kata/remove-consecutive-duplicate-words

// Your task is to remove all consecutive duplicate words from string, leaving only first words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta alpha beta gamma delta'

// My Answer using filter
function removeConsecutiveDuplicates(str) {
    return str.split(' ').filter((elem, index, arr)=> elem !== arr[index+1]).join(' ');    
}

// Clever Practice using Regex
function removeConsecutiveDuplicates(str) {
    return str.replace(/\b(\w+)(?: \1)+\b/g, '$1');
}

// Using For Loop
function removeConsecutiveDuplicates(str) {
    let split = str.split(' ');
    let result = '';

    for(let i = 0; i < split.length; i++ ) {
        // [i+1] checks only the next index value against previous index value
        if(split[i] !== split[i+1]) {
            result += split[i] + ' '
        }
    }  
    return result
}


console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta');