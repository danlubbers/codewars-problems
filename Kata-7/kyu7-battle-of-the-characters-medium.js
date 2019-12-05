// https://www.codewars.com/kata/battle-of-the-characters-medium/train/javascript

// Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules:
// Each character has its own power:
//   A = 1, B = 2, ... Y = 25, Z = 26
//   a = 0.5, b = 1, ... y = 12.5, z = 13
// Only alphabetical characters can and will participate in a battle.
// Only two groups to a fight.
// Group whose total power (a + B + c + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("One", "Two"); // => "Two"`
//   battle("ONE", "NEO"); // => "Tie!"

// My Answer
function battle(x, y) {
  const sumX = x.split('').map((e) => {
    let upper = '';
    let lower = '';

    if(e === e.toUpperCase()) {
      upper += e;
    } else {
      lower += e;
    }     
    
    let sumUpper = 0;
    let sumLower = 0;
    if(upper !== '') sumUpper = upper.split('').reduce((acc, val) => acc + val.charCodeAt(0) - 64, 0);
    if(lower !== '') sumLower = lower.split('').reduce((acc, val) => acc + (val.charCodeAt(0) - 96) / 2, 0); 
    
    return sumUpper + sumLower;
  });

  const sumY = y.split('').map((e) => {
    let upper = '';
    let lower = '';

    if(e === e.toUpperCase()) {
      upper += e;
    } else {
      lower += e;
    }     
    
    let sumUpper = 0;
    let sumLower = 0;
    if(upper !== '') sumUpper = upper.split('').reduce((acc, val) => acc + val.charCodeAt(0) - 64, 0);
    if(lower !== '') sumLower = lower.split('').reduce((acc, val) => acc + (val.charCodeAt(0) - 96) / 2, 0);
  
    return sumUpper + sumLower;
  });

  const sumXTotal = sumX.reduce((acc, val) => acc + val);
  const sumYTotal = sumY.reduce((acc, val) => acc + val);

  return sumXTotal === sumYTotal ? 'Tie!' : (sumXTotal > sumYTotal ? x : y);
}

// Best Practice
function battle(x, y) {
  const sumX = splitIt(x);
  const sumY = splitIt(y);

  return sumX === sumY ? 'Tie!' : (sumX > sumY ? x : y);
}

function splitIt(x) {
  return x
    .split('')
    .map(e => e === e.toLowerCase() ? (e.charCodeAt() - 96) / 2 : e.charCodeAt() - 64)
    .reduce((acc, val) => acc + val);
}


console.log(battle("One", "Two"), "Two");
console.log(battle("One", "Neo"), "One");
console.log(battle("One", "neO"), "Tie!");
console.log(battle("Foo", "BAR"), "Tie!");
console.log(battle("Four", "Five"), "Four");
