// https://www.codewars.com/kata/573156709a231dcec9000ee8

// Training JS #30:
// methods of arrayObject---reduce() and reduceRight()

// This lesson we learn two methods of array: reduce() and reduceRight(). The two method is approximate. It applies a function against an accumulator and each value of the array to reduce it to a single value. The only difference is: the order of reduce() is from left to right, but reduceRight() is from right to left.

// For more information, please refer to:

// Array.prototype.reduce()
// Array.prototype.reduceRight()
// Before looking at some examples, we need to understand that the callback function used for the reduce() can use up to 4 parameters: previousValue, currentValue, index and array. In general, we use only two parameters: previousValue and currentValue. index and array are optional, and we use it when necessary.

// Here are some examples to help us understand the use of reduce() and reduceRight():

// The first is a classic example, we can use reduce() method to get the sum of the number array:

// var arr=[1,2,3,4,5];
// console.log(arr.reduce((prev,curr)=>prev+curr)); //output: 15
// //My habit is to use a and b
// console.log(arr.reduce((a,b)=>a+b));             //output: 15
// In addition to the callback function, reduce() also has an optional parameter: initialvalue. In the example above, the initialvalue is omitted. Then the initialvalue is the first element, and then start the cumulative operation from second element.

// The following example uses the initialvalue:

// var arr=[1,2,3,4,5];
// console.log(arr.reduce((a,b)=>a+b,""));             //output: 12345
// This example uses an empty string as the initialvalue, followed by these operation:

// ""+1-->"1","1"+2-->"12",......,"1234"+5-->"12345"
// As long as you have enough imagination, reduce() can do a lot of work.

// Calculated average:

// function average(arr){
//   return arr.reduce((a,b)=>a+b)/arr.length
// }
// console.log(average([1,2,3,4,5])); //output: 3
// Count something

// var arr=[1,2,3,4,5];
// //count odd number:
// console.log(arr.reduce((a,b)=>a+(b%2?1:0),0)); //output: 3
// //count even number:
// console.log(arr.reduce((a,b)=>a+(b%2?0:1),0)); //output: 2
// The following is a complex example, which uses a callback function of the four parameters and the initialvalue:

// var arr1=[1,2,3,4,5];
// var arr2=[6,7,8,9,10];
// var result=arr1.map(x=>x*x).reduce((a,b,i,ar)=>a.concat(ar[i],arr2[i]),[])
// console.log(result); //output: [ 1, 6, 4, 7, 9, 8, 16, 9, 25, 10 ]
// In the example above, Arr1 uses the map method to turn each element into its square.

// [1,2,3,4,5]--->[1,4,9,16,25]
// Then, using the reduce method. the two elements (ar[i] and arr2[i]) of the same index in turn are put into the initial value (an empty array).

// [1,4,9,16,25]
//                 ---> [ 1, 6, 4, 7, 9, 8, 16, 9, 25, 10 ]
// [6,7,8,9,10]
// It should be noted that when reading the value of the first array, we used the ar[i] (fourth parameters of the callback function). This value is changed by the map() method([1,4,9,16,25]). If we used arr1[i] reading the value, will be the value of the original array([1,2,3,4,5])

// Ok, lesson is over. let's us do some task.

// #Task
// Coding in function ```tailAndHead```. function accept 1 parameter ```arr```(a number array). 

// We use an example to explain this task:

// You got an array ```[123,456,789,12,34,56,78]```.

// First, from left to right, the tail of an element and the head of the next element are added together. The results are put into an array. like this:
// ```
// [123,456,789,1 2,3 4,5 6,78]
//    3+4 6+7 9+1 2+3 4+5 6+7  
//     |   |   |   |   |   |
//    [7 ,13 ,10 , 5 , 9 ,13]
// ```
// And then, Calculate their product and return it(```7x13x10x5x9x13=532350```)

// So, ```tailAndHead([123,456,789,12,34,56,78]) should return 532350 ```

// All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. Please try to use ```reduce()``` solve this kata.

// Some example:
// ```
// tailAndHead([1,2,3,4,5]) should return 945
// tailAndHead([111,2345,66,78,900]) should return 7293
// tailAndHead([35456,782,569,2454,875]) should return 12012

// My Answer
function tailAndHead(arr) {
  let tail = [];
  let head = [];

  arr.map(e => {
      tail.push(+String(e).split('').pop())
      head.push(+String(e).split('').shift())  
  }); 

  tail.pop();
  head.shift();

  return tail.reduce((acc, curr, i, arr) => [...acc, arr[i] + head[i]], []).reduce((acc, curr) => acc * curr); 
}

// Best Practice
function tailAndHead(arr) {
  let prod = 1;

  arr.reduce((prev, curr) => {
    let s1 = prev.toString();  
    let s2 = curr.toString();
    prod *= parseInt(s1[s1.length - 1]) + parseInt(s2[0]);
    return curr;
  });
  return prod;
}

// Using slice and reduce without map
function tailAndHead(arr) {
  let answer = [];

  arr.reduce((prev, curr) => {
    answer.push(
      parseInt(prev.toString().slice(-1)) + parseInt(curr.toString().slice(0, 1))
    )
    return curr;
  });
  return answer.reduce((prev, curr) => prev * curr);
}

console.log(tailAndHead([123,456,789,12,34,56,78]) , 532350);
console.log(tailAndHead([1,2,3,4,5]) , 945);
console.log(tailAndHead([111,2345,66,78,900]) , 7293);
console.log(tailAndHead([35456,782,569,2454,875]) , 12012);
