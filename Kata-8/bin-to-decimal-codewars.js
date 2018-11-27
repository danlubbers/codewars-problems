// https://www.codewars.com/kata/bin-to-decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    return parseInt(bin, 2)
}

console.log(binToDec(['1'])) // 1
console.log(binToDec(['0'])) // 0
console.log(binToDec(['1001001'])) // 73