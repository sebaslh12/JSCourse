let num = 103.941

console.log(num.toFixed(2));

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// Lecture challenge, Create a function that receives a number (a guess) and compares it with a random number between 1 - 5

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum === guess
}

console.log(makeGuess(4));