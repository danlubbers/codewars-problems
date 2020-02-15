// https://www.codewars.com/kata/593406b8f3d071d83c00005d/train/javascript

// From a sentence, deduce the total number of animals.

// For example :

// "I see 3 zebras, 5 lions and 6 giraffes." The answer must be 14

// "Mom, 3 rhinoceros and 6 snakes come to us!" The answer must be 9

// My Answer
function countAnimals(sentence) {
  return sentence.split(' ')
          .filter(e => e.match(/\d/))
          .reduce((acc, val) => +acc + +val, 0);
}

// Best Practice
function countAnimals(s) {
  return (s.match(/\d+/g) || []).reduce((acc, val) => acc + +val, 0)
}

console.log(countAnimals("I see 3 zebras, 5 lions and 6 giraffes."), 14, 'Live from the Savannah')
console.log(countAnimals("Mom, 3 rhinoceros and 6 snakes come to us!"), 9, 'Close the car !')
console.log(countAnimals("I do not see any animals here!"), 0, 'Live from the kitchen')
console.log(countAnimals("Oh no !! 1253 spiders, 19856 ants and 877 centipedes tickle my feet."), 21986)