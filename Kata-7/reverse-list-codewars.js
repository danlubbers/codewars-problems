// https://www.codewars.com/kata/reverse-list

// Write reverseList function that simply reverses lists.

// My Answer using 'reverse'
function reverseList(arr) {
    return arr.reverse()
}

// My Answer using a FOR LOOP
function reverseList(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    return reversed
}

console.log(reverseList([]), []);
console.log(reverseList([1,2,3]), [3,2,1]);