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
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (isUnique) {
        if (this.remainingGuesses > 0) {
            this.guessedLetters.push(guess)
        } else {
            console.log(`You've used all your attempts`)
        }
    } else {
        console.log('Letter already used')
    }

    if (isUnique && isBadGuess)
        this.remainingGuesses--
}

const game1 = new Hangman('Cat', 2)



const game2 = new Hangman('New Jersey', 6)

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

document.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeAGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})