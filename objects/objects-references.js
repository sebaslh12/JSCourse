let myAccount = {
    name: 'Sebastian Lozano',
    expenses: 0,
    income: 0
}

// Objects are passed by reference, it's a pointer to a memory position, changing one of the properties will change in all of the other instances
let addExpense = function (account, amount) {
    account.expenses += amount
}

// addIncome
let addIncome = function (account, income) {
    account.income += income
}

// resetAccount
let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

// Account summary, Account for Sebastian has $900. $1000 in income. $100 in expenses.

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    let summary = `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
    console.log(summary)
    return summary
}

addIncome(myAccount, 1000)
addExpense(myAccount, 50)
addExpense(myAccount, 50)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
console.log(myAccount);
