/**
 * Nested Objects = Objects inside of other objects. Allows you to represent more complex data structures child object is
                    enclosed by a Parent object

                    Person{Address{}, ContactInfo{}}
                    ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
 */

// const person = {
//   fullName: "Spongebob Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "Int. Water",
//   },
// };

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.street);

// for (const property in person.address) {
//   console.log(person.address[property]);
// }

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Spongebob",
  30,
  "123 Conch St.",
  "Bikini Bottom",
  "Int. Water"
);
console.log(person1);
