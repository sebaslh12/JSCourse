// Read existing notes from localstorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON)
        return JSON.parse(notesJSON)
    else
        return []
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex((note) => {
        return note.id === id
    })
    if (noteIndex > -1)
        notes.splice(noteIndex, 1)
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup the note title text
    textEl.textContent = note.title ? note.title : 'Unnamed note'
    // Setup the delete note button text
    button.textContent = 'x'
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    noteEl.appendChild(button)
    noteEl.appendChild(textEl)

    return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // This statement triggers the browser debugger
    // debugger 
    const notesDiv = document.querySelector('#notes')
    notesDiv.innerHTML = ''
    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        notesDiv.appendChild(noteEl)
    })
}