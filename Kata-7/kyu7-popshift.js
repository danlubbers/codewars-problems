// https://www.codewars.com/kata/popshift

// You will be given a string.

// You need to return an array of three strings by gradually pulling apart the string.

// You should repeat the following steps until the string length is 1:

// a) remove the final character from the original string, add to solution string 1. b) remove the first character from the original string, add to solution string 2.

// The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

// Example:

// "exampletesthere" becomes: ["erehtse","example","t"]

// My Answer
function popShift(str){
    let split = str.split('')

    let first = '';
    let second = '';
    
    while(split.length > 1) {
        first += split.pop()
        second += split.shift()
    } 

    return [first, second, split[0] || '']
}

// Using For Loop
function popShift(str) {
    let split = str.split('');
    let str1 = '', str2 = '', str3 = '';

    for(let i = 1; i <= split.length; i) {
        if(split.length !== 1) {
            str1 += split.pop();
            str2 += split.shift();
        } else {
            str3 += split.shift();
        }
    }
    return [str1, str2, str3]
}


console.log(popShift("letstalkaboutjavascriptthebestlanguage"), ['egaugnaltsebehttpir', 'letstalkaboutjavasc'])
// console.log(popShift("reusetestcasesbitcointakeovertheworldmaybewhoknowsperhaps"), ["spahrepswonkohwebyamdlroweht","reusetestcasesbitcointakeove", "r"]);
// console.log(popShift("turnsoutrandomtestcasesareeasierthanwritingoutbasicones"), ["senocisabtuognitirwnahtreis","turnsoutrandomtestcasesaree", "a"]);
console.log(popShift("exampletesthere"), ["erehtse","example","t"]);