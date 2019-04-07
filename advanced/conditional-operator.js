const age = 24
// Also known as ternary operator
const message = age >= 18 ? 'You can vote' : 'You cannot vote'

/* if (age >= 18)
    message = 'You can vote'
else
    message = 'You cannot vote'
 */

console.log(message);

// Lecture challenge

const team = ['Tyler', 'Potter']

const teamSize = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'

console.log(teamSize)