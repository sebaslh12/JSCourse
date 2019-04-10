// Functions that can be use after a new operator are constructor functions
const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Sebastian', 'Lozano', 27)
console.log(me)
const clancey = new Person('Clancey', 'Turner', 51)
console.log(clancey)

// Lecture challenge: create a Hangman constructor function

const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('California', 5)
console.log(game1)
const game2 = new Hangman('Minnesota', 6)
console.log(game2)