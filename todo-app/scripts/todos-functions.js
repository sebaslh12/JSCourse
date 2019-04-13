'use strict'

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1)
        todos.splice(todoIndex, 1)
}

const toggleCompletion = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo)
        todo.completed = !todo.completed
}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const completeCheckbox = document.createElement('input')
    const todoText = document.createElement('span')
    const deleteButton = document.createElement('button')

    // Setup the checkbox type
    completeCheckbox.setAttribute('type', 'checkbox')
    completeCheckbox.checked = todo.completed
    completeCheckbox.addEventListener('change', () => {
        toggleCompletion(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    // Setup the todo text
    todoText.textContent = todo.text
    // Setup the delete todo button
    deleteButton.textContent = 'Remove'
    deleteButton.classList.add('button', 'button--text')
    deleteButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup Container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')

    containerEl.appendChild(completeCheckbox)
    containerEl.appendChild(todoText)
    todoEl.appendChild(containerEl)
    todoEl.appendChild(deleteButton)

    return todoEl
}

const generateSummaryDOM = (unfinishedTodos) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    const isPlural = unfinishedTodos.length > 1 ? 'todos' : 'todo'
    summary.textContent = `You have ${unfinishedTodos.length} ${isPlural} left`
    return summary
}

const renderTodos = (todos, filters) => {
    const todosDiv = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const unfinishedTodos = filteredTodos.filter((todo) => !todo.completed)

    todosDiv.innerHTML = ''
    todosDiv.appendChild(generateSummaryDOM(unfinishedTodos))
    if (filteredTodos.length) {
        filteredTodos.forEach((todo) => todosDiv.appendChild(generateTodoDOM(todo)))
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'No to-dos to show'
        todosDiv.appendChild(emptyMessage)
    }
}
