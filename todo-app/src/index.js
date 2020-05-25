import { renderTodos } from "./views";
import { loadTodos, createTodo } from "./todos";
import { setFilters } from "./filters";

// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

renderTodos()

// Set up search text handler

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    });
    renderTodos()
})




// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// Set up form submission handler

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const formElements = e.target.elements
    const text = formElements.todoText.value
    if (text.trim().length) {
        createTodo(text)
        formElements.todoText.value = ''
        renderTodos()
    }

})
// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})
