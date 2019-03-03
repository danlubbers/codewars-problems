// https://www.codewars.com/kata/are-there-doubles

// Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or .

// You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

// Examples:

//   doubleCheck("abca")
//   //returns false

//   doubleCheck("aabc")
//   //returns true

//   doubleCheck("a 11 c d")
//   //returns true

//   doubleCheck("AabBcC")
//   //returns true

//   doubleCheck("a b  c")
//   //returns true

//   doubleCheck("a b c d e f g h i h k")
//   //returns false

//   doubleCheck("2020")
//   //returns false

//   doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
//   //returns false

// My Answer
function doubleCheck(str){
    let splitLow = str.toLowerCase().split('')

    for(let i = 0; i < splitLow.length; i++) {    
        console.log(splitLow[i])
        if(splitLow[i] === splitLow[i + 1]) {
            return true
        } 
    }
    return false;
}

// Best Practice
function doubleCheck(str) {
    return /(.)\1/i.test(str)
}

console.log(doubleCheck("abca"), false);
console.log(doubleCheck("aabc"), true);
console.log(doubleCheck("a 11 c d"), true);
console.log(doubleCheck("AabBcC"), true);
console.log(doubleCheck("a b  c"), true);
console.log(doubleCheck("a b c d e f g h i h k"), false);