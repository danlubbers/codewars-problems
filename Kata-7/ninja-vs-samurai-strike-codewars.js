// https://www.codewars.com/kata/ninja-vs-samurai-strike

// Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

// var ninja = new Warrior('Ninja');
// var samurai = new Warrior('Samurai');

// samurai.strike(ninja, 3);
// ninja.health should == 70

// My Answer
class Warrior {
    constructor(name) {
        this.name = name;  
        this.health = 100;
    }

    strike(enemy, swings) {
        return enemy.health = Math.max(0, enemy.health - (swings * 10));   
    }
}

// Older Best Practice Way
// var Warrior = function(name){
//     this.name = name;  
//     this.health = 100;
//   }
  
//   Warrior.prototype.strike = function(enemy, swings){
//     enemy.health = Math.max(0, enemy.health - (swings * 10));   
//   }
  
var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

console.log(samurai.strike(ninja, 3));
// ninja.health should == 70