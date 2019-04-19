import moment from 'moment'
import { sortNotes, getNotes } from './notes'
import { getFilters } from './filters'
// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // Setup the note title text
    textEl.textContent = note.title ? note.title : 'Unnamed note'
    textEl.classList.add('list-item__title')
    // Setup the status message
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')


    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')
    noteEl.appendChild(textEl)
    noteEl.appendChild(statusEl)

    return noteEl
}

// Render application notes
const renderNotes = () => {
    const notesDiv = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesDiv.innerHTML = ''

    if (filteredNotes.length) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesDiv.appendChild(noteEl)
        })
    } else {
        const emptyNotes = document.createElement('p')
        emptyNotes.textContent = 'No notes to show'
        emptyNotes.classList.add('empty-message')
        notesDiv.appendChild(emptyNotes)
    }

}

const initializeEditPage = (noteId) => {
    const titleInput = document.querySelector('#note-title')
    const updateSpan = document.querySelector('#last-updated')
    const bodyText = document.querySelector('#note-body')
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if (!note)
        location.assign('/')

    titleInput.value = note.title
    bodyText.value = note.body
    updateSpan.textContent = generateLastEdited(note.updatedAt)
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage }