// Functions that can be use after a new operator are constructor functions
// Prototypal Inheritance: is a form of inheritance it is use to pass the methods across all the instances
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

// We set up methods on the prototype property of the constructor function we can share those methods accross all the instances
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    // Unlike normal functions, Arrow function does not bind this, so this code works
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Sebastian', 'Lozano', 24, ['Videogames', 'Sleeping'])
me.setName('Alexis Turner')
console.log(me.getBio())
const clancey = new Person('Clancey', 'Turner', 51)
console.log(clancey.getBio())