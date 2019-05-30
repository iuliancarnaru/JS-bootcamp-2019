// var keywork let you to re-declare variables with the same name

var petName = "Neko";
var petName = "Spok";

// new ES6 version of JS brings "let" and "const"

let newPetName = "Neko";
// let newPetName = "Spok";

console.log(newPetName);
// SyntaxError: Identifier 'newPetName' has already been declared

newPetName = "Spok";
console.log(newPetName);

// you can reasign a value to a variable without "let" in the front

const PI = 3.14;
PI = 3.15;
console.log(PI);

// TypeError: Assignment to constant variable.
