// https://www.codewars.com/kata/do-you-speak-retsec/train/javascript

// Do you speak retsec?
// You and your friends want to play undercover agents. In order to exchange your secret messages, you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:

// retsec examples

// That way, you'll be able to exchange your messages in private.

// Task
// You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

// Examples
// reverseByCenter("secret")  == "retsec" // no center character
// reverseByCenter("agent")   == "nteag"  // center character is "e"

// My Answer
function reverseByCenter(str) {
  let splitStr = str.split('');

  if(str.length % 2 === 0) {
    let secretWordArray = [];
    secretWordArray.push(splitStr.splice(str.length / 2).join(''));
    secretWordArray.push(splitStr.join(''));
    return secretWordArray.join('');
    
  } else {
    let secretWordArray = [];
    secretWordArray.push(splitStr.splice(str.length / 2 + 1).join(''));
    secretWordArray.push(splitStr.splice(str.length / 2).join(''));
    secretWordArray.push(splitStr.slice().join(''));
  
    return secretWordArray.join('');
  }
}

// Most Clever
function reverseByCenter(str) {
  let n = str.length / 2;
  return str.slice(Math.ceil(n)) + str.slice(Math.floor(n), Math.ceil(n)) + str.slice(0, Math.floor(n));
}

console.log(reverseByCenter("secret"), "retsec")
console.log(reverseByCenter("agent"), "nteag")
console.log(reverseByCenter("raw"), "war")
console.log(reverseByCenter("onion"), "onion")