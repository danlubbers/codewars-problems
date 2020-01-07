// https://www.codewars.com/kata/the-lamp-revisited/train/javascript

// Define a class called Lamp. It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. Define your class constructor with a parameter for color and assign on as false on initialize.

// Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.

// Define another instance method called state that will return "The lamp is on." if it's on and "The lamp is off." otherwise.

// My Answer
class Lamp {
  constructor(color, on) {
    this.color = color,
    this.on = false
  }

  toggleSwitch() {
    console.log(this.on);
    
    if(this.on === false) {
      this.on = true;
    } else {
      this.on = false;
    }
  }

  state(color) {
    console.log(this.on);
    if(this.on) {
      return 'The lamp is on.'
    } else {
      return 'The lamp is off.'
    }
  }
}

// Best Practice
class Lamp {
  constructor(color, on = false) {
    this.color = color;
    this.on = on;
  }
  toggleSwitch() {
    this.on = !this.on;
}
state() {
  return this.on ? 'The lamp is on.' : 'The lamp is off.'
}


const myLamp = new Lamp('Blue')

console.log(myLamp.color, "Blue")
console.log(myLamp.on, false)
console.log(myLamp.state(), "The lamp is off.")
// now switch it on
myLamp.toggleSwitch()
console.log(myLamp.state(), "The lamp is on.")
myLamp.toggleSwitch()
console.log(myLamp.state(), "The lamp is off.")