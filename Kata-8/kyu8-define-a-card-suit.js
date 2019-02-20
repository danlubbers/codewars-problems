// https://www.codewars.com/kata/define-a-card-suit

// You get any card as an argument. Your task is to return a suit of this card.

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// My Answer
function defineSuit(card) {
    let split = card.split('')
    let filterSuit = split.filter(e => e === '♣' || e === '♠' || e === '♦' || e === '♥')

    return filterSuit.map(e => {
        if (e === '♣') {
            return 'clubs'
        } else if (e === '♠') {
            return 'spades'
        } else if (e === '♦') {
            return 'diamonds'
        } else return 'hearts'
    }).toString()
}

// Best Practice
function defineSuit(card) {
    const suit = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts"
    }
    return suit[card.charAt(card.length - 1)]
}

// Using Includes
function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
}

console.log(defineSuit('3♣'), 'clubs');
console.log(defineSuit('Q♠'), 'spades');
console.log(defineSuit('9♦'), 'diamonds');
console.log(defineSuit('J♥'), 'hearts');