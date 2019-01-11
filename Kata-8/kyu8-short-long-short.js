// https://www.codewars.com/kata/short-long-short

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).

// For example:

// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

// My Answer
function solution(a, b){
    let arr = [];
    let aSplit = a.split(' ')
    let bSplit = b.split(' ')
    // console.log(aSplit)
    // console.log(aSplit.length)
    // console.log(bSplit.length)

    if(a.length < b.length) {
        arr.push(a, b, a)
    } else {
        arr.push(b, a, b)
    }
    return arr.join('') 
}

// Best Practice
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b;
}
  
console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');