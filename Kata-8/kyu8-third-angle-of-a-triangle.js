// https://www.codewars.com/kata/third-angle-of-a-triangle/train/javascript

// You are given two angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// My Answer and Best Practice
function otherAngle(a, b) {
    return 180 - (a + b);
};

// Using more test cases
function otherAngle(a, b) {
    if(a<0 || b<0) //ensure no negative angles
      return 0;
    if((a+b)>=180) //ensure 2 angles don't sum up to 180
      return 0;
    return 180 - a - b; //return missing angle
  };


console.log(otherAngle(30, 60), 90);
console.log(otherAngle(60, 60), 60);
console.log(otherAngle(43, 78), 59);
console.log(otherAngle(10, 20), 150);