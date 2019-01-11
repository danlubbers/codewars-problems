// https://www.codewars.com/kata/convert-hash-to-an-array

// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically.

// My Answer
function convertHashToArray(hash){
    let arr = [];
    for(let i in hash) {
        arr.push(i)
    }
    // console.log(arr)

    arr.sort()

    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        let newKey = arr[i]
        arr[i]  = [newKey, hash[newKey]]
    }
    return arr
}

// Best Practices
function convertHashToArray(hash) {
    return Object.entries(hash).sort()
}


console.log(convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]);
console.log(convertHashToArray({name: "Jeremy", age: 24}),[["age", 24], ["name", "Jeremy"]]);
console.log(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}),[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
console.log(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}),[["powerLevelOver", 9000], ["product", "CodeWars"]]);
console.log(convertHashToArray({}),[]);

