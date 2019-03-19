// === equality operator, compares value and type
// !== not equal, compares value and type
// == equal operator, compares value
// != not equal operator, compares value

let temp = 31
let isFrezzing = temp == '31' //true
let isNotFreezing = temp === '31' //false

console.log(isFrezzing)

//Lecture Challenge: With your age check if you're a child (age 7 or under) or if you're a senior (65 or older)

let myAge = 24
let isSenior = myAge >= 65
let isChild = myAge <= 7
console.log(isSenior)
console.log(isChild)
