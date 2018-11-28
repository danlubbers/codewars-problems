// https://www.codewars.com/kata/how-good-are-you-really

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You got an array with your colleges' points. Now calculate the average to your points!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your classes points. For calculating the average point you may add your point to the given array!

// My Answer
function betterThanAverage(classPoints, yourPoints) {
    let total = 0;
    for(let i = 0; i < classPoints.length; i++) {
        total += classPoints[i]
    }
    let average = total / classPoints.length
    if(yourPoints > average) {
        return true
    } else {
        return false
    }
}

// Best Practice
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

console.log(betterThanAverage([2, 3], 5), true)
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true)
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);