// https://www.codewars.com/kata/the-office-i-outed

// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

// My Answer 
// I passes all my tests and when I take tests from codewars that it does not pass, it does pass in VScode...
function outed(meet, boss){
    let sum = 0;

    for (let key in meet) {
        // console.log(key)
        // console.log(meet[key])
        if(key === boss) {
            sum = meet[key] * 2
        } else {
            sum += meet[key]
        }
    }
    // console.log(Object.keys(meet).length)
    // console.log(sum / Object.keys(meet).length)
    let total = sum / Object.keys(meet).length
    
    // return total <= 5 ? "Get Out Now!" : "Nice Work Champ!"
    if(total <= 5) {
        return 'Get Out Now!'
    } else {
       return 'Nice Work Champ!'
    }
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!');
console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), 'Get Out Now!');
console.log(outed({'tim':9, 'jim':6, 'randy':7, 'sandy':2, 'andy':2, 'katie':5, 'laura':9, 'saajid':4, 'alex':4, 'john':4, 'mr':1}, 'alex'), 'Get Out Now!');
console.log(outed({'tim':6, 'jim':9, 'randy':3, 'sandy':8, 'andy':4, 'katie':9, 'laura':5, 'saajid':6, 'alex':8, 'john':3, 'mr':1}, 'randy'), 'Get Out Now!');