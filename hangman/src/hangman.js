// CONTROLER
class Hangman {
    constructor(word, remaningGuesses) {
      this.word = word.toLowerCase().split("");
      this.remaningGuesses = remaningGuesses;
      this.guessedLetters = [];
      this.status = "playing";
    }
  
    get statusMessage() {
      if (this.status === "playing") {
        return `Guesses left: ${this.remaningGuesses}`;
      } else if (this.status === "failed") {
        return `Nice try! The word was "${this.word.join("")}"`;
      } else {
        return `Great work! You guessed the word.`;
      }
    }
  
    calculateStatus() {
      // const lettersUnguessd = this.word.filter(letter => {
      //   return !this.guessedLetters.includes(letter);
      // });
      // const finished = lettersUnguessd.length === 0
  
      const finished = this.word.every(
        letter => this.guessedLetters.includes(letter) || letter === " "
      );
      if (this.remaningGuesses === 0) {
        this.status = "failed";
      } else if (finished) {
        this.status = "finished";
      } else {
        this.status = "playing";
      }
    }
  
    get puzzle() {
      let puzzle = "";
      this.word.forEach(letter => {
        if (this.guessedLetters.includes(letter) || letter === " ") {
          puzzle += letter;
        } else {
          puzzle += "*";
        }
      });
      return puzzle;
    }
  
    makeGuess(guess) {
      guess = guess.toLowerCase();
      const isUnique = !this.guessedLetters.includes(guess);
      const isBadGuess = !this.word.includes(guess);
      if (this.status !== "playing") {
        return;
      }
      if (isUnique) {
        this.guessedLetters.push(guess);
      }
      if (isUnique && isBadGuess) {
        this.remaningGuesses--;
      }
      this.calculateStatus();
    }
}
  
export default Hangman;
  