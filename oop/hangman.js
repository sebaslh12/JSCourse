// Lecture challenge: create a Hangman constructor function

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function () {
    let wordPuzzle = this.word.join('')
    this.word.forEach((letter) => {
        if (!this.guessedLetters.includes(letter)) {
            if (letter !== ' ')
                wordPuzzle = wordPuzzle.replace(letter, '*')
        }
    })
    return wordPuzzle
}

Hangman.prototype.makeAGuess = function (guess) {
    if (!this.guessedLetters.includes(guess)) {
        if (this.remainingGuesses > 0) {
            this.guessedLetters.push(guess.toLowerCase())
            if (!this.word.includes(guess))
                this.remainingGuesses += -1
        } else {
            console.log(`You've used all your attempts`)
        }
    } else {
        console.log('Letter already used')
    }
}

const game1 = new Hangman('Cat', 5)
game1.makeAGuess('s')
game1.makeAGuess('a')
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 6)
game2.makeAGuess('n')
game2.makeAGuess('w')
game2.makeAGuess('j')
game2.makeAGuess('E')
console.log(game2.getPuzzle())
