
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON)
        return JSON.parse(todosJSON)
    else
        return []
}

const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const generateTodoDOM = function (todo) {
    const todoParagraph = document.createElement('p')
    todoParagraph.textContent = todo.text
    return todoParagraph
}

const generateSummaryDOM = function (unfinishedTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${unfinishedTodos.length} todos left`
    return summary
}

const renderTodos = function (todos, filters) {
    const todosDiv = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const unfinishedTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })

    todosDiv.innerHTML = ''
    todosDiv.appendChild(generateSummaryDOM(unfinishedTodos))
    filteredTodos.forEach((todo) => {
        todosDiv.appendChild(generateTodoDOM(todo))
    })
}
