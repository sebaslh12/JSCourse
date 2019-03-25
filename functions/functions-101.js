//Function - arguments, code, return value

let greetUser = function () {
    console.log('Welcome user')
}

greetUser();

let square = function (num) {
    let result = num * num
    return result;
}

let value = square(3);
let otherValue = square(10)

console.log(value)
console.log(otherValue)

//Lecture Challenge: Create a function to convert farenheit to celsius

let farenheitToCelsius = function (farenheitTemp) {
    return (farenheitTemp - 32) * (5 / 9)
}

let firstConversion = farenheitToCelsius(32)
let secondConversion = farenheitToCelsius(68)

console.log(firstConversion)
console.log(secondConversion)