const todos = ['Learn Js', 'Learn Node', 'Finish RnR course', 'Leave this country', 'Get a cat']

// Lecture Challenge, create an array with five todos, print how many todos you have, print the first todo and print the second to last todo

console.log(`You have ${todos.length} todos`);
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)

// Lecture Challenge, delete 3rd item, push new item, remove the first item

todos.splice(2, 1)
todos.push('Conquer the world')
todos.shift()

console.log(`You have ${todos.length} todos`);

// Lecture challenge, print all of the todos with this format 'index. todo'

todos.forEach((todo,index)=>{
    const pos = index + 1
    console.log(`${pos}. ${todo}`);
})

// Lecture challenge use for loop and print the same as the forEach loop

for (let index = 0; index < todos.length; index++) {
    const pos = index + 1
    console.log(`${pos}. ${todos[index]}`);
}