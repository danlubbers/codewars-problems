// https://www.codewars.com/kata/training-js-number-21-methods-of-string-object-trim-and-the-string-template/train/javascript

// Coding in function ```fiveLine```, function accept 1 parameter:```s```. ```s``` is a string.

// Please return a string of 5 lines(newline symbol is ```\n```). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter ```s``` may contain some whitespace, please clear them before using ```s```.

// Note2: Using a string template can make your job easier.

// Example:
// ```
// fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
// a
// aa
// aaa
// aaaa
// aaaaa       <---The effect when you console.log it
// fiveLine("  xy ") 
// should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy  <---The effect when you console.log it

// My Answer
function fiveLine(s){
    let sTrimmed = s.trim();
    let finalStr = '';

    for (let i = 1; i <= 5; i++) {
        if(i === 5) finalStr += `${sTrimmed.repeat(i)}`
        else finalStr += `${sTrimmed.repeat(i)}\n`
    }
    return finalStr
}

// Best Practice, but I don't think so
function fiveLine(s){
    s = s.trim();
    return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`;
}

// What I think is the best
function fiveLines(s) {
    let str = s.trim()
    let result = '';
    
    for (let i = 1; i <= 5; i++) {
        result += str.repeat(i) + '\n';
    }
    return result.trim()
}

console.log(fiveLine("  a") , "a\naa\naaa\naaaa\naaaaa");
console.log(fiveLine("\txy \n") , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
console.log(fiveLine("           Ok               ") , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");
