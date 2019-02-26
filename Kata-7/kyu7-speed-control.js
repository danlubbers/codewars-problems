// https://www.codewars.com/kata/speed-control/train/javascript

// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:

// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:

// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:
// with the above data your function gps(s, x)should return 74

// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

// (3600 * delta_distance) / s

// My Answer close to Best Answer
function gps(s, x) {
    if(x.length <= 1) return 0

    let newArr = [];
    for(let i = 0; i < x.length-1; i++) {
        newArr.push(3600 * (x[i+1]-x[i]) / s)
    }
    // Better to Use spread operator 
    return Math.floor(Math.max(...newArr))
    // Than sort and picking up first index
    // return Math.floor(newArr.sort((a, b) => b - a)[0])
}

// Most Clever using reduce
const gps = (s, x) => Math.floor(3600 * x.slice(1).reduce((acc, curr, i) => Math.max(acc, curr - x[i]), 0) / s)

// Shorter using map
const gps = (s, x) => Math.max(...x.slice(1).map((e, i) => (e - x[i]) / s * 3600)) | 0


console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])) // 74
console.log(gps(23, [0, 0.22,0.44,0.66,0.88,1.1,1.32,1.54,1.76,1.98,2.2,2.42,2.88,3.12,3.36,3.6,3.84,4.08,
4.32 ])) // 71
console.log(gps(28, [ 0,0.18,0.36,0.54,0.72,0.9,1.08,1.26,1.44,1.62,1.8,1.98,2.52,2.73,3.08,3.3,3.52,3.74 ])) // 69
console.log(gps(12, [1]))