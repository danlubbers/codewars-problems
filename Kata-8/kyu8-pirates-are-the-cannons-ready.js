// https://www.codewars.com/kata/pirates-are-the-cannons-ready/train/javascript

// Ahoy Matey!

// Welcome to the seven seas.

// You are the captain of a pirate ship.

// You are in battle against the royal navy.

// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 4 or less.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

// My Answer - Every() tests whether 'all' elements in teh array pass the test
const cannonsReady = (gunners) => {
    return Object.values(gunners).every(e => e === 'aye') ? 'Fire!' : 'Shiver me timbers!'
}

// Best Practice - Some() tests whether 'at least one' element in the array passes the test
const cannonsReady = (gunners) => {
    return Object.values(gunners).some(e => e === 'nay') ? 'Shiver me timbers!' : 'Fire!';
}

// Using For in Loop for Objects
const cannonsReady = (gunners) => {
    for(let key in gunners) {
        if(gunners[key] === 'nay') {
            return 'Shiver me timbers!'
        }
    }
    return 'Fire!'
}


var a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'},
    b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};


console.log(cannonsReady(a), 'Fire!');
console.log(cannonsReady(b), 'Shiver me timbers!');
  
