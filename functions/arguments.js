// Multiple arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)

console.log(result);

// Default arguments
let getScoreText = function (name = 'Anonymous', score = '0') {
    return 'Name: ' + name + ' - Score:' + score
}

let scoreTextNoArguemnts = getScoreText() //Default values will be use
let scoreTextArguments = getScoreText('Sebastian', 100)// Passed values will be use
let scoreTextFirstArgument = getScoreText('Sebastian')
let scoreTextSecondArgument = getScoreText(undefined, 100)

//Lecture Challenge: Tip calculator, Arguments: Total, Tip percent

let tipCalculator = function (total, tipPercent = 0.20) {
    return total * tipPercent
}

console.log(tipCalculator(100));
console.log(tipCalculator(110, 0.30));
