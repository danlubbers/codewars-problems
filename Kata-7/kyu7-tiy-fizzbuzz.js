// https://www.codewars.com/kata/tiy-fizzbuzz

// In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

// If a letter is a upper case consonants, replace that character with "Iron".
// If a letter is a lower case consonants or a non-alpha character, do nothing to that character
// If a letter is a upper case vowel, replace that character with "Iron Yard".
// If a letter is a lower case vowel, replace that character with "Yard".

// My Answer
function tiyFizzBuzz(sentence){
    let final = []
    let arr = sentence.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A' || arr[i] === 'E' || arr[i] === 'I' || arr[i] === 'O' || arr[i] === 'U') {
             final.push('Iron Yard');
        } else if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
            final.push('Yard')
        } else if (arr[i] === 'B' || arr[i] === 'C' || arr[i] === 'D' || arr[i] === 'F' || arr[i] === 'G' || arr[i] === 'H' || arr[i] === 'J' || arr[i] === 'K' || arr[i] === 'L' || arr[i] === 'M' || arr[i] === 'N' || arr[i] === 'P' || arr[i] === 'Q' || arr[i] === 'R' || arr[i] === 'S' || arr[i] === 'T' || arr[i] === 'V' || arr[i] === 'W' || arr[i] === 'X' || arr[i] === 'Y' || arr[i] === 'Z') {
            final.push('Iron')
        } else {
            final.push(arr[i])
        }
    }
    return final.join('')
}

// Best Practices using regex
function tiyFizzBuzz(str) {
    return str.split('').map(letter => {
        if(/[AEIOU]/.test(letter)) {
            return "Iron Yard";
        } else if (/[aeiou]/.test(letter)) {
            return "Yard";
        } else if (/[A-Z]/.test(letter) && /[^AEIOU]/.test(letter)) {
            return 'Iron';
        } else {
            return letter;
        }
    }).join('')
}

console.log(tiyFizzBuzz("H"), "Iron");
console.log(tiyFizzBuzz("b"), "b");
console.log(tiyFizzBuzz("A"), "Iron Yard");
console.log(tiyFizzBuzz("a"), "Yard");
console.log(tiyFizzBuzz("Hello WORLD!"), "IronYardllYard IronIron YardIronIronIron!");
