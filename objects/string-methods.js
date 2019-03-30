let name = '   Sebastian Lozano'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'));

// Trim method
console.log(name.trim())

// Lecture Challenge, check if a password is valid, length more than 8 and it doesn't contain the word password

let isValidPassword = function (password) {
    return !password.includes('password') && password.length >= 8
}

console.log(isValidPassword('password'))
console.log(isValidPassword('18297381pass219word'))