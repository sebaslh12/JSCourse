import Hangman from './hangman'
import getPuzzle from './requests'

const puzzle = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const resetEl = document.querySelector('#reset')
let game

const render = () => {
    puzzle.innerHTML = ''
    guessesEl.textContent = game.statusMessage
    game.puzzle.split('').forEach(letter => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzle.append(letterEl)
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeAGuess(guess)
    render()
})

resetEl.addEventListener('click', startGame)

startGame()