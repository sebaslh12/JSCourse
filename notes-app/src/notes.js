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
}

notes = loadNotes()

export { getNotes, createNote }
