let todos = []


const todosJSON = localStorage.getItem('todos')
if (todosJSON) {
    todos = JSON.parse(todosJSON)
}

const filters = {
    searchText: '',
    hideCompleted: false
}

const todosDiv = document.querySelector('#todos')

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
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
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})