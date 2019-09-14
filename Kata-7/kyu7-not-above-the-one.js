// https://www.codewars.com/kata/not-above-the-one/train/javascript

// Write an algorithm to remove all the numbers above 1 from the given array.

// Just in case we want to make any changes, create an array of the indexes of the removed numbers.

// Return a nested array or a tuple:

// the first array being only the 1s and 0s
// the second array being the indexes of the removed numbers
// [ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ]
// should return

// [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]

// My Answer
function binaryCleaner(arr) {
    let filtered = arr.reduce((acc, curr, i) => {
            if(curr > 1) {
                acc.push(i)
            }
            return acc
        }, []);
    
    let filteredOnesAndZeros = arr.filter(e => e <= 1);

    return [filteredOnesAndZeros, filtered];
}

// Best Practice
function binaryCleaner(arr) {
    let result = [[], []];
    arr.map((e, i) => e < 2 ? result[0].push(e) : result[1].push(i));
    return result;
}

// Using For Loop
function binaryCleaner(arr) {
    aboveOneArr = [];
    belowOneArr = [];

    for(let i = 0; arr.length; i++) {
        if(arr[i] > 1) {
            aboveOneArr.push(i)
        } else {
            belowOneArr.push(i)
        }
    }
    return [belowOneArr, aboveOneArr];
}


console.log(binaryCleaner([0,1,2,1,0,2,1,1,1,0,4,5,6,2,1,1,0]), [ [ 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0 ], [ 2, 5, 10, 11, 12, 13 ] ], "Should return");
console.log(binaryCleaner([0,1,1,2,0]), [ [ 0, 1, 1, 0 ], [ 3 ] ], "Should return");
console.log(binaryCleaner([2,2,0]), [ [ 0 ], [ 0, 1 ] ], "Should return: ");
console.log(binaryCleaner([0,1,2,1,0,2,1,1]), [ [ 0, 1, 1, 0, 1, 1 ], [ 2, 5 ] ], "Should return");
console.log(binaryCleaner([1]), [ [ 1 ], [] ], "Should return");