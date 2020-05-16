// https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript

// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Example parties:
// Input 0:
// "1 beer"

// Output 0:
// "1 glass of water"

// Explaination 0:
// You drank one standard drink

// Input 1:
// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"

// Output 1:
// "10 glasses of water"

// Explaination 1:
// You drank ten standard drinks

// Note:

// To keep the things simple, we'll considere that any "numbered thing" in the string is a drink. Even "1 bear" => "1 glass of water" or "1 chainsaw and 2 pools" => "3 glasses of water"...

// My Answer
function hydrate(s) {
  let waterCount = s.split('').filter(e => e.match(/\d/)).reduce((acc, val) => +acc + +val, 0);
  return waterCount > 1 ? `${waterCount} glasses of water`: `${waterCount} glass of water`;
}

// Best Practice
function hydrate(s) {
  let waterCount = [...s].filter(e => !isNaN(e)).reduce((acc, val) => acc + +val, 0);
  return `${waterCount} glass${waterCount === 1 ? '' : 'es'} of water`;
}

// Using For Loop
function hydrate(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if(parseInt(s[i]) > 0) count += parseInt(s[i]);
  }
  if (count > 1) return count + ' glasses of water';
  else return count + ' glass of water';
}

console.log(hydrate("1 beer"), "1 glass of water");
console.log(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");