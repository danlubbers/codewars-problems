// https://www.codewars.com/kata/basic-subclasses-adam-and-eve/train/javascript

// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

class God {
    static create() {
        const adam = new Man();
        const eve = new Woman();

        return [adam, eve]
    }
}

class Human {}
class Man extends Human {}
class Woman extends Human {}

