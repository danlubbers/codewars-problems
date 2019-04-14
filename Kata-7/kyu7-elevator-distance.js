// https://www.codewars.com/kata/elevator-distance/train/javascript

// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0
// Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.

// My Answer using ES6
function elevatorDistance(array) {
    return array.map((e, i) => Math.abs(e - array[i + 1])).filter(e => e).reduce((acc, curr) => acc + curr);
}

// Best Practice using for loop
function elevatorDistance(arr) {
    let distance = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        distance += Math.abs(arr[i] - arr[i + 1])
    }
    return distance;
}

// For Of Loop
function elevatorDistance(arr) {
    let lastFloor = arr[0];
    let floorCount = 0;

    for (let key of arr.slice(1)) {
        console.log(key)
        floorCount += Math.abs(lastFloor - key);
        lastFloor = key;
    }
    return floorCount;
}


console.log(elevatorDistance([5,2,8]), 9);
console.log(elevatorDistance([1,2,3]), 2);
console.log(elevatorDistance([7,1,7,1]), 18);


