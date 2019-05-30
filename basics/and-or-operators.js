let temp = 55;

// logical AND operator - && (both sides needs to be true, if one fails the condition fails)
// logical OR operator - || (one of the side need to be true, to pass the validation)

if (temp >= 60 && temp <= 90) {
  console.log("It is preety nice outside.");
} else if (temp <= 0 || temp >= 120) {
  console.log("Do not go outside!");
} else {
  console.log("Do what you want :)");
}

// ----- CHALLENGE -----

let isGuestOneVegan = false;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Recommend only vegan options.");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Recommend some vegan dishes as well.");
} else {
  console.log("Recommend any dishes from menu.");
}
