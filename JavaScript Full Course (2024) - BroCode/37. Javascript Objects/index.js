/**
 * Object = A collection of related properties and/or methods
            can represent real world objects (people, products, places)
            object = {key: value, function()}

            method is a function that is belong in an object
            example const person = { saybye: function(){console.log()} } 
 */

const person1 = {
  firstName: "Elmer",
  lastName: "Silanga",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi! Hello!");
  },
  eat: function () {
    console.log("Let's eat!");
  },
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 31,
  isEmployed: false,
};

console.log(person1);
console.log(person1.age);
person1.sayHello();
person1.eat();

console.log(person2);
console.log(person2.lastName);
