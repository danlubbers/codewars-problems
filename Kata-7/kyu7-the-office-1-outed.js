// https://www.codewars.com/kata/the-office-i-outed

// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

// My Answer 
function outed(meet, boss){
    let sum = 0;
    for (let key in meet) {
        if(key === boss) sum += meet[key] * 2
        else sum += meet[key]    
    }
    let total = sum / Object.keys(meet).length
    console.log(Object.keys(meet))
    return total <= 5 ? "Get Out Now!" : "Nice Work Champ!"
}

// Best Practice
function outed(meet, boss) {
    return Object.keys(meet).reduce((acc, curr) => acc + meet[curr] * (curr === boss ? 2 : 1), 0) / Object.keys(meet).length > 5 ? 'Nice Work Champ' : 'Get Out Now!';
}

// Without using Object.keys you have to use a variable for length and increment
function outed(meet, boss){
    var sum = 0;
    var length = 0;
    for (var key in meet) {
      var score = meet[key];
      if (key == boss) {
        score *= 2;
      }
      sum += score;
      length++;
    }
    if (sum / length <= 5.0) {
      return 'Get Out Now!';
    } else {
      return 'Nice Work Champ!';
    }
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!');
console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), 'Get Out Now!');
console.log(outed({ tim: 4,jim: 9,randy: 9,sandy: 5,andy: 0,katie: 5,laura: 5,saajid: 0,alex: 3,john: 7,mr: 8 }, 'katie'), 'Nice Work Champ!')