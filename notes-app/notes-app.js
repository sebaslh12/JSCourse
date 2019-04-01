// DOM - Document Object Model
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

// Query selector returns the first occurrence
/* const p = document.querySelector('p')
p.remove() */

// Query all returns an array with the matching results
const ps = document.querySelectorAll('p')
ps.forEach((p) => {
    //console.log(p.textContent)
    p.textContent = '******'
})

// Add a new element
const newParagraph = document.createElement('p')

newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)