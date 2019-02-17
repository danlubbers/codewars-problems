// https://www.codewars.com/kata/multiply-array-values-and-filter-non-numeric

// Your task is to write a function, which takes two arguments and returns an array. First argument is an array of values, scecond is multiplier. Function is named "multiplyAndFilter" and it should filter all non-numeric values and multiply the rest by given multiplier.

// My Answer
function multiplyAndFilter(array, multiplier){
    let newArr = [];
    for(let i = 0; i < array.length; i++) { 
        if(typeof array[i] !== 'object') 
        if(array[i] === 0 || array[i]) {
            newArr.push(array[i] * multiplier)  
        }
    }
    return newArr.filter(e => !isNaN(e))  
}

// Best Practice
function multiplyAndFilter(array, multiplier) {
    return array.filter(e => typeof(e) == 'number').map(e => e * multiplier)
}

// Using For Loop
function multiplyAndFilter(array, multiplier) {
    let sum = [];
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            sum.push(array[i] * multiplier)
        }
    }
    return sum
}

console.log(multiplyAndFilter([1,2,3,4], 1.5)); // [1.5, 3, 4.5, 6]
console.log(multiplyAndFilter([1,2,3], 0)); // [0, 0, 0]
console.log(multiplyAndFilter([0,0,0], 2)); //  [0, 0, 0]
console.log(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3)); // [3,7.5,30]