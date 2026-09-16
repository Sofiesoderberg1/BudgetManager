const Budget = require('../src/Budget.js')
const budget = new Budget()

budget.addTransaction("Food", 200, "outcome", "food")

console.log(budget.transactions)
console.log(budget.getBalance())

budget.addTransaction("Salary", 2000, "income", "salary")
budget.addTransaction("Extra work", 500, "income", "work")
console.log(budget.getTotalIncome())
console.log(budget.getTotalExpenses())