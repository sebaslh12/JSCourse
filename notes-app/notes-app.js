// DOM - Document Object Model

// Query selector returns the first occurrence
/* const p = document.querySelector('p')
p.remove() */

// Query all returns an array with the matching results
const ps = document.querySelectorAll('p')
ps.forEach((p) => {
    //console.log(p.textContent)
    p.textContent = '******'
})