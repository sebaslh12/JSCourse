'use strict'

// use strict removes potentially buggy behaviour, it's impossible to leak global variables nor to use reserved identifiers of future Javascript features nor to use deprecated functions

// Read existing notes from localstorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1)
        notes.splice(noteIndex, 1)
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // Setup the note title text
    textEl.textContent = note.title ? note.title : 'Unnamed note'
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    // Setup the delete note button text
    button.textContent = 'x'
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    noteEl.appendChild(button)
    noteEl.appendChild(textEl)

    return noteEl
}

// Sort notes by filter
const sortNotes = (notes, sortBy) => {
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
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
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

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
