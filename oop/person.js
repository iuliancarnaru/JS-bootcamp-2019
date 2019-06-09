// CONSTRUCTOR FUNCTION (CF name must start with capital letter)
// Prototypal inheritance
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age} years old.`;
    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}.`;
    });
    return bio;
  }
  setName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}



const me = new Person("Iulian", "Carnaru", 34, ["Reading", "Coding"]); // CF can be initialized with NEW keyword
console.log(me.lastName);
console.log(me.getBio());

const myGirlfriend = new Person("Aneta", "Kasprzak", 27, ["Cleaning"]);
myGirlfriend.setName("Aneta Carnaru");

console.log(myGirlfriend.lastName);
console.log(myGirlfriend.getBio());
