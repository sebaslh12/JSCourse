import { getTodos, toggleCompletion, removeTodo } from "./todos";
import { getFilters } from "./filters";

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todos = getTodos()
    const { searchText, hideCompleted } = getFilters()
    const todosDiv = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase())
        const hideCompletedMatch = !hideCompleted || !todo.completed
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
// generateTodoDOM
// Arguments: todo
// Return value: the todo element
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
        renderTodos()
    })
    // Setup the todo text
    todoText.textContent = todo.text
    // Setup the delete todo button
    deleteButton.textContent = 'Remove'
    deleteButton.classList.add('button', 'button--text')
    deleteButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
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

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

const generateSummaryDOM = (unfinishedTodos) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    const isPlural = unfinishedTodos.length > 1 ? 'todos' : 'todo'
    summary.textContent = `You have ${unfinishedTodos.length} ${isPlural} left`
    return summary
}

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM }