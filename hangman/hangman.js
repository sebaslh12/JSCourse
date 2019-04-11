// Lecture challenge: create a Hangman constructor function

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses
    this.status = 'playing'
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
        if (this.remainingGuesses)
            this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess && this.remainingGuesses)
        this.remainingGuesses--

    this.calculateStatus()
}

Hangman.prototype.calculateStatus = function () {
    if (!this.remainingGuesses) {
        this.status = 'failed'
    } else {
        const isFinished = this.word.every((letter) => this.guessedLetters.includes(letter))
        this.status = isFinished ? 'finished' : this.status
    }
    this.getStatusMessage()
}

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}".`
    } else if (this.status === 'finished') {
        return `Great work you guessed the word!`
    } else {
        return `Guesses left: ${this.remainingGuesses}`
    }
}