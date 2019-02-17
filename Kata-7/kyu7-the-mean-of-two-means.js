// https://www.codewars.com/kata/the-mean-of-two-means

// Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

// The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. Otherwise the function should return -1.

// getMean([1,3,2,4], 2, 3) should return 2.5 because: the mean of the the first 2 elements of the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.

// getMean([1,3,2,4], 1, 2) should return -1 because x is not higher than 1.

// getMean([1,3,2,4], 2, 8) should return -1 because 8 is higher than the array's length.

// My Answer
function getMean(arr, x, y) {
    let firstX = arr.slice(0, x).reduce((acc, curr)=>acc+curr, 0) / x
    let lastY = arr.slice(arr.length - y, arr.length).reduce((acc, curr)=>acc+curr, 0) / y
    
    if(x > 1 && y > 1 && y <= arr.length && x <= arr.length) {
        return (firstX + lastY) / 2
    } else {
        return -1
    }
}

// Best Practice
function getMean(arr, x, y) {
    let m1 = 0, m2 = 0, arr1 = [];
    if(x <=1 || y <= 1 || x > arr.length || y > arr.length) return -1;

    for(let i = arr.length-1; i >= 0; i--) {
        arr1.push(arr[i])
    }

    for(let i = 0; i < arr.length; i++) {
        if(i < x) {
            m1 += arr[i];
        if(i < y) {
            m2 += arr1[i]
        }
    }
    return (m1/x + m2/y) / 2;
}


console.log(getMean([1,3,2,4],2,3),2.5);
console.log(getMean([1,3,2],2,2),2.25);
console.log(getMean([1,3,2,4],1,2),-1);
console.log(getMean([1,3,2,4],2,8),-1);
console.log(getMean([47,32,70,4,38,44,5,6],70,56),-1);
console.log(getMean([56,99,9,7,71,63,37,89,73,43,16,98,79,61,7,2,92,50,73,76,96,11,3,38,28,69,13,68,19,26,76,0,18,67,15,33,7,12,80,12,96,91,86,9,20,98,99,50,18,60,45,83,30,9,73,64,34,41,57,45,37,21,8,10,60,33,23,80,44,14,24,27,61,93,15,64,74,11,11], 53, 77), 46.7463858978192);
console.log(getMean([ 13, 3, 79, 75, 15, 22, 59 ], 49, 5), -1);
