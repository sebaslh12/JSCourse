// DOM - Document Object Model
const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    }, {
        title: 'My next job',
        body: 'Study'
    }, {
        title: 'Office modification',
        body: 'Get a new seat'
    }
]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    const notesDiv = document.querySelector('#notes')
    notesDiv.innerHTML = ''
    filteredNotes.forEach((note) => {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        notesDiv.appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#for-fun').addEventListener('change', function(e){
    console.log(e.target.checked)
})

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

