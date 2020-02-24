// https://www.codewars.com/kata/57227b32785220c82b000b93/train/javascript

// Grasshopper if/else review
// In the game you are creating, the role of the main function is to check the input and return a call to the appropriate function.

// The preloaded function available are forward() and backward().

// Two variables (FW_COUNT and BW_COUNT) are also predefined - don't touch them and don't worry about them!

// The possible inputs and the required actions are:

// "forward": call the forward() function, and return its result
// "backward": call the backward() function, and return its result
// anything else: return "Not a valid input."

// My Answer and Best Practice
function main (input) {
  if(input === 'forward') return forward();
  if(input === 'backward') return backward();
  return 'Not a valid input.'
}

console.log(main('forward'), 'fw')
console.log(fwCount, 1)

console.log(main('backward'), 'bw')
console.log(bwCount, 1)


console.log(main('nonsense'), 'Not a valid input.')