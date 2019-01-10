// https://www.codewars.com/kata/fizz-slash-buzz

// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

// For example, solution(20) should return [5, 2, 1]

// My Answer
function solution(number){
    let A = 0;
    let B = 0;
    let C = 0;

    for(let i = 1; i < number; i++) {
        if (i % 3 === 0 && i % 5 !== 0) A++
        if (i % 3 !==0 && i % 5 ===0) B++
        if (i % 3 ===0 && i % 5 ===0) C++
    }

    return [A, B, C]
}

// Best Practice
function solution(number) {
    number--;
    const c15 = Math.floor(number / 15);
    const c3 = Math.floor(number / 3) - c15;
    const c5 = Math.floor(number / 5) - c15;

    return [c3, c5, c15]
}


console.log(solution(20), [5, 2, 1]);
console.log(solution(2), [0, 0, 0]);
console.log(solution(14), [4,2,0]);
console.log(solution(30), [8, 4, 1]);
console.log(solution(141), [37, 19, 9]);