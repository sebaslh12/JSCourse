// Primitive values: string, number, boolean, null, undefined

// null and defined these are truly primitive values, they do not have methods nor properties
// string, number and boolean have an Object wrapper String, Number and Boolean respectively, by themselves they do not have anything but the value but with the Object wrapper we can access all the Proptotype functions. 
// At the end in Javascript everything is an Object except for null and undefined
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null, Arrays are customized Objects
// Function: myFunc --> Function.prototype --> Object.prototype --> null, Functions like Arrays are customized Objects

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
// Passing a function as an argument (callback) - async
/* getPuzzle('2', (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
}) */

/* getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
}) */

/* getLocation().then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(`Error: ${error}`)
}) */