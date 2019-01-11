// https://www.codewars.com/kata/this-is-a-problem

// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

// My Answer
function NameMe(first, last) {
        this.firstName = first;
        this.lastName = last;
        this.name = this.firstName + ' ' + this.lastName;
}

// Best Practice
function NameMe(first, last) {
    this.firstName = first;
    this.lastName  = last;
    this.name = first + ' ' + last;
}

var n = new NameMe('John', 'Doe');
console.log(n.firstName) //Expected: John
console.log(n.lastName) //Expected: Doe
console.log(n.name) //Expected: John Doe

