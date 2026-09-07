class Budget {
    constructor () {
    this.name = "SeptemberBudget"

    this.transactions = []

}
}
    

addTransaction(description, amount, type, category)
    {
        const transaction = {
            description,
            amount,
            type,
            category
        }
            this.transactions.push(transaction)
    
    }


removeTransaction()

getBalance()

getTotalIncome()

getTotalExpenses()

getTransactionsByCategory()

getSummary()
}