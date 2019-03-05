// https://www.codewars.com/kata/fun-with-es6-classes-number-1-people-people-people

// Fun with ES6 Classes #1 - People, people, people
// Time for some OOP fun!

// Define a class Person with the following properties:

// A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
// A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
// A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"

// My Answer
class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }
}

// Best Practice with Object.assign
class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
      Object.assign(this, { firstName, lastName, age, gender });
    }
    sayFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth ${raceName}`;
    }
}


console.log(new Person().firstName, "John");
console.log(new Person().lastName, "Doe");
console.log(new Person().age, 0);
console.log(new Person().gender, "Male");
console.log(new Person().sayFullName(), "John Doe");
  // Example Custom Test
console.log(new Person("Jane", "Doe", 25, "Female").firstName, "Jane");
console.log(new Person("Jane", "Doe", 25, "Female").lastName, "Doe");
console.log(new Person("Jane", "Doe", 25, "Female").age, 25);
console.log(new Person("Jane", "Doe", 25, "Female").gender, "Female");
console.log(new Person("Jane", "Doe", 25, "Female").sayFullName(), "Jane Doe");