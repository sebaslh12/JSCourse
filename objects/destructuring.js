// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const todo = {
    id: '1928301',
    text: 'Pay bills',
    completed: false
}

// By putting the property name we create a new variable
// We can use any variable name by putting property: variableName 
// we can add properties that doesn't exist and set a default value to them
// Using the spread operator give us the properties we haven't destructured yet as the object we are destructuring
const { text: todoText, completed, detail = 'No details provided', ...others } = todo

console.log(todoText, completed, detail, others)

// It also works for arrays

const ages = [12, 65, 23, 80, 72]

// Here s pread syntax returns an array 
// We can skip values by passing nothing to the one we want to ignore
const [firstAge, secondAge, , ...otherAges] = ages

console.log(firstAge, secondAge, otherAges)

// We can destructure function arguments

const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
}

printTodo(todo)
