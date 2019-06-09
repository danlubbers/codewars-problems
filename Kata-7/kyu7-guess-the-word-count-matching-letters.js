// https://www.codewars.com/kata/guess-the-word-count-matching-letters/train/javascript

// Consider a game, wherein the player has to guess a target word. All the player knows is the length of the target word.

// To help them in their goal, the game will accept guesses, and return the number of letters that are in the correct position.

// Write a method that, given the correct word and the player's guess, returns this number.

// For example, here's a possible thought process for someone trying to guess the word "dog":

// countCorrectCharacters("dog", "car"); //0 (No letters are in the correct position)
// countCorrectCharacters("dog", "god"); //1 ("o")
// countCorrectCharacters("dog", "cog"); //2 ("o" and "g")
// countCorrectCharacters("dog", "cod"); //1 ("o")
// countCorrectCharacters("dog", "bog"); //2 ("o" and "g")
// countCorrectCharacters("dog", "dog"); //3 (Correct!)
// The caller should ensure that the guessed word is always the same length as the correct word, but since it could cause problems if this were not the case, you need to check for this eventuality:

//Throw an error if the two parameters are of different lengths.

// My Answer
function countCorrectCharacters(correctWord, guess){
    if(correctWord.length !== guess.length) throw new Error();

    let splitWord = correctWord.split('');
    let splitGuess = guess.split('');
    
    let count = 0;
    for(let i = 0; i < splitWord.length; i++) {
        if(splitWord[i] === splitGuess[i]) count++
        
    }
    return count
}

// Best Practice Did not need to split the string
function countCorrectCharacters(correctWord, guess) {
    if(correctWord.length !== guess.length) throw new Error();

    let matches = 0;
    for(let i = 0; i < correctWord.length; i++) {
        if(correctWord[i] === guess[i]) matches++
    }
    return matches
}

// Using ES6
function countCorrectCharacters(correctWord, guess){
    if(correctWord.length!==guess.length)throw new Error();
    return correctWord.split('').filter((v,i)=>v===guess[i]).length
  }

console.log(countCorrectCharacters("dog", "car"), 0, "Expected 0");
console.log(countCorrectCharacters("dog", "god"), 1, "Expected 1");
console.log(countCorrectCharacters("dog", "cog"), 2, "Expected 2");
console.log(countCorrectCharacters("dog", "cod"), 1, "Expected 1");
console.log(countCorrectCharacters("dog", "bog"), 2, "Expected 2");
console.log(countCorrectCharacters("dog", "dog"), 3, "Expected 3");

console.log(countCorrectCharacters("len", "lengh"), 3, "Expected 3");
