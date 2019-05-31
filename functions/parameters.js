/*

A parameter is a variable in a method definition. 
When a method is called, the arguments are the data you pass into the method's parameters.

*/

let add = function(a, b, c) {
  return a + b - c;
};

let result = add(10, 1, 5); // 10,1 and 5 are caller arguments
console.log(result);

// ------ Default parameters --------

let getScoreText = function(name = "Anonymous", score = 0) {
  return `Name: ${name} has ${score} points.`;
};

getScoreText(); // Anonymous, 0 (default options)
getScoreText("Iulian", 100); // Iulian, 100
getScoreText(undefined, 150); // Anonymous, 150

// ----- CHALLENGE -----

let tipCalculator = function(total, tipPercent = 0.125) {
  let tipAmount = total * tipPercent;
  return `For the $${total} total bill, you need to pay $${tipAmount} tip `;
};

console.log(tipCalculator(100));
console.log(tipCalculator(168));
console.log(tipCalculator(45));
