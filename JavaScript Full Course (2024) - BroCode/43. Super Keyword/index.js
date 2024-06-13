/**
 * Super = keyword is used in classes to tell the constructor or access the properties and method of a parent (superclass)
           this = this object
           super = the parent
 
 */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("Roger Rabbit", 12, 50);
const fish = new Fish("Nemo Fish", 7, 60);
const hawk = new Hawk("haki Hawk", 8, 80);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
