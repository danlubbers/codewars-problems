// https://www.codewars.com/kata/how-much-coffee-do-you-need/train/javascript

// Everybody know that you passed to much time awake during night time...

// Your task here is to define how much coffee you need to stay awake after your night. You will have to complete a function that take an array of events in arguments, according to this list you will return the number of coffee you need to stay awake during day time. Note: If the count exceed 3 please return 'You need extra sleep'.

// The list of events can contain the following:

// You come here, to solve some kata ('cw').

// You have a dog or a cat that just decide to wake up too early ('dog' | 'cat').

// You just watch a movie ('movie').

// Other events can be present and it will be represent by arbitrary string, just ignore this one.

// Each event can be downcase/lowercase, or uppercase. If it is downcase/lowercase you need 1 coffee by events and if it is uppercase you need 2 coffees.

// My Answer
function howMuchCoffee(events) {
    let count = 0;
    let regex = /\bother/gi;

    let lowerCase = events.filter(e => e === e.toLowerCase() && !e.match(regex)).length;
    console.log(lowerCase)
    count += lowerCase
    let upperCase = events.filter(e => e === e.toUpperCase() && !e.match(regex)).length;
    console.log(upperCase)
    count += upperCase * 2

    if (count === 0) return 0;
    if (count === 1) return 1;
    if (count === 2) return 2;
    if (count === 3) return 3;
    return 'You need extra sleep';
}

// Best Practice
function howMuchCoffee(events) {
    let coffeeCount = 0;
    events.forEach(function(entry) {
        let matches = /^((cw|cat|dog|movie)|(CW|CAT|DOG|MOVIE))$/.exec(entry);
        console.log(matches)
        coffeeCount += matches ? (matches[2] ? 1 : (matches[3] ? 2 : 0)) : 0;
    });
    return coffeeCount > 3 ? "You need extra sleep" : coffeeCount;
}

// Using For of
function howMuchCoffee(events) {
    const hash1 = ['cw', 'cat', 'dog', 'movie']
    const hash2 = ['CW', 'CAT', 'DOG', 'MOVIE']
    let sum = 0;
    for(let e of events) {
        if(hash1.includes(e)) sum++
        else if(hash2.includes(e)) sum += 2
    }
    return sum > 3 ? 'You need extra sleep' : sum;
}

console.log(howMuchCoffee([]), 0)
console.log(howMuchCoffee(['cw']), 1)
console.log(howMuchCoffee(['CW']), 2)
console.log(howMuchCoffee(['cw','CAT']), 3)
console.log(howMuchCoffee(['cw','CAT','DOG']), 'You need extra sleep')
console.log(howMuchCoffee(['cw','CAT', 'cw=others']), 3)

console.log(howMuchCoffee([ 'other3', 'MOVIE', 'cw' ]), 3)
console.log(howMuchCoffee([ 'other_2', 'DOG', 'OTHER3' ]), 2)
console.log(howMuchCoffee([ 'movie', 'CAT', 'other_1' ]), 3)
console.log(howMuchCoffee([ 'OTHER3', 'other_2', 'other' ]), 0)

