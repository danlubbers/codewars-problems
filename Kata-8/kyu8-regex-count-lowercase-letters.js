// https://www.codewars.com/kata/regex-count-lowercase-letters/train/javascript

// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// ```javascript lowercaseCount("abc"); ===> 3
// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

// ```csharp
// LowercaseCountCheck("abc") == 3
// LowercaseCountCheck("abcABC123") == 3
// LowercaseCountCheck("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"") == 3
// LowercaseCountCheck("") == 0
// LowercaseCountCheck("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"") == 0
// LowercaseCountCheck("abcdefghijklmnopqrstuvwxyz") == 26

// My Answer & Best Practice
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length;
}

// Second Best 
function lowercaseCount(str) {
    return str.replace(/[^a-z]/g, '').length;
}


console.log(lowercaseCount("abc"), 3);
console.log(lowercaseCount("abcABC123"), 3);
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
console.log(lowercaseCount(""), 0)
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);