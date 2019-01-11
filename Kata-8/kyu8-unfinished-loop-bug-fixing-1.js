// https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished For Loop!

// My Answer and Best Practice
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
}
console.log(createArray(1),[1]);
console.log(createArray(2),[1,2]);
console.log(createArray(3),[1,2,3]);
console.log(createArray(4),[1,2,3,4]);
console.log(createArray(5),[1,2,3,4,5]);