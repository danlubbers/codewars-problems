// https://www.codewars.com/kata/expressions-matter

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().

// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// _It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
// Input >> Output Examples:
// 1- expressionsMatter(1,2,3)  ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

// 2- expressionsMatter(1,1,1)  ==>  return 3
// Explanation:
// After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

// 3- expressionsMatter(9,1,1)  ==>  return 18
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18.

// My Answer
function expressionMatter(a, b, c) {
    let one = a * (b + c);
    let two = a * b * c;
    let three = a + b * c;
    let four = (a + b) * c;
    let five = a + b + c;
    let six = (a + b) * c;

    if (one >= two && one >= three & one >= four && one >= five && one >= six) {
        return one
    } else if(two >= one && two >= three & two >= four && two >= five && two >= six) {
        return two
    } else if(three >= one && three >= two & three >= four && three >= five && three >= six) {
        return three
    } else if(four >= one && four >= two & four >= three && three >= five && four >= six){
        return four
    } else if(five >= one && five >= two & five >= three && five >= four && five >= six) {
        return five
    } else {
        return six
    }
}

// Best Practices
function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    );
  }

console.log(expressionMatter(2, 1, 2), 6);
console.log(expressionMatter(2, 1, 1), 4);
console.log(expressionMatter(1, 1, 1), 3);
console.log(expressionMatter(1, 2, 3), 9);
console.log(expressionMatter(1, 3, 1), 5);
console.log(expressionMatter(2, 2, 2), 8)
console.log(expressionMatter(1, 1, 10), 20);