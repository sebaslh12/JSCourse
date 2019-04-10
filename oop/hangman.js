// Lecture challenge: create a Hangman constructor function

const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('California', 5)
console.log(game1)
const game2 = new Hangman('Minnesota', 6)
console.log(game2)