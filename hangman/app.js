// VIEW

const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", event => {
  const guess = String.fromCharCode(event.charCode);
  game1.makeGuess(guess);
  render();
});

// getPuzzle("2", (error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(puzzle);
//   }
// });

// getPuzzle("2")
//   .then(puzzle => console.log(puzzle))
//   .catch(error => console.log(error));

const render = () => {
  puzzleElement.textContent = game1.puzzle;
  guessesElement.textContent = game1.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 3);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
