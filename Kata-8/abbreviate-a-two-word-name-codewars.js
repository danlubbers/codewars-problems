// https://www.codewars.com/kata/abbreviate-a-two-word-name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// My Answer
function abbrevName(name) {
    let abbrev = [];
    let arr = name.split(' ')
    abbrev.push(arr[0].charAt(0))
    abbrev.push(arr[1].charAt(0))
    return abbrev.join().replace(',', '.').toUpperCase()  
}

// Best Practice
function abbrevName(name) {
    return name.split(' ').map(e => e[0].toUpperCase()).join('.')
}

console.log((abbrevName("Sam Harris")));
console.log((abbrevName("Patrick Feenan"), "P.F"));
console.log((abbrevName("evan cole")));
console.log((abbrevName("P Favuzzi"), "P.F"));
console.log((abbrevName("David Mendieta"), "D.M"));