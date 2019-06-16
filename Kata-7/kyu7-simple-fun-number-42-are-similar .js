// https://www.codewars.com/kata/simple-fun-number-42-are-similar

// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements.

// Given two arrays, check whether they are similar.

// Example
// For A = [1, 2, 3] and B = [1, 2, 3], the output should be true;

// For A = [1, 2, 3] and B = [2, 1, 3], the output should be true;

// For A = [1, 2, 2] and B = [2, 1, 1], the output should be false.

// Input/Output
// [input] integer array A

// Array of integers.

// Constraints: 3 ≤ A.length ≤ 10000, 1 ≤ A[i] ≤ 1000.

// [input] integer array B

// Array of integers of the same length as A.

// Constraints: B.length = A.length, 1 ≤ B[i] ≤ 1000.

// [output] a boolean value

// true if A and B are similar, false otherwise

// My Answer
function areSimilar(a, b) {
   let newArr = [];
   for(let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) newArr.push(i)
   }
    return newArr.length === 0 || newArr.length === 2 && a[newArr[0]] === b[newArr[1]] && b[newArr[0]] === a[newArr[1]];
}

// Best Practice
function areSimilar(a, b) {
   let s = a.map((e, i) => [e, i]).filter(e => e[0] !== b[e[1]]);
   console.log(s)
   if(s.length === 0) return true;
   if(s.length !== 2) return false;
   return s[0][0] === b[s[1][1]] && s[1][0] === b[s[0][1]]
} 
// Interesting to me
function areSimilar(a, b) {
   let count = 0;
   for(let i = 0; i < a.length; i++) {
      if(a[i] !== b[i]) count++;
      if(count > 2) return false;
   }
   return a.sort().join('') == b.sort().join('');
}

console.log(areSimilar([1, 2, 3],[2, 1, 3]),true)
console.log(areSimilar([1, 2, 2],[2, 1, 1]),false)
console.log(areSimilar([1, 2, 3],[1, 10, 2]),false)

console.log(areSimilar([887,981,726,174,258,174,139,529,479,741,215,326,761,253,953,560,452,810,579,368,554,27,873,146,543,991,391,681,325,590,391,490,647,171,653,319,356,581,29,682,538], [887,981,726,174,258,174,581,529,479,741,215,326,368,253,953,560,538,810,579,761,554,27,873,146,543,991,391,681,325,590,391,490,647,171,653,319,356,139,29,682,452] ), false)

console.log(areSimilar([47,554,931,855,236,636,502,559,295,936,550,894,974,225,940,773,531,432,928,358,589,243,46,646,903,989,605,426,840,271,25,476,733,333,443,178,598,131,37,501,691,297,203,97,160,101,298,77,268,521,24,261,211,267,250,200,683,842,713,780], [77,554,931,855,236,636,502,559,295,203,550,298,974,225,940,773,531,432,928,358,589,243,46,646,903,989,605,426,840,271,25,476,733,333,443,178,598,131,37,501,691,297,936,97,160,101,894,47,268,521,24,261,211,267,250,200,683,842,713,780] ), false)