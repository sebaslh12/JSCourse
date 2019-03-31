// var definition should be avoided
var firstName = 'Sebastian'
firstName = 'Andrew'

// DIFFERENCES: With var there is no variable redefinition
var firstName = 'Jen'
console.log(firstName);

// DIFFERENCES: var is function scoped not block scoped
if (10 === 10) {
    var lastName = 'Mead'
}
console.log(lastName);

const setName = function () {
    var functionScoped = true
}
//console.log(functionScoped) in this case the variable is not defined

// DIFFERENCES: Variable definition gets hoisted (its always moved to the top)
age = 10
console.log(age) // Output: 10
var age