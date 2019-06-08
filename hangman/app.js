// VIEW

const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
const game1 = new Hangman("New", 3);

puzzleElement.textContent = game1.getPuzzle();
guessesElement.textContent = game1.getStatusMessage();

window.addEventListener("keypress", event => {
  const guess = String.fromCharCode(event.charCode);
  game1.makeGuess(guess);
  puzzleElement.textContent = game1.getPuzzle();
  guessesElement.textContent = game1.getStatusMessage();
});
