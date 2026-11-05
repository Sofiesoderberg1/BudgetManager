import Budget from "../src/Budget.js";
const budget = new Budget();

budget.addTransaction("Food", -200, "outcome", "food");

console.log(budget.transactions);
console.log(budget.getBalance());

budget.addTransaction("Salary", 2000, "income", "salary");
budget.addTransaction("Extra work", 500, "income", "work");
console.log(budget.getTotalIncome());
console.log(budget.getTotalExpenses());

budget.removeTransaction(1);

console.log(budget.transactions);

budget.addTransaction("Groceries", 300, "outcome", "food");

console.log(budget.transactions);

console.log(budget.getTransactionsByCategory("food"));

console.log(budget.getSummary());

try {
  budget.addTransaction("Test", 100, "banana", "test");
  console.log("Test failed: invalid type was accepted");
} catch (error) {
  console.log("Test passed: invalid type was rejected");
}
budget.addTransaction("Test", -200, "outcome", "test");
console.log(budget.transactions);

console.log(budget.getTransactionsByType("income"));

const startDate = new Date(2026, 8, 1);
const endDate = new Date(2026, 8, 30);

console.log(budget.getTransactionsByDateRange(startDate, endDate));

console.log(budget.getLargestExpense());
budget.addTransaction("Lunch", 100, "outcome", "food");
console.log(budget.getCategorySummary());

console.log(budget.getLargestExpenseCategory());

console.log("Total food:", budget.getTotalByCategory("food"));

console.log(
  "Transactions above 400:",
  budget.getTransactionsAboveAmount(400),
);


import assert from "node:assert/strict";

// Test that removing a transaction keeps the other transactions.
const removalBudget = new Budget();

removalBudget.addTransaction("Salary", 2000, "income", "salary");
removalBudget.addTransaction("Food", 200, "outcome", "food");

removalBudget.removeTransaction(1);

assert.equal(removalBudget.transactions.length, 1);
assert.equal(removalBudget.transactions[0].description, "Food");
assert.equal(removalBudget.getBalance(), -200);

console.log("Test passed: removeTransaction removes only the selected transaction.");


 // Test validation of description and amount.
const validationBudget = new Budget();

// Empty description should be rejected.
assert.throws(
  () => validationBudget.addTransaction("", 100, "income", "salary"),
  /Description must not be empty/,
);

// Description containing only spaces should be rejected.
assert.throws(
  () => validationBudget.addTransaction("   ", 100, "income", "salary"),
  /Description must not be empty/,
);

// Text amount should be rejected.
assert.throws(
  () => validationBudget.addTransaction("Salary", "100", "income", "salary"),
  /Amount must be a valid number/,
);

// NaN should be rejected.
assert.throws(
  () => validationBudget.addTransaction("Salary", NaN, "income", "salary"),
  /Amount must be a valid number/,
);

// Negative amounts should still be accepted as positive amounts.
validationBudget.addTransaction("Food", -200, "outcome", "food");
assert.equal(validationBudget.transactions[0].amount, 200);

console.log("Test passed: description and amount validation.");


// Test the additional query methods.
const queryBudget = new Budget();
assert.equal(queryBudget.hasTransactions(), false);
queryBudget.addTransaction("Salary", 1000, "income", "salary");
queryBudget.addTransaction("Coffee", 5, "outcome", "food");
queryBudget.addTransaction("Lunch", 15, "outcome", "food");
assert.equal(queryBudget.hasTransactions(), true);
assert.equal(queryBudget.getAverageExpense(), 10);
assert.equal(queryBudget.getTransactionsBelowAmount(10).length, 1);

// Test that invalid date ranges are rejected.
assert.throws(
  () => queryBudget.getTransactionsByDateRange(new Date("invalid"), new Date()),
  /Start date must be a valid Date/,
);
assert.throws(
  () => queryBudget.getTransactionsByDateRange(new Date(2026, 8, 30), new Date(2026, 8, 1)),
  /Start date must not be after end date/,
);

console.log("Test passed: additional query methods and date-range validation.");
