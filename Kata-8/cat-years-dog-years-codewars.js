// https://www.codewars.com/kata/cat-years-dog-years

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// My Answer
var humanYearsCatYearsDogYears = function(humanYears) {
    let arrYears = [];

    arrYears.push(humanYears)

    if(humanYears === 1) {
        arrYears.push(15)
    } else if(humanYears === 2) {
        arrYears.push(15+9)
    } else {
        arrYears.push((24 + 4 * humanYears) - 8) 
    }

    if(humanYears === 1) {
        arrYears.push(15)
    } else if(humanYears === 2) {
        arrYears.push(15+9)
    } else {
        arrYears.push((24 + 5 * humanYears) - 10) 
    }
    return arrYears;
}

// Best Practice
const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
    ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
  ];


console.log(humanYearsCatYearsDogYears(1), [1,15,15]);
console.log(humanYearsCatYearsDogYears(2), [2,24,24]);
console.log(humanYearsCatYearsDogYears(10), [10,56,64]);