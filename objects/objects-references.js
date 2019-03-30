let myAccount = {
    name: 'Sebastian Lozano',
    expenses: 0,
    income: 0
}

//Objects are passed by reference, it's a pointer to a memory position, changing one of the properties will change in all of the other instances
let addExpense = function (account, amount) {
    account.expenses += amount
}

addExpense(myAccount, 10)
console.log(myAccount);
