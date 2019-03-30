let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`);

// Lecture Challenge

// name, age, location
// Sebastian is 24 and lives in Cali (message)
// Increase age by 1 and print message again
let me = {
    name: 'Sebastian',
    age: 24,
    location: 'Cali'
}

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)

me.age += 1

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)
