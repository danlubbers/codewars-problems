// https://www.codewars.com/kata/reverse-vowels-in-a-string/train/javascript

// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// reverseVowels("Hello!"); // "Holle!"
// reverseVowels("Tomatoes"); // "Temotaos"
// reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// My Answer
function reverseVowels(str) {
    let split = str.split('');
    let regex = /[aeiou]/i;
    let vowels = [];
    let notVowels = [];
    
    for(let i = 0; i < split.length; i++) {
        if(regex.test(split[i])) {
            vowels.push(split[i])
        } else {
            notVowels.push(split[i])
        }
    }

    for(let i = 0; i < split.length; i++) {
        if(regex.test(split[i])) {
            // pop is the key to replacing the vowels in reverse
            split[i] = vowels.pop()
        }
    }
    return split.join('')
}

// Best Practice
const reverseVowels = str => {
    let vowels = str.replace(/[^aeiou]/gi, '').split('');
    console.log(vowels)
    return str.replace(/[aeiou]/gi, _ => vowels.pop());
}   

console.log(reverseVowels("Hello!"), "Holle!");
console.log(reverseVowels("Tomatoes"), "Temotaos");
console.log(reverseVowels("Reverse Vowels In A String"), "RivArsI Vewols en e Streng");