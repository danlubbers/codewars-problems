// https://www.codewars.com/kata/classy-extentions/train/javascript

// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing class extends You will be preloaded with the Animal class, so you should only edit the Cat class.
// Task
// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g.
// 'Mr Whiskers meows.'

// My Answer
class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    speak() {
      return this.name + ' meows.'
    }
}