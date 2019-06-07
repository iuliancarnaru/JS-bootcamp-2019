// VIEW

const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
const game1 = new Hangman("New York", 4);

puzzleElement.textContent = game1.getPuzzle();
guessesElement.textContent = game1.remaningGuesses;
console.log(game1.status);

window.addEventListener("keypress", event => {
  const guess = String.fromCharCode(event.charCode);
  game1.makeGuess(guess);
  puzzleElement.textContent = game1.getPuzzle();
  guessesElement.textContent = game1.remaningGuesses;
  console.log(game1.status);
});
