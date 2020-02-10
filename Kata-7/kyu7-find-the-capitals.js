// https://www.codewars.com/kata/find-the-capitals/train/javascript

// Write a method that takes an array of hashes with two keys each: country or state, and capital. Keys may be symbols or strings

// The method should return an array of sentences declaring the state or country and its capital.

// Examples

// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
// capital(state_capitals)[0] # returns "The capital of Maine is Augusta"

// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// capital(country_capitals)[0] # returns "The capital of Spain is Madrid"

// mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// capital(mixed_capitals)[1] # returns "The capital of Spain is Madrid"

// My Answer pass Codewars but has issues with Quokka
function capital(capitals){
    return capitals.map(e => `The capital of ${e.state||e.country} is ${e.capital}`);
}


let state_capitals = [{state: 'Maine', capital: 'Augusta'}]
console.log(capital(state_capitals[0]), "The capital of Maine is Augusta");

let country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
console.log(capital(country_capitals[0]), "The capital of Spain is Madrid")

let mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
console.log(capital(mixed_capitals[1]), "The capital of Spain is Madrid")
