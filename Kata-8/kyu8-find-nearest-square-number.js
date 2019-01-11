// https://www.codewars.com/kata/find-nearest-square-number

// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// My Answer
function nearestSq(num){
    let sqrRounded = Math.round(Math.sqrt(num))
    return sqrRounded * sqrRounded
}

// Best Practices
function nearestSq(n){
    return Math.round(n**0.5)**2
}

console.log(nearestSq(1),1)
console.log(nearestSq(2),1)
console.log(nearestSq(10),9)
console.log(nearestSq(111),121)
console.log(nearestSq(9999),10000)