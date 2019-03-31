const account = {
    name: 'Sebastian Lozano',
    expenses: [], // Expense -> description, amount
    incomes: [], // Income -> description, amount
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        this.expenses.forEach((expense) => {
            totalExpenses += expense.amount
        })
        let totalIncome = 0
        this.incomes.forEach((income) => {
            totalIncome += income.amount
        })

        const balance = totalIncome - totalExpenses
        console.log(`${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses`)
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Salary', 1000)
account.getAccountSummary()