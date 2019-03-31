const todos = [
    {
        text: 'Learn Js',
        completed: true
    },
    {
        text: 'Learn Node',
        completed: true
    },
    {
        text: 'Finish RnR course',
        completed: false
    },
    {
        text: 'Leave this country',
        completed: false
    },
    {
        text: 'Get a cat',
        completed: false
    }
]

// Lecture Challenge, create an array with five todos, print how many todos you have, print the first todo and print the second to last todo
/* console.log(`You have ${todos.length} todos`);
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`) */

// Lecture Challenge, delete 3rd item, push new item, remove the first item
/* todos.splice(2, 1)
todos.push('Conquer the world')
todos.shift()

console.log(`You have ${todos.length} todos`); */

// Lecture challenge, print all of the todos with this format 'index. todo'
/* todos.forEach((todo,index)=>{
    const pos = index + 1
    console.log(`${pos}. ${todo}`);
}) */

// Lecture challenge use for loop and print the same as the forEach loop
/* for (let index = 0; index < todos.length; index++) {
    const pos = index + 1
    console.log(`${pos}. ${todos[index]}`);
} */

// Lecture challenge, delete todo by text value

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex((todo) => {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index != -1) {
        todos.splice(index, 1)
    }
}

/* deleteTodo(todos, 'Learn js')
console.log(todos) */

// Lecture challenge, filter the notes by completion

const getThingsToDo = function (todos) {
    return todos.filter((todo) => {
        return !todo.completed
    })
}

//console.log(getThingsToDo(todos))

// Lecture challenge, sort the array by completion (uncompleted ones first)
const sortTodos = function (todos) {
    todos.sort((a, b) => {
        if (a.completed > b.completed)
            return 1
        else if (b.completed > a.completed)
            return -1
        else
            return 0
    })
}

sortTodos(todos)
console.log(todos)