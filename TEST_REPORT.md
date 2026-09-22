# Test Report

## Tests

| What was tested | How was it tested? | Result |
|---|---|---|
| Add transaction | Added an income and an outcome using `addTransaction()` and checked the transactions array. | Passed |
| Calculate balance | Added income and outcome transactions and used `getBalance()`. | Passed |
| Calculate total income | Added income transactions and used `getTotalIncome()`. | Passed |
| Calculate total expenses | Added outcome transactions and used `getTotalExpenses()`. | Passed | 
| Remove transaction | Added transactions, removed one using `removeTransaction()`, and checked the transactions array. | Passed |
| Filter by category | Added transactions with categories and used `getTransactionsByCategory()`. | Passed |
| Get summary | Added transactions and used `getSummary()` to check balance, income and expenses. | Passed |
| Validate transaction type | Tried to add a transaction with an invalid type and checked that an error was thrown. | Passed |
| Handle negative amount | Added a transaction with a negative amount and checked that the amount was converted to a positive value. | Passed |
| Filter by date range | Added transactions and used `getTransactionsByDateRange()` with a start and end date. | Passed |
| Filter by type | Added income and outcome transactions and used `getTransactionsByType()`. | Passed |
| Find largest expense | Added multiple expenses and used `getLargestExpense()`. | Passed |
| Summarize by category | Added multiple transactions, including two food expenses, and used `getCategorySummary()`. | Passed |
| Find largest category | Added transactions in different categories and used `getLargestExpenseCategory()` to find the category with the highest total. | Passed |wc -l ../src/Budget.js ../src/Transaction.js