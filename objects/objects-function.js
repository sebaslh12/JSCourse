let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples history',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return { 
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary);

// Lecture Challenge, Create a function that take farenheit and returns f, k and c

let convertFarenheit = function (farenheit) { 
    return {
        farenheit: farenheit,
        celsius: (farenheit - 32) * (5 / 9),
        kelvin: (farenheit + 459.67) * (5 / 9)
    }
}

let temps = convertFarenheit(74)

console.log(temps);
