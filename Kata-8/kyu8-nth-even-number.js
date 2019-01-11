// https://www.codewars.com/kata/get-nth-even-number

// // nthEven(1) //=> 0, the first even number is 0
// nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)

// nthEven(100) //=> 198
// nthEven(1298734) //=> 2597466

// My Answer
// function nthEven(num){
//     return 2 * num - 2   
// }

// While Loop way
function nthEven(num) {
    let count = 1;
    let i = 0;
    while(count < num) {
        if(i % 2 === 0) {
            count++;
            i++;
        }
        i++
    }
    return i
}


// console.log(nthEven(1), 0, "Wrong Value!");
// console.log(nthEven(2), 2, "Wrong Value!");
console.log(nthEven(3), 4, "Wrong Value!");
  
console.log(nthEven(100), 198, "Wrong Value!");
console.log(nthEven(1298734), 2597466, "Wrong Value!")