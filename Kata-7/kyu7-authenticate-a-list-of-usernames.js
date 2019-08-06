// https://www.codewars.com/kata/authenticate-a-list-of-usernames/train/javascript

// Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

// The guidelines say that the username is valid only if:

// it is between 6-10 characters long;
// contains at least 1 lowercase letter;
// contains at least 1 number;
// contains only numbers and lowercase letters.
// Examples of arrays that will be tested:

// const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true

// const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number

// const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character

// Notes:

// You will always be given an array with at least 1 string to check.

// My Answer
function authList(arr) {
    let regex = /^(?=[a-z]*\d)(?=\d*[a-z])[a-z\d]{6,10}$/;
    return arr.every(e => regex.test(e))  
}

// Best Practice
function authList(arr) {
    return arr.every( e => {
        return /^(?=.*\d)(?=.*[a-z])[a-z\d]{6,10}$/.test(e)
    })
}


const usernames1 = ['john123', 'alex222', 'sandra1'];
const usernames2 = ['john123', 'alex222', 'sandraW'];
const usernames3 = ['john_123', 'alex222', 'sandra1'];
const usernames4 = [''];
const usernames5 = ['123456'];
const usernames6 = ['abcdef'];

console.log(authList(usernames1), true);
console.log(authList(usernames2), false);
console.log(authList(usernames3), false);
console.log(authList(usernames4), false);
console.log(authList(usernames5), false);
console.log(authList(usernames6), false);