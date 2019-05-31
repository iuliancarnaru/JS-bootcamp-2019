// UNDEFINED for variables

let name; // we declare a variable but we haven't assign a value

if (name === undefined) {
  console.log("Please provide a value for variable name.");
} else {
  console.log("The value of name is ", name);
}

console.log(name); // undefined (abscence of a value)

// UNDEFINED for function parameters

let square = function(num) {
  console.log(num);
};

square(); // undefined

// UNDEFINED for function returns
// if a function doesn't return anything JS will return undefined by default

let square2 = function(num) {
  console.log(num); // <--- no return keyword
};

let result = square2();
console.log(result); // undefined

// ------ NULL (absecence of a variable) --------

let age = 27;

age = null; // explicitly cleared variable value by developer

console.log(age);
