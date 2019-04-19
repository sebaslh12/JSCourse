console.log('utilities.js')
// Named export, used when we need to export multiple functions or classes
// Default export, used when only one class or function needs to be exported

const add = (a, b) => a + b
const name = 'Sebastian'

const square = (a) => a * a

// Alternative syntax
// export const add = ..
// export const name = ..
// export default const square = ...
export { add, name, square as default }