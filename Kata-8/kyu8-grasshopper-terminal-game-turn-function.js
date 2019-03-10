// https://www.codewars.com/kata/grasshopper-terminal-game-turn-function

// Terminal game turn function
// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

// You are using a library (Game.Logic in C#) that already has the functions below. Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.

// - combat
// - buyHealth
// - getCoins
// - printStatus
// - rollDice
// - move

const rollDice = () => 'rollDice'
const move = () => 'move'
const combat = () => 'combat'
const getCoins = () => 'getCoins'
const buyHealth = () => 'buyHealth'
const printStatus = () => 'printStatus'

// My Answer
function doTurn () {
    rollDice()    
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
}

// Using ES6
function doTurn() {
    let actions = [rollDice, move, combat, getCoins, buyHealth, printStatus];
    actions.forEach(e => e());
}