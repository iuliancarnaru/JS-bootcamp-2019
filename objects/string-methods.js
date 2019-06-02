let name = "Iulian Carnaru";

console.log(name.length);
console.log(name.toUpperCase());

let password = "abc123word780";
console.log(password.includes("password"));

let userName = "   iulian.carnaru ";
console.log(userName.trim()); // remove the white space from both ends (sanitizing data from user input)

// ----- CHALLENGE -----

let isValidPassword = function(string) {
  return string.length > 8 && !string.includes("password");
};

console.log(isValidPassword("123abc"));
console.log(isValidPassword("user1234great"));
console.log(isValidPassword("12password"));
