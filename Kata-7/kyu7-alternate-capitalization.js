// https://www.codewars.com/kata/alternate-capitalization/train/javascript

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// My Answer and quickest one to solve and get right the first time 7 BEST PRACTICE!!!
function capitalize(s){
    let first = s.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e).join('');
    let second = s.split('').map((e, i) => i % 2 !== 0 ? e.toUpperCase() : e).join('');

    return [first, second];
};

// Most Clever
function capitalize(s) {
    return [0, 1].map(a => [...s].map((b, i) => i % 2 === a ? b.toUpperCase() : b).join(''));
}

console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']); 