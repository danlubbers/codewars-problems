// https://www.codewars.com/kata/cat-years-dog-years-2/train/javascript

// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

// Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// My Answer
function ownedCatAndDog(catYears, dogYears) {
    function getAge(years, eachYear) {
        return years < 15 ? 0 : years < 24 ? 1 : 2 + (years - 24) / eachYear;
      }
    return [Math.floor(getAge(catYears, 4)), Math.floor(getAge(dogYears, 5))];    
}

// Best Practice
const ownedCatAndDog = (catYears, dogYears) => [
    (catYears < 24) ? catYears / 15 : (catYears - 16) / 4,
    (dogYears < 24) ? dogYears / 15 : (dogYears - 14) / 5
    ].map(Math.floor);




console.log(ownedCatAndDog(15,15), [1,1]);
console.log(ownedCatAndDog(24,24), [2,2]);
console.log(ownedCatAndDog(56,64), [10,10]);

console.log(ownedCatAndDog(9, 7), [0,0]);
console.log(ownedCatAndDog(18, 21), [1,1]);
console.log(ownedCatAndDog(19, 17), [1,1]);

console.log(ownedCatAndDog(12, 59), [0,9]);
