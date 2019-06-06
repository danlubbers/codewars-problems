// https://www.codewars.com/kata/training-js-number-26-methods-of-arrayobject-map/train/javascript

// Coding in function ```isolateIt```. function accept 1  parameters ```arr```, it's a string array. Your task is to put a character "|" into the middle of each element. 

// If the string length is an even number, use the insert method. for example: ```"abcd"``` should became ```"ab|cd"```. ```"|"``` should be inserted between ```ab``` and ```cd```.

// If the string length is an odd number, use the replacement method. for example: ```"abcde"``` should became ```"ab|de"```. Character ```c``` will be replaced by ```|```.

// The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

// Some example:
// ```
// isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
// isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
// isolateIt(["1234","56789"]) should return ["12|34","56|89"]
// ```

// a little hint: Flexible use of ```slice()``` Will make the work more simple.

// My Answer
function isolateIt(arr){    
    let finalArr = [];
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if(arr[i].length % 2 === 0) {
            // console.log(arr[i].slice(0, arr[i].length / 2))
            finalArr.push(arr[i].slice(0, arr[i].length / 2) + '|' + arr[i].slice(arr[i].length / 2))
        } else if(arr[i].length % 2 !== 0) {
            finalArr.push(arr[i].slice(0, arr[i].length / 2) + '|' + arr[i].slice((arr[i].length / 2)+1))
        }
    }
    return finalArr
}

// Best Practice
function isolateIt(arr) {
    return arr.map(e => e.slice(0, e.length / 2) + '|' + e.slice(-e.length/2));
}

// Using Map with If statements
function isolateIt(arr){ 
    return arr.map(e => {
        if(e.length % 2 === 0) {return e.slice(0, e.length/2) + '|' + e.slice(e.length / 2)}
        if(e.length % 2 !== 0) {return e.slice(0, e.length/2) + '|' + e.slice((e.length / 2)+1)}
})
}

console.log(isolateIt(["abcd","efgh"]) , ["ab|cd","ef|gh"]);
console.log(isolateIt(["abcde","fghij"]) , ["ab|de","fg|ij"]);
console.log(isolateIt(["1234","56789"]) , ["12|34","56|89"]);
