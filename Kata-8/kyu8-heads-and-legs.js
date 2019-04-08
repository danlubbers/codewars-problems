// https://www.codewars.com/kata/heads-and-legs/train/javascript

// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

// “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

// Where x <= 1000 and y <=1000

// #Task

// Assuming there are no other types of animals, work out how many of each animal are there.

// Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases).

// In the form:

// [Heads, Legs] = [72, 200]

// VALID - [72, 200] =>             [44 , 28]   
//                              [Chickens, Cows]

// INVALID - [72, 201] => "No solutions"
// However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

// There are many different ways to solve this, but they all give the same answer.

// You will only be given integers types - however negative values (edge cases) will be given

// My Answer
function animals(heads, legs){
    let cows = legs / 2 - heads;
    let chickens = heads - cows;
        
    return legs & 1 || chickens > heads || cows > heads ? 'No solutions' : [chickens, cows];
}

  

    
console.log(animals(72, 200), [44, 28])
console.log(animals(116, 282), [91, 25])
console.log(animals(12, 24), [12, 0])
console.log(animals(6, 24), [0, 6])
console.log(animals(344, 872), [252, 92])
console.log(animals(158, 616), [8, 150])
    
    
    
console.log(animals(25, 555), "No solutions")
console.log(animals(12, 25), "No solutions")
console.log(animals(54, 956), "No solutions")
console.log(animals(5455, 54956), "No solutions")
    
    
    
console.log(animals(0, 0), [0, 0])
console.log(animals(-1, -1), "No solutions")
console.log(animals(-45, 5), "No solutions")
console.log(animals(500, 0), "No solutions")
console.log(animals(0, 500), "No solutions")
console.log(animals(5, -55), "No solutions")