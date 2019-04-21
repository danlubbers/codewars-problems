// https://www.codewars.com/kata/printer-errors/train/javascript

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// #Examples:

// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

// My Answer
function printerError(s) {
    let split = s.split('')
    let regexAM = /[^a-m]/i;
    console.log(regexAM.test(s))
    let count = 0;

    for(let i = 0; i < split.length; i++) {
        if(regexAM.test(split[i])) count += 1;
        
    }
    return `${count}/${s.length}`
}

// Using ES6
const printerError = s => `${s.split('').filter(e => /[^a-m]/i.test(e)).length}/${s.length}`;

// Best Practice
function printerError(s) {
    return s.match(/[^a-m]/g).length + '/' + s.length;
}

// Using charCodeAt instead of regex
function printerError(s) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
      if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
        count++;
      }
    }
    return count + '/' + s.length;
  }

var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
console.log(printerError(s), "3/56")