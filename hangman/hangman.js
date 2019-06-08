// CONTROLER

const Hangman = function(word, remaningGuesses) {
  this.word = word.toLowerCase().split("");
  this.remaningGuesses = remaningGuesses;
  this.guessedLetters = [];
  this.status = "playing";
};

Hangman.prototype.calculateStatus = function() {
  // const lettersUnguessd = this.word.filter(letter => {
  //   return !this.guessedLetters.includes(letter);
  // });

  // const finished = lettersUnguessd.length === 0

  const finished = this.word.every(letter => {
    return this.guessedLetters.includes(letter);
  });

  if (this.remaningGuesses === 0) {
    this.status = "failed";
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = "";

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  return puzzle;
};

Hangman.prototype.makeGuess = function(guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.remaningGuesses--;
  }

  this.calculateStatus();
};
