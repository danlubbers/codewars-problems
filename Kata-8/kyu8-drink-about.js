// https://www.codewars.com/kata/drink-about/train/javascript

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples:

// peopleWithAgeDrink(13) === "drink toddy"
// peopleWithAgeDrink(17) === "drink coke"
// peopleWithAgeDrink(18) === "drink beer"
// peopleWithAgeDrink(20) === "drink beer"
// peopleWithAgeDrink(30) === "drink whisky"

// My Answer
function peopleWithAgeDrink(old) {
    if(old < 14) return 'drink toddy';  
    if(old >= 14 && old <= 17) return 'drink coke';
    if(old >= 18 && old <= 20) return 'drink beer';
    else return 'drink whisky';
};

// Best Practice
function peopleWithAgeDrink(age) {
    if(age < 14) drink = 'toddy';
    else if(age < 18) drink = 'coke';
    else if(age < 21) drink = 'beer';
    else drink = 'whiksy';

    return 'drink ' + drink;
}

// ES6
const peopleWithAgeDrink = age => {
    age < 14 ? 'drink toddy' :
    age < 18 ? 'drink coke' :
    age < 21 ? 'drink beer' : 'drink whiksy'
}

console.log(peopleWithAgeDrink(22), 'drink whisky');

console.log(peopleWithAgeDrink(13))  // "drink toddy"
console.log(peopleWithAgeDrink(17))  //  "drink coke"
console.log(peopleWithAgeDrink(18))  //  "drink beer"
console.log(peopleWithAgeDrink(20))  //  "drink beer"
console.log(peopleWithAgeDrink(30))  // drink whisky"