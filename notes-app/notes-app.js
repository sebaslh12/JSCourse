let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const newNote = {
        id: uuidv4(),
        title: '',
        body: ''
    }
    notes.push(newNote)
    saveNotes(notes)
    document.location.assign(`/edit.html#${newNote.id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// NOTES

// DOM - Document Object Model

// CRUD operations - Create, Read, Update, Delete

// Scripts loaded into the same HTML share their scope

// localStorage.setItem('location', 'Cali')

// console.log(localStorage.getItem('location'))

// localStorage.removeItem('location')

// localStorage.clear()

/* const user = {
    name: 'Sebastian',
    Age: 24
} */

// JSON : JavaScript Object Notation
/* localStorage.setItem('user', JSON.stringify(user))
const userJSON = JSON.parse(localStorage.getItem('user'))
console.log(userJSON.name) */

/* document.querySelector('#for-fun').addEventListener('change', function(e){
    console.log(e.target.checked)
}) */

/* document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault()
    // Form fields can be accesed by their name, all form elements are inside the form's elements property
    console.log(e.target.elements.firstName.value)
}) */

/* document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach((note) => {
        note.remove()
    })
})
 */


// Query selector returns the first occurrence, its also used to get elements by id
/* const p = document.querySelector('p')∫
p.remove() */

// Query all returns an array with the matching results, its also used to get elements by class since you can have multiple elements with the class name
/* const ps = document.querySelectorAll('p')
ps.forEach((p) => {
    //console.log(p.textContent)
    p.textContent = '******'
}) */

// Add a new element
/* const newParagraph = document.createElement('p')

newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph) */

