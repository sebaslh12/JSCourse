const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => {
    return note.id === noteId
})
const titleInput = document.querySelector('#note-title')
const updateSpan = document.querySelector('#last-updated')
const bodyText = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')

if (!note)
    location.assign('/')

titleInput.value = note.title
updateSpan.textContent = generateLastEdited(note.updatedAt)
bodyText.value = note.body

titleInput.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    updateSpan.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyText.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    updateSpan.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', function () {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => {
            return note.id === noteId
        })
        if (!note)
            location.assign('/')

        titleInput.value = note.title
        updateSpan.textContent = generateLastEdited(note.updatedAt)
        bodyText.value = note.body
    }
})