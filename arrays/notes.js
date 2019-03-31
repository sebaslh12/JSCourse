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

// Unlike forEach, for loops allows early termination
for (let count = 2; count >= 0; count--) {
    console.log(`Counting... ${count}`);
}

for (let count = 0; count < notes.length; count++) {
    //console.log(notes[count]);
}

let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject) // true, an object is equal only to itself
console.log({} === {}) // false
console.log(notes.indexOf({})) //-1, indexOf can't find an object ocurrence inside an array

// To find an object occurrence we need to use findIndex and pass how the objects should be compared
const index = notes.findIndex((note) => {
    return note.title === 'My next job'
})

console.log(index)