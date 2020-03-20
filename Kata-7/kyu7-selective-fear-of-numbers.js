// https://www.codewars.com/kata/55b1fd84a24ad00b32000075/train/javascript

// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

// My Asnwer
function AmIAfraid(day, num) {
   switch(day) {
     case 'Monday': return 12 === num ? true : false;
     case 'Tuesday': return 95 < num ? true : false;
     case 'Wednesday': return 34 === num ? true : false;
     case 'Thursday': return 0 === num ? true : false;
     case 'Friday': return num % 2 === 0 ? true : false;
     case 'Saturday': return 56 === num ? true : false;
     case 'Sunday': return 666 === num || -666 === num ? true : false;
   }
}

// Most Clever
function AmIAfraid(day, num) {
  return {
    "Monday"    : num === 12,
    "Tuesday"    : num > 12,
    "Wednesday"    : num === 34,
    "Thursday"    : num === 0,
    "Friday"    : num % 2 === 0,
    "Saturday"    : num === 56,
    "Sunday"    : Math.abs(num) === num,
  }[day]
}

console.log(AmIAfraid("Monday", 13), false, 'Should return false');
console.log(AmIAfraid("Sunday", -666), true, 'Should return true');
console.log(AmIAfraid("Tuesday", 2), false, 'Should return false');
console.log(AmIAfraid("Tuesday", 965), true, 'Should return true');
console.log(AmIAfraid("Friday", 2), true, 'Should return true');

console.log(AmIAfraid("Sunday", 55), true, 'Should return true');
