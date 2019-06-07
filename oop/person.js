// CONSTRUCTOR FUNCTION (CF name must start with capital letter)
// Prototypal inheritance

const Person = function(firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age} years old.`;

  this.likes.forEach(like => {
    bio += ` ${this.firstName} likes ${like}.`;
  });

  return bio;
};

Person.prototype.setName = function(fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};

const me = new Person("Iulian", "Carnaru", 34, ["Reading", "Coding"]); // CF can be initialized with NEW keyword
console.log(me.lastName);
console.log(me.getBio());

const myGirlfriend = new Person("Aneta", "Kasprzak", 27, ["Cleaning"]);
myGirlfriend.setName("Aneta Carnaru");

console.log(myGirlfriend.lastName);
console.log(myGirlfriend.getBio());
