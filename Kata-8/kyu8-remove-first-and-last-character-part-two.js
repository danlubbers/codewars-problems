// https://www.codewars.com/kata/remove-first-and-last-character-part-two/train/javascript

// This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.

// My Answer & Best Practice
function array(arr){
    return arr.split(',').slice(1, -1).join(' ') || null;
}

// Pop Shift way
function array(arr) {
    let data = arr.split(',');
    data.pop();
    data.shift();
    return data.length ? data.join(' ') : null;
}


console.log(array(''), null);
console.log(array('1'), null);
console.log(array('1, 3'), null);
console.log(array('1,2,3'), '2');

console.log(array('aa6,41,da3,3,d,a3,cc5,cf'), '41 da3 3 d a3 cc5');