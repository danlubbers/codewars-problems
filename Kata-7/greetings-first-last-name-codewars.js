// https://www.codewars.com/kata/greetings-with-first-name-and-last-name

// Create a Person class with a greet method that returns the first and last name of the person with a greeting. For example if the first name is 'Bob' and the last name is 'Smith' then it should return 'Hello, Bob Smith!'.

// My Answer - although i found out this is a RUBY ONLY TEST, not JS!!!
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        return `Hello, ${this.firstName} ${this.lastName}!`
    }
}

let person = new Person('Bob', 'Smith')
console.log(person.greet(person))// Hello, Bob Smith!