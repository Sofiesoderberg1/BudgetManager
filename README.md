## BudgetManager

BudgetManager is a JavaScript module for managing personal budget transactions.

## Purpose

The purpose of BudgetManager is to provide programmers with a simple way to manage income and expenses in a budget.

The module allows programmers to:

- add transactions
- remove transactions
- calculate the current balance
- calculate total income
- calculate total expenses
- filter transactions by category
- filter transactions by date range
- filter transactions by type
- find the largest expense
- create summaries of transactions
- find the category with the largest total

## What the module does not do

BudgetManager does not provide a user interface, database, bank connection or external service integration. It is a programmer-facing module where the programmer provides the transaction data.

## Example

```js
const Budget = require('./src/Budget.js')

const budget = new Budget()

budget.addTransaction("Salary", 2000, "income", "salary")
budget.addTransaction("Groceries", 300, "outcome", "food")

console.log(budget.getBalance())
```

The balance in this example is:

```text
1700
```

## Transaction types


A transaction can have one of two types:

- `income`
- `outcome`

The amount is stored as a positive number. The transaction type determines whether the amount is added to or subtracted from the budget.

## Installation

Clone the repository and require the `Budget` class in your JavaScript project.

```js 
const Budget = require('./src/Budget.js')
```

## Testing

The module can be tested using the test application in the test-app directory.

Run:
````bash
node TestApp.js
```

More information about the tests can be found in TEST_REPORT.md.

