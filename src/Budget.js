const Transaction = require('./Transaction.js')

class Budget {
    constructor () {
    this.name = "SeptemberBudget"

    this.transactions = []

}
    

addTransaction(description, amount, type, category)
    {
    const id = this.transactions.length + 1
    const date = new Date()
    const transaction = new Transaction(
        id,
        description, 
        amount,
        type,
        category,
        date
    )

    
            this.transactions.push(transaction)
            
            
    }



removeTransaction() {

}

getBalance(){
let balance = 0
for (let i = 0; i < this.transactions.length; i++){
            const transaction = this.transactions[i]

if (transaction.type === "income"){
    balance = balance + transaction.amount
}
        if (transaction.type === "outcome") {
    balance = balance - transaction.amount
}

}
return balance
}

getTotalIncome(){
    let totalIncome = 0
    for (let i = 0; i < this.transactions.length; i++){
         const transaction = this.transactions[i]
         if (transaction.type === "income") {
             totalIncome = totalIncome + transaction.amount

}
    }
    return totalIncome
}

getTotalExpenses(){
    let totalExpenses = 0
    for (let i = 0; i < this.transactions.length; i++){
const transaction = this.transactions[i]
    
if (transaction.type === "outcome"){
    totalExpenses = totalExpenses + transaction.amount
}
}

return totalExpenses 
}
getTransactionsByCategory(){

}

getSummary(){

}
}
 module.exports = Budget
