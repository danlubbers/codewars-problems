// https://www.codewars.com/kata/removing-elements

// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

// My Answer
function removeEveryOther(arr){
    let newArr= [];
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// Best Practice using ES6
function removeEveryOther(arr) {
    return arr.filter((e, i) => i % 2 === 0)
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
console.log(removeEveryOther([]), []);