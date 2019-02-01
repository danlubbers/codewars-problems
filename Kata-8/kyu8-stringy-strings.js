// https://www.codewars.com/kata/stringy-strings/train/javascript

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// My Answer
function stringy(size) {
    let string = '';
    for(let i = 0; i < size / 2; i++) {
        if (size[i] % 2 !== 0) {
            string += '10'
        } 
    }
    return size % 2 !== 0 ? string.slice(0, -1) : string;
}

// Best Practice
function stringy(size) {
    let str = '';
    for(let i = 1; i <= size; i++) {
        str += i % 2;
    }
    return str;
}

// Easier code to understand
function stringy(size) {
    let string = '1';
    for(let i = 0; i < size -1; i++) {
        if(i % 2 == 0) {
            string += '0';
        } else {
            string += '1';
        }
    }
    return string;
}

console.log(stringy(4)); // '1010'
console.log(stringy(6)); // '101010'
console.log(stringy(18)); // '101010101010101010'
console.log(stringy(23)); // '10101010101010101010101' 