// Functions that can be use after a new operator are constructor functions
// Prototypal Inheritance: is a form of inheritance it is use to pass the methods across all the instances

// This constructor function it's an old way to do things
/* const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
} */

// We set up methods on the prototype property of the constructor function we can share those methods accross all the instances
/* Person.prototype.getBio = function () {
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
} */

// After ES2015 class was introduced, it does the same things thant the other definition, prototypal inheritance is still used behind the scenes

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }

    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

// Lecture challenge: Create student subclass, create grade property, override bio method, create upgradeGrade method

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes = []) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class`
    }

    updateGrade(grade) {
        this.grade += grade
    }
}

const me = new Student('Sebastian', 'Lozano', 24, 60)

console.log(me.getBio())
me.updateGrade(15)
console.log(me.getBio())