let num = 103.9410;

console.log(num.toFixed(2)); // 103.94

console.log(Math.round(num)); // 104
console.log(Math.floor(num)); // force to round down (103)
console.log(Math.ceil(num)); // force to round up (104)

console.log(Math.random()); // 0 inclusive - 1 exclusive

// -------------------

let min = 0;
let max = 10;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

// ----- CHALLENGE -----

let makeGuess = function (userNumber) {
    let min = 1;
    let max = 5;

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber === userNumber;
}

console.log(makeGuess(1));
console.log(makeGuess(3));
console.log(makeGuess(5));
console.log(makeGuess(4));
console.log(makeGuess(0));
