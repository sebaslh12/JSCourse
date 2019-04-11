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

const game = new Hangman('Car Parts', 2)

puzzle.textContent = game.puzzle
guessesEl.textContent = game.statusMessage


document.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeAGuess(guess)
    puzzle.textContent = game.puzzle
    guessesEl.textContent = game.statusMessage
})

// HTTP (Hypertext Transfer Protocol)
// Request - What we want
// Response - What was actually done

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText)
        console.log(data.puzzle)
    }
})
request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()