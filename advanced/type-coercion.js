// Type coercion is the process converting a value from one type to another.
// Only string, numbers and booleans can be coerced
console.log('5' + 5) // 55, coerced to string
console.log('5' - 5) // 0, coerced to number (there is no minus operator between strings)
console.log('5' == 5) // == does not take type to this comparison so these are equal

const type = typeof {}
console.log(type)

const value = false + 12
const valueType = typeof value
console.log(valueType);
console.log(value)
