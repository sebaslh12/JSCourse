// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
const calculateAverage = (thing, ...numbers) => {
    const sum = numbers.reduce((a, b) => a + b)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('age', 0, 100, 88, 64))

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

printTeam('Liberty', 'Cassey Pen', 'Marge', 'Aiden', 'Herbert', 'Sherry')

team = {
    name: 'Liberty',
    coach: 'Cassey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

// Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
// Other words we convert an array into individual objects so they can be used as single parameters for the function

printTeam(team.name, team.coach, ...team.players)

const cities = ['Barcelona', 'Cape Town', 'Bordeaux']
// With the spread operator we can clone an array
const citiesCopy = [...cities]
// Or to replace push function
cities = [...cities, 'Santiago']