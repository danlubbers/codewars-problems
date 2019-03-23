// https://www.codewars.com/kata/changing-letters/train/javascript

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// My Answer
function swap(str){
    let regex = /[aeiou]/gi;
    let output = str.replace(regex, function(e) {
        e = e.toUpperCase();
        return e
    });
    return output
};

// Best Practice
function swap(str) {
    return str.replace(/[aeiou]/gi, e => e.toUpperCase())
}

// Using for and if statements
function swap(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';

    for(letter of str) {
        if(vowels.includes(letter)) {
            newStr += letter.toUpperCase();
        } else {
            newStr += letter;
        }
    }
    return newStr
}

console.log(swap("HelloWorld!"),"HEllOWOrld!")
console.log(swap("Sunday"),"SUndAy")