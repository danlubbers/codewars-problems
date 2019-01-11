// https://www.codewars.com/kata/get-key-slash-value-pairs-as-arrays

// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

// My Answer
function keysAndValues(data){
    let keyArr = []
    let valueArr = []
    let finalArr = []

    // For in Loop to loop over Object
    for (key in data) {
        // This pushes the "keys" in the the array
        keyArr.push(key)
        // This pushes the value on the keys into the array
        valueArr.push(data[key])
    }
    // This pushes the keyArr array into the final array to create our subarray
    finalArr.push(keyArr)
    finalArr.push(valueArr)

    return finalArr
}

// Best Practice
function keysAndValues(data) {
    let arr = [];
    // This pushes the "keys" in the the array
    arr.push(Object.keys(data));
    // This pushes the value on the keys into the array
    arr.push(Object.keys(data).map(e => data[e]))
    return arr
}

console.log(keysAndValues({a: 1, b: 2, c: 3})) // should return [['a', 'b', 'c'], [1, 2, 3]]