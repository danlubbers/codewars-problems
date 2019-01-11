// https://www.codewars.com/kata/small-enough-beginner

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// My Answer
function smallEnough(arr, limit) {
    let small = arr.map(e => e <= limit)
    let isFalse = small.filter(e => e === false)
    if(isFalse.includes(false)) {
        return false
    } else {
        return true
    }
}

// Best Practices
function smallEnough(arr, limit){
    console.log(Math.max(...arr))
    return Math.max(...arr) <= limit
  }

console.log((smallEnough([66, 101], 200), true));
console.log((smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false));
console.log((smallEnough([101, 45, 75, 105, 99, 107], 107), true));
console.log((smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true));