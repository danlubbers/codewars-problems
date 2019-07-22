// https://www.codewars.com/kata/is-there-a-vowel-in-there/train/javascript

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// My Answer with regex
function isVow(a){
    return a.map(e => /[aeiou]/.test(String.fromCharCode(e)) ? String.fromCharCode(e) : e);  
}

// Similar without using regex
let isVow = a => a.map(x => 'aeiou'.includes(y=String.fromCharCode(x)) ? y : x);


// For Loop
function isVow(a) {
    for(let i = 0; i < a.length; i++) {
        let char = String.fromCharCode(a[i])
        if('aeiou'.indexOf(char) !== -1) char = a[i]
    }
    return a
}

// Long way with For Loop
function isVow(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === 97 || a[i] === 101 || a[i] === 105 || a[i] === 111 || a[i] === 117) {
            var number = a[i];
            var vowel = String.fromCharCode(number);
            a[i] = vowel;
        }
    }
    return a;
}



console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
// console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
    