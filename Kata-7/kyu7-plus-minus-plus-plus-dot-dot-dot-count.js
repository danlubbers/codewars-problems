// https://www.codewars.com/kata/plus-minus-plus-plus-dot-dot-dot-count/train/javascript

// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5]

// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |

// return 2;

// My Answer
function catchSignChange(arr) {
    let count = 0;

   arr.reduce((acc, currentVal, i) => {
       console.log(acc);
       console.log(currentVal);
       console.log(i);
       
        const sign = currentVal >= 0;
        const prevSign = acc >= 0;
       
        if(prevSign !== sign && i > 0) count++;
            return currentVal;
   }, []);

    return count;
}

// Most Clever
function catchSignChange(arr) {
    return arr.slice(1).filter((e, i) => (e<0) !== (arr[i] < 0)).length;
}

// For loop
function catchSignChange(arr) {
    let changes = 0;

    for(let i = 1; i < arr.length; i++) {
        changes += arr[i] < 0 !== arr[i - 1] < 0;
    }
    return changes;
}

console.log(catchSignChange([1, 3, 4, 5]), 0);
console.log(catchSignChange([1, -3, -4, 0, 5]), 2);
console.log(catchSignChange([]), 0);
console.log(catchSignChange([-47,84,-30,-11,-5,74,77]), 3);