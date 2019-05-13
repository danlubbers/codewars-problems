// https://www.codewars.com/kata/training-js-number-16-methods-of-string-object-slice-substring-and-substr/train/javascript

// Coding in function ```cutIt```, function accept 1 parameter:```arr```. ```arr``` is a string array.

// The first mission: Traversing ```arr```, find the shortest string length.

// The second mission: Traversing ```arr``` again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

// for example:

// ```
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

// My Answer
function cutIt(arr){
    let smallestLength = arr.map(e => e.length).sort((a, b) => a - b).shift();
    return arr.map(e => e.slice(0, smallestLength)); 
}

// Best Practice
function cutIt(arr) {
    const minLength = Math.min(...arr.map(e => e.length));
    return arr.map(e => e.slice(0, minLength))
}

// Using For Loop
function cutIt(arr) {
    let newArr = [];
    let shortest = '';

    for(let i = 0; i < arr.length; i++) {
        let currentStr = arr[i]

        if(currentStr < shortest.length || shortest.length === 0) {
            shortest = currentStr
        }
    }

    for(let j = 0; j < arr.length; j++) {
        let currentStr2 = arr[j];

        newArr.push(currentStr2.slice(0, shortest.length));
    }
    return newArr;
}

console.log(cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]);
console.log(cutIt(["abc","defgh","ijklmn"]) , ["abc","def","ijk"]);
console.log(cutIt(["codewars","javascript","java"]) , ["code","java","java"]);
