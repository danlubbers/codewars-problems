// https://www.codewars.com/kata/561046a9f629a8aac000001d/train/javascript

// You have two arrays in this kata, every array contain only unique elements. Your task is to calculate number of elements in first array which also are in second array.

// My Answer
function matchArrays(arr1, arr2){
  return arr1.filter(e => arr2.includes(e)).length;
}

// Best Practice
function matchArrays(arr1, arr2) {
  return arr1.filter(e => arr2.indexOf(e) !== -1).length;
}

// Using nested For Loop
function matchArrays(arr1, arr2) {
  let result = 0;

  for(let i = 0; i < arr1.length; i++) {
    for(j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) result++
    }
  }

  return result;
}

console.log(matchArrays(['Perl','Closure','JavaScript'],
['Go', 'C++','Erlang']),0);
console.log(matchArrays(['incapsulation','OOP','array'],
['time', 'propert','paralelism','OOP']),1);
console.log(matchArrays([1,2,3,4,5],
[2,3,4,5,6]),4);