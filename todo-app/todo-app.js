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

/* const ps = document.querySelectorAll('p')

ps.forEach((p) => {
    if (p.textContent.toLowerCase().includes('the')) {
        p.remove()
    }
}) */

// Lecture challenge, add p per each todo text value. Add a summary that says how many todos you have left
const body = document.querySelector('body')

const unfinishedTodos = todos.filter((todo) => {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${unfinishedTodos.length} todos left`
body.appendChild(summary)

todos.forEach((todo) => {
    const todoParagraph = document.createElement('p')
    todoParagraph.textContent = todo.text
    body.appendChild(todoParagraph)
})

// Lecture challenge, add a listener to the add todo button
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo')
})