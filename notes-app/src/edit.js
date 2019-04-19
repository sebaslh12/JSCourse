import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const noteId = location.hash.substring(1)
const titleInput = document.querySelector('#note-title')
const updateSpan = document.querySelector('#last-updated')
const bodyText = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')

initializeEditPage(noteId)

titleInput.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    updateSpan.textContent = generateLastEdited(note.updatedAt)
})

bodyText.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    updateSpan.textContent = generateLastEdited(note.updatedAt)
})

removeElement.addEventListener('click', () => {
    removeNote(noteId)
    location.assign('/')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})