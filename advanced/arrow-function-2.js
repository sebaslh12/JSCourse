const add = function () {
    return arguments[0] + arguments[1]
}

// Arrow functions do not have arguments bound to it
const arrowAdd = () => {
    return arguments[0] + arguments[1]
}
console.log(add(11, 22, 33, 44))
console.log(arrowAdd(11, 22, 33, 44))

const car = {
    color: 'Red',
    getSummary: () => {
        // this is not bound inside an arrow function
        return `This car is ${this.color}`
    }
}

console.log(car.getSummary())