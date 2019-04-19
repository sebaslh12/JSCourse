import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// Read existing notes from localstorage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Expose notes from module
const getNotes = () => notes

const createNote = () => {
    const timestamp = moment().valueOf()
    const newNote = {
        id: uuidv4(),
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    }
    notes.push(newNote)
    saveNotes()
    return newNote.id
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1)
        notes.splice(noteIndex, 1)
    saveNotes()
}

// Sort notes by filter
const sortNotes = (sortBy) => {
    notes = loadNotes()
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

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id)
    if (!note) {
        return
    }
    if (typeof updates.title === 'string') {
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }
    if (typeof updates.body === 'string') {
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }

    //let textContent = generateLastEdited(note.updatedAt)
    saveNotes()

    return note
}

notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote }
