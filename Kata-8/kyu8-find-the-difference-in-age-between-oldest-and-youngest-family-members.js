// https://www.codewars.com/kata/find-the-difference-in-age-between-oldest-and-youngest-family-members/train/javascript

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

// My Answer
function differenceInAges(ages){
    let arr = [];
    let agesSort = ages.sort((a, b) => a - b)
    
    arr.push(agesSort[0])
    arr.push(agesSort[agesSort.length - 1])

    let diff = arr[1] - arr[0]
    arr.push(diff)

    return arr
}

// Best Practice
function differenceInAges(ages) {
    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
    
    return [min, max, diff]
}

// using sort and pop
function differenceInAges(ages) {
    let agesSort = ages.sort((a, b) => a - b)
    let youngest = agesSort.shift()
    let oldest = agesSort.pop()
    return [youngest, oldest, oldest - youngest]
}


console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);