// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript

// The wide mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.

// My Answer using regex
function mouthSize(animal) {
  return animal.match(/alligator/gi) ? 'small' : 'wide';
}

// Best Practice
function mouthSize(animal) {
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
}

console.log(mouthSize("toucan"),"wide")
console.log(mouthSize("ant bear"),"wide")
console.log(mouthSize("alligator"),"small")
console.log(mouthSize("ALLIGATOR"),"small")