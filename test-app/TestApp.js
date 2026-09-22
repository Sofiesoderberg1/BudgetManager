const Budget = require('../src/Budget.js')
const budget = new Budget()

budget.addTransaction("Food", -200, "outcome", "food")

console.log(budget.transactions)
console.log(budget.getBalance())

budget.addTransaction("Salary", 2000, "income", "salary")
budget.addTransaction("Extra work", 500, "income", "work")
console.log(budget.getTotalIncome())
console.log(budget.getTotalExpenses())

budget.removeTransaction(1)

console.log(budget.transactions)

budget.addTransaction("Groceries", 300, "outcome", "food")

console.log(budget.transactions)

console.log(budget.getTransactionsByCategory("food"))

console.log(budget.getSummary())

//budget.addTransaction("Test", 100, "banana", "test")
budget.addTransaction("Test", -200, "outcome", "test")
console.log(budget.transactions)

console.log(budget.getTransactionsByType("income"))

const startDate = new Date(2026, 8, 1)
const endDate = new Date(2026, 8, 30)

console.log(budget.getTransactionsByDateRange(startDate, endDate))

console.log(budget.getTransactionsByType("income"))
console.log(budget.getLargestExpense())
budget.addTransaction("Lunch", 100, "outcome", "food")
console.log(budget.getCategorySummary())

console.log(budget.getLargestExpenseCategory())