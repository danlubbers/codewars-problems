// https://www.codewars.com/kata/hungarian-vowel-harmony-easy

// Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

// Vowel Harmony Rules (simplified)
// When the last vowel in the word is

// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak
// Examples:
// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"
// Preconditions:
// To keep it simple: All words end with a consonant :)
// All strings are unicode strings.
// There are no grammatical exceptions in the tests.

// My Answer
function dative(word) {
    let split = word.split('')
   
    for(let i = split.length - 1; i >= 0; i--) {
        if(split[i] === 'a' || split[i] === 'á' || split[i] === 'o' || split[i] === 'ó' || split[i] === 'u' || split[i] === 'ú') return `${word}nak`;
        if(split[i] === 'e' || split[i] === 'i'|| split[i] === 'e'|| split[i] === 'é'|| split[i] === 'i'|| split[i] === 'í'|| split[i] === 'ö'|| split[i] === 'ő'|| split[i] === 'ü'|| split[i] === 'ű') return `${word}nek`;
    }
}

// Best Practice using Regex
function dative(word) {
    return (/[aáoóuú]/.test(word) ? word + 'nak' : word + 'nek')
}

// Another way with for loop
function dative(word) {
    var nekArr = ["e","é","i","í","ö","ő","ü","ű"];
    var nakArr = ["a","á","o","ó","u","ú"];
    
    for(let i = word.length - 1; i >= 0; i--) {
        console.log(nekArr.indexOf(word[i]))
        if(nekArr.indexOf(word[i]) !== -1) return word + 'nek';
        if(nakArr.indexOf(word[i]) !== -1) return word + 'nak';
    }
    
}

console.log(dative("ablak")) // "ablaknak"
console.log(dative("tükör")) //"tükörnek"
console.log(dative("keret")) // "keretnek"
console.log(dative("otthon")) // "otthonnak"
console.log(dative("virág")) // "virágnak"
console.log(dative("tett")) // "tettnek"
console.log(dative("rokkant")) // "rokkantnak"
console.log(dative("rossz")) // "rossznak"
console.log(dative("gonosz")) // "gonosznak"