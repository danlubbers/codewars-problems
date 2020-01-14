//https://www.codewars.com/kata/57308546bd9f0987c2000d07/train/javascript 

// Training JS #28:
// methods of arrayObject---every() and some()

// This lesson we learn two methods of array: every() and some(). The every() method tests whether all elements in the array pass the test implemented by the provided function. The some() method tests whether some element in the array passes the test implemented by the provided function.

// For more information, please refer to:

// Array.prototype.every()
// Array.prototype.some()
// Here are some examples to help us understand the use of every() and some():

// every() always return a boolean value. It executes the callback function to each element in turn, if one of the returns is false, then every() returns false; if all returns true, then every() returns true.

// var a=[1,2,3,4,5];
// console.log(a.every(x=>x>0)); //output: true  
//                               all elements >0
// console.log(a.every(x=>x>1)); //output: false 
//                               a[0]==1, so every() should return false
// some() and every() are opposite. some() executes the callback function to each element in turn, if one of the returns is true, then some() returns true; if all returns false, then some() returns false.

// var a=[1,2,3,4,5];
// console.log(a.some(x=>x>4)); //output: true
//                              a[4]>4 so some() should return true 
// console.log(a.some(x=>x>5)); //output: false
//                              all elements <=5
// Their behavior seems to be a traversal of an array and with a break statement(When every meet false, or when the some meet true, they will jump out of the traversal of the array):

// var a=[1,2,3,4,5];
// a.every(x=>{
//   console.log(x); 
//   return x<4;
// })
// //output:
// 1
// 2
// 3
// 4
// We can see that console.log runs 4 times. When the element=4, x<4 return false, so every() out of the array traversal. The same situation also occurs in the some method. We can use this feature to do some work.

// The following example will look for a pair of adjacent numbers in the array, and their sum is equal to 15:

// var a=0,b=0,arr=[3,6,9,6,9,3];
// arr.some((x,i)=>{
//   a=arr[i];  //or a=x
//   b=arr[i+1];
//   return a+b==15
// })
// console.log(a,b)   //output: 6 9
// When the some() method meets the appropriate value, the a+b==15 returns true, the some function exits the loop, so we get the two values. And once again we see two parameters being used. Yes, it is the same as the map() method, the callback function can have up to three parameters: currentValue (required),index (optional) and array (optional). The usage is similar to the map() method, so I'm no longer crap ;-)

// My Answer & Best Practice
function mirrorImage(arr){
  for(let i = 0; i < arr.length-1; i++) {
    if(String(arr[i]).split('').reverse().join('') === String(arr[i+1])) {
      return [arr[i], arr[i+1]];
    }
  }
  return [-1,-1];
}

// Using the Instructions
function mirrorImage(arr) {
  let a, b;

  let result = arr.some((e, i) => {
    a = e;
    b = arr[i + 1];
    return e === Number(String(b).split('').reverse().join(''));
  });

  return result ? [a, b] : [-1, -1];
}

console.log(mirrorImage([11,22,33,33,22,11]) , [33,33]);
console.log(mirrorImage([454,86,57,75,16,88]) , [57,75]);
console.log(mirrorImage([454,0,57,0,16,88]) , [-1,-1]);