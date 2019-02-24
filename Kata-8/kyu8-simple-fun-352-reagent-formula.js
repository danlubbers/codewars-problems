// https://www.codewars.com/kata/simple-fun-number-352-reagent-formula

// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

// Example
// For formula = [1,3,7], The output should be true.

// For formula = [7,1,2,3], The output should be false.

// For formula = [1,3,5,7], The output should be false.

// For formula = [1,5,6,7,3], The output should be true.

// For formula = [5,6,7], The output should be true.

// For formula = [5,6,7,8], The output should be true.

// For formula = [6,7,8], The output should be false.

// For formula = [7,8], The output should be true.

// Note
// All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

// My Answer
function isValid(formula){
    let first = !(formula.includes(1) && formula.includes(2))
    let second = !(formula.includes(3) && formula.includes(4))
    let third = (formula.includes(5) === formula.includes(6))
    let fourth = (formula.includes(7) || formula.includes(8))

    return first && second && third && fourth  
}

// Best Practice
function isValid(formula) {
    return  !(formula.includes(1) && formula.includes(2)) &&
            !(formula.includes(3) && formula.includes(4)) &&
            (formula.includes(5) === formula.includes(6)) && 
            (formula.includes(7) || formula.includes(8))
}

console.log(isValid([1,3,7]),true)
console.log(isValid([7,1,2,3]),false)
console.log(isValid([1,3,5,7]),false)
console.log(isValid([1,5,6,7,3]),true)
console.log(isValid([5,6,7]),true)
console.log(isValid([5,6,7,8]),true)
console.log(isValid([6,7,8]),false)
console.log(isValid([7,8]),true)