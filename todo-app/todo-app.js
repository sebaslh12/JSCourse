let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const formElements = e.target.elements
    const newTodo = {
        id: uuidv4(),
        text: formElements.todoText.value,
        completed: false
    }
    todos.push(newTodo)
    formElements.todoText.value = ''
    saveTodos(todos)
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})