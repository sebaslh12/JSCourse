// Global Scope (farenheitToCelsius, firstConversion, secondConversion)
    // Local Scope (farenheitTemp, celsius)
        // Local Scope (isFreezing)

let farenheitToCelsius = function (farenheitTemp) {
    let celsius = (farenheitTemp - 32) * (5 / 9)

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let firstConversion = farenheitToCelsius(32)
let secondConversion = farenheitToCelsius(68)

console.log(firstConversion)
console.log(secondConversion)