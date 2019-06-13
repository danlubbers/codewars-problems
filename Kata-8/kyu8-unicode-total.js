// https://www.codewars.com/kata/unicode-total/train/javascript

// You'll be given a string, and have to return the total of all the unicode characters as an int. Should be able to handle any characters sent at it.

// examples:
// uniTotal("a") == 97 uniTotal("aaa") == 291

// My Answer
function uniTotal(str) {
    if(str === '') return 0;
    
    let split = str.split('')
    return split.map(e => e.charCodeAt()).reduce((acc, curr) => acc + curr);   
}

// Best Practice
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

// // Using For Loop
function uniTotal(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count += str.charCodeAt(i)
    }
    return count
}

console.log(uniTotal(""), 0);

console.log(uniTotal("a"), 97);
console.log(uniTotal("b"), 98);
console.log(uniTotal("c"), 99);
console.log(uniTotal("d"), 100);
console.log(uniTotal("e"), 101);

console.log(uniTotal("aaa"), 291);

console.log(uniTotal("Mary Had A Little Lamb"),1873);