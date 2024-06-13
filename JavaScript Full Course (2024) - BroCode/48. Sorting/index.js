/**
  sort() = method used to sort elements of an array in place.
           Sort elements as strings in lexicographic order, not alphabetical
           lexicographic = (alphabet + numbers + symbols) as strings

 */
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [
  { name: "spongebob", age: 30, gpa: 3.0 },
  { name: "patick", age: 35, gpa: 3.5 },
  { name: "elmer", age: 18, gpa: 1.0 },
  { name: "other", age: 35, gpa: 4.0 },
];
const numberSort = people.sort((a, b) => a.age - b.age);
const stringSort = people.sort((a, b) => a.name.localeCompare(b.name));
console.log(numberSort);
console.log(stringSort);
