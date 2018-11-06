// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My Answer
function countPositivesSumNegatives(arr) {
    console.log(arr)
    let resultArr = [];
    if (arr !== null && arr.length !== 0) {
        let positiveCount = arr.filter(e => e > 0).length;
        let negSum = arr.filter(e => e < 0).reduce((acc, val) => acc + val, 0);
        resultArr.push(positiveCount, negSum);
        return resultArr;
    } else {
        console.log(resultArr)
        return resultArr
    }
}

// Using Reduce

const countPositivesSumNegatives = input => {
    if(input === null || input.length === 0) return [];
    else {
        return input.reduce((acc, val) => {
            if(val > 0) return [acc[0] += 1, acc[1]];
            else return [acc[0], acc[1] + val];
        }, [0,0]);
    }
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65]);
console.log(countPositivesSumNegatives(null))