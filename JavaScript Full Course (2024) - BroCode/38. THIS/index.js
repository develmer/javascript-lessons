/**
 * THIS = Reference to the object where THIS is used (the object depends on the immediate context)
          person.name = this.name

          THIS doesn't work in arrow function because arrow function doesn't have its own this binding and may refer to global this if not strict
          and may be undefined depends on the this being used.
 
 */

const person1 = {
  name: "spongebob",
  favFood: "Patty",
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
  sayHi: () => console.log(`Hello ${this.age}`),
};

const person2 = {
  name: "patrick",
  favFood: "pizza",
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
};

person1.sayHello();
person1.sayHi();
person2.sayHello();
