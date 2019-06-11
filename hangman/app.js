// VIEW

const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
const game1 = new Hangman("New York", 3);

puzzleElement.textContent = game1.puzzle;
guessesElement.textContent = game1.statusMessage;

window.addEventListener("keypress", event => {
  const guess = String.fromCharCode(event.charCode);
  game1.makeGuess(guess);
  puzzleElement.textContent = game1.puzzle;
  guessesElement.textContent = game1.statusMessage;
});

// getPuzzle("2", (error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(puzzle);
//   }
// });

getPuzzle("2").then(
  puzzle => {
    console.log(puzzle);
  },
  error => {
    console.log(`Error: ${error}`);
  }
);

// EXERCISE

// getCountry("RO", (error, country) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(`Country name: ${country.name}`);
//   }
// });

getCountry("RO").then(
  country => {
    console.log(`Country name: ${country.name}`);
  },
  error => {
    console.log(`Error: ${error}`);
  }
);
