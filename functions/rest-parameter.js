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