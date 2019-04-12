// A closure is the combination of a function and the lexical environment within which that function was declared.
// Async callbacks work under the closure deifinition
const myFunction = () => {
    const message = 'This is my message'
    // printMessage has acces to the lexical scope of myFunction
    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()

// Closures allow us to create private variables
const createCounter = () => {
    // count exists in the create counter scope
    let count = 0

    // this object has the lexical enviroment of createCounter
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

// Counter can't access count since it only exists in the createCounter scope and not in the object that was return
const counter = createCounter()

// The operations are the ones that are on the object, there is no way to get access to count from here
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.get())

// This is called curriying, breaking one function with many arguments to many functions with one argument.
// They are used to create functions with some base values or event handling
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))

// Lecture challenge: Tipper
// 1. Create a function which takes in the base tip (.15 for 15%)
// 2. Set it up to return a function that takes in the bill amount
// 3. Use both of them

const createTipper = (baseTip) => {
    return (billAmount) => {
        return billAmount * baseTip
    }
}

const tip20 = createTipper(.20)
console.log(tip20(100))