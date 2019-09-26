// https://www.codewars.com/kata/spacify/train/javascript

// TModify the spacify function so that it returns the given string with spaces insertedbetween each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// My Answer & Best Practice
function spacify(str) {
    return str.split('').join(' ');
};

// Most Clever
function spacify(str) {
    return [...str].join(' ');
}



console.log(spacify('hello world'),'h e l l o   w o r l d');
console.log(spacify('12345'),'1 2 3 4 5');