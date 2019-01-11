// https://www.codewars.com/kata/twice-as-old 

// Twice as Old

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// My Answer
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let result = 0;
    let sonDoubled = sonYearsOld * 2   
    if (dadYearsOld > sonDoubled) {
        result = dadYearsOld - sonDoubled
    } else {
        result = sonDoubled - dadYearsOld
    }
    return result
}

// Best Practice Answer
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log((twiceAsOld(36,7) , 22))
console.log((twiceAsOld(55,30) , 5))
console.log((twiceAsOld(42,21) , 0))