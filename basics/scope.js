// JS uses Lexical Scope (Static Scope)
// In a SCOPE you can access variables defined in that scope, or in any parent/ancestor (from inside to outside)
// You can create variables with the same name if are created in different scopes (shadowing)

/*

Global scope (varOne)
    Local scope (varTwo)
        Local scope (varFour)
    Local scope (varThree)

*/

// global scope - defined outside of all code blocks {}
let varOne = "varOne";

if (true) {
  console.log(varOne);

  // local scope - defined inside a code block {}
  let varTwo = "varTwo";
  console.log(varTwo);

  if (true) {
    let varOne = "varOneShadow";
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}

console.log(varTwo);
// ReferenceError: varTwo is not defined

//--------------------------------

let name = "Iulian";

if (true) {
  let name = "Mike";
  if (true) {
    name = "Jen";
    console.log(name); // Jen
  }
}

if (true) {
  console.log(name); // Iulian
}

// ----- Leeked global variable -----
// when you assign a value to a variable but that variable was never explicitly defined JS is create one automatically in global scope

if (true) {
  if (true) {
    name = "Jen"; // <---- globaly leeked variable
    console.log(name); // Jen
  }
}

if (true) {
  console.log(name); // Jen
}
