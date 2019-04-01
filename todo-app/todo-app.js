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

const filters = {
    searchText: ''
}

const todosDiv = document.querySelector('#todos')

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const unfinishedTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })

    todosDiv.innerHTML = ''
    const summary = document.createElement('h2')
    summary.textContent = `You have ${unfinishedTodos.length} todos left`
    todosDiv.appendChild(summary)
    filteredTodos.forEach((todo) => {
        const todoParagraph = document.createElement('p')
        todoParagraph.textContent = todo.text
        todosDiv.appendChild(todoParagraph)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const formElements = e.target.elements
    const newTodo = {
        text: formElements.todoText.value,
        completed: false
    }
    todos.push(newTodo)
    formElements.todoText.value = ''
    renderTodos(todos, filters)
})


/*
// Lecture challenge, add a listener to the add todo button
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo')
})

// Lecture challenge, listen for todo text input change
document.querySelector('#new-todo').addEventListener('input', function(e){
    console.log(e.target.value)
}) */