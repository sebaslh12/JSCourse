const notes = ['Note 1', 'Note 2', 'Note 3']

/* console.log(notes.pop())
notes.push('Note 4')
console.log(notes.shift());
notes.unshift('First note') */

notes.splice(1, 1) // removes one item starting in position 1
notes.splice(1, 0, 'New second note') // Works as an index insertion
notes.splice(1, 1, 'New new second note') // Works as an index replacement just like notes[1] = newValuew

console.log(notes.length);
console.log(notes);

// There is no way to stop or break a forEach()
// Passing a function to a function is a Callback
notes.forEach((note, index) => {
    console.log(note);
    console.log(index);
})