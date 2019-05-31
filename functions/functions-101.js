// Function - input(parameter), code, output(return value)

// function declaration
function greetUser() {
  console.log("Welcome user.");
}

greetUser();

// function expression
let greetTheUser = function() {
  console.log("Welcome user.");
};

greetTheUser();

// ---------------------------

let square = function(num) {
  let result = num * num;
  return result;
};

let value = square(3);
console.log(value);

// ----- CHALLENGE ------

let convertFarenheitToCelsius = function(tempFarenheit) {
  return ((tempFarenheit - 32) * 5) / 9;
};
console.log(convertFarenheitToCelsius(32));
console.log(convertFarenheitToCelsius(55));
console.log(convertFarenheitToCelsius(110));
