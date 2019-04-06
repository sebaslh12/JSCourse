const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    }, {
        title: 'My next job',
        body: 'Study'
    }, {
        title: 'Office modification',
        body: 'Get a new seat'
    }
]

// Find returns the matching element
const findNote = function (notes, noteTitle) {
    return notes.find((note) => {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter((note) => {
        const titleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const bodyMatch = note.body.toLocaleLowerCase().includes(query.toLowerCase())
        return titleMatch || bodyMatch
    })
}

const sortNotes = function (notes) {
    notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase())
            return -1
        else if (b.title.toLowerCase() < a.title.toLowerCase())
            return 1
        else
            return 0
    })
}

sortNotes(notes) // Modification by reference
console.log(notes);

/* console.log(notes.pop())
notes.push('Note 4')
console.log(notes.shift());
notes.unshift('First note') */

/* notes.splice(1, 1) // removes one item starting in position 1
notes.splice(1, 0, 'New second note') // Works as an index insertion
notes.splice(1, 1, 'New new second note') // Works as an index replacement just like notes[1] = newValuew */

/* console.log(notes.length);
console.log(notes); */

// There is no way to stop or break a forEach()
// Passing a function to a function is a Callback
/* notes.forEach((note, index) => {
    console.log(note);
    console.log(index);
}) */

// Unlike forEach, for loops allows early termination
/* for (let count = 2; count >= 0; count--) {
    console.log(`Counting... ${count}`);
}

for (let count = 0; count < notes.length; count++) {
    //console.log(notes[count]);
} */

/* let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject) // true, an object is equal only to itself
console.log({} === {}) // false
console.log(notes.indexOf({})) //-1, indexOf can't find an object ocurrence inside an array
 */

// To find an object occurrence we need to use findIndex and pass how the objects should be compared
/* const index = notes.findIndex((note) => {
    return note.title === 'My next job'
})
console.log(index) */

/* const findNote = function (notes, noteTitle) {
    const index = notes.findIndex((note) => {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
} */

/* const filteredNotes = notes.filter((note) => {
    const titleMatch = note.title.toLowerCase().includes('ne')
    const bodyMatch = note.body.toLocaleLowerCase().includes('ne')
    return titleMatch || bodyMatch
})
console.log(filteredNotes); */
// Like objects, arrays are also passed by reference
/* const note = findNote(notes, 'office modification')
console.log(note) */

//console.log(findNotes(notes, 'ne'))

