// https://www.codewars.com/kata/586538146b56991861000293/train/javascript

// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

// Like this:

// ** Input: ** If you can read

// ** Output: ** India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

// ** Some notes **

// Keep the punctuation, and remove the spaces.
// Use Xray without dash or space.

const nato = {
  a: 'Alfa',
  b: 'Bravo',
  c: 'Charlie',
  d: 'Delta',
  e: 'Echo',
  f: 'Foxtrot',
  g: 'Golf',
  h: 'Hotel',
  i: 'India',
  j: 'Juliett',
  k: 'Kilo',
  l: 'Lima',
  m: 'Mike',
  n: 'November',
  o: 'Oscar',
  p: 'Papa',
  q: 'Quebec',
  r: 'Romeo',
  s: 'Sierra',
  t: 'Tango',
  u: 'Uniform',
  v: 'Victor',
  w: 'Whiskey',
  x: 'Xray',
  y: 'Yankee',
  z: 'Zulu',

}

// My Answer long - Easier to Read
function to_nato(words) {
	return words.replace(/ /g,  '').split('').map(e => {
    if(e.match(/[a-z]/gi)) {
      return nato[e.toLowerCase()];
    } else {
      return e;
    }
  }).join(' ');
}

// My Answer shorten using ternary
function to_nato(words) {
	return words.replace(/ /g,  '').split('').map(e => {
    return e.match(/[a-z]/gi) ? nato[e.toLowerCase()] : e;
  }).join(' ');
}



console.log(to_nato('If you can read')); // India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
console.log(to_nato('Did not see that coming')); // Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf
console.log(to_nato('go for it!')); //Golf Oscar Foxtrot Oscar Romeo India Tango !
