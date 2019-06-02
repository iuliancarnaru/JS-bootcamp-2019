// Object has properties (key - value pair)

let myBook = {
  title: "A New Earth",
  author: "Eckhart Tolle",
  pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "The Power of Now";

console.log(`${myBook.title} by ${myBook.author}`);

// ----- CHALLENGE -----

let person = {
  name: "Iulian Carnaru",
  age: 34,
  location: "London"
};

console.log(
  `Hi, I'm ${person.name}. I'm ${person.age} years old and I live in ${
    person.location
  }.`
);

person.age = person.age + 1;

console.log(`This year I will be ${person.age} years old.`);
