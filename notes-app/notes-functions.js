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
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // Setup the note title text
    textEl.textContent = note.title ? note.title : 'Unnamed note'
    textEl.setAttribute('href', `/edit.html#${note.id}`)
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

// Sort notes by filter
const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt)
                return -1
            else if (a.updatedAt < b.updatedAt)
                return 1
            else return 0
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt)
                return -1
            else if (a.createdAt < b.createdAt)
                return 1
            else return 0
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase())
                return -1
            else if (a.title.toLowerCase() > b.title.toLowerCase())
                return 1
            else return 0
        })
    }
}

// Render application notes
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy)
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

// Generate the las edited message

const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}