// https://www.codewars.com/kata/multiples-of-3-or-5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// My Answer
function solution(number){
  let arr = [];

  for (let i = 1; i < number; i++) {
      if(i % 5 === 0 || i % 3 === 0) {
          arr.push(i)
      }
  }

  return arr.reduce((acc, val) => acc + val, 0);

}

// Best Practice
function solution(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if(i % 5 === 0 || i % 3 === 0) {
            sum += i
        }
    }
    return sum
}


console.log(solution(10)) // 23
console.log(solution(20)) // 78
console.log(solution(200)) // 9168