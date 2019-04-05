// https://www.codewars.com/kata/lexical-this

// Lexical this
// Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
// Output
// Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.

// My Answer & Best Practice
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { 
      this._friends.push(...f) // Line they were looking for to get answer
      // Another way to do the same thing above but longer code using map
      // f.map(e => this._friends.push(e));
    }
  }
  return person;
}

var people = [['bob','john'],['bob','john','dave'],[],['bob','john','dave','matt','alex']]

for(var i=0;i<4;i++){
  var person = Person();
  person.fillFriends(people[i])
  console.log(person._friends, people[i])
}