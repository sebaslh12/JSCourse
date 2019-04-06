const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find((note) => {
    return note.id === noteId
})
const titleInput = document.querySelector('#note-title')
const bodyText = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')

if (!note)
    location.assign('/')

titleInput.value = note.title
bodyText.value = note.body

titleInput.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

bodyText.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click', function () {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/')
})