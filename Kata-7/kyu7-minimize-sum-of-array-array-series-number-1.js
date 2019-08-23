// https://www.codewars.com/kata/minimize-sum-of-array-array-series-number-1/train/javascript

// Given an array of intgers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74

// Using Array and For loop
function minSum(arr) {
    let sortedArr = arr.sort((a, b) => a -b);
    let sumArr= [];
    
    for(let i = 0; i < sortedArr.length / 2; i++) {
        // console.log(sortedArr[sortedArr.length-1-i])
        sumArr.push(sortedArr[i] * sortedArr[sortedArr.length-1-i])
    }

    return sumArr.reduce((acc, curr) => acc + curr)
}

// Best Practice
function minSum(arr) {
    return arr.sort((a, b) => a - b)
        .slice(0, arr.length / 2)
        .reduce((acc, curr, index) => acc += curr * arr[ arr.length - index - 1], 0);
}

// For Loop that increments and decrements
function minSUm(arr) {
    const sorted = arr.sort((a, b) => a - b);
    let sum = 0;

    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
        sum += sorted[i] * sorted[j];
    }
    return sum;
}

// Using slice and for loop
function minSum(arr) {
    let sum = 0;
    let ascending = arr.sort((a, b) => a - b).slice(0, arr.length / 2);
    console.log(ascending)
    let descending = arr.sort((a, b) => b - a).slice(0, arr.length / 2);
    console.log(descending)

    for(let i = 0; i < arr.length /2; i++) {
        sum += descending[i] * ascending[i]
    }
    return sum
}

console.log(minSum([5,4,2,3]), 22);
console.log(minSum([12,6,10,26,3,24]), 342);
console.log(minSum([9,2,8,7,5,4,0,6]), 74);