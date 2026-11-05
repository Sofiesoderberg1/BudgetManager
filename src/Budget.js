import Transaction from "./Transaction.js";

/**
 * Manages income and expenses for a personal budget.
 */
export default class Budget {
  #transactions;
  #nextId;

  constructor() {
    this.name = "SeptemberBudget";
    this.#transactions = [];
    this.#nextId = 1;
  }

  /**
   * Provides read-only access to the current transaction list.
   * A new array prevents callers from adding or removing internal entries.
   */
  get transactions() {
    return [...this.#transactions];
  }

  /**
   * Validates a description before a transaction is created.
   * @param {string} description - Text describing the transaction.
   */
  #validateDescription(description) {
    if (typeof description !== "string" || description.trim() === "") {
      throw new Error("Description must not be empty");
    }
  }

  /**
   * Validates the amount before a transaction is created.
   * @param {number} amount - Transaction amount.
   */
  #validateAmount(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount)) {
      throw new Error("Amount must be a valid number");
    }
  }

  /**
   * Validates the transaction type.
   * @param {string} type - Must be income or outcome.
   */
  #validateType(type) {
    if (type !== "income" && type !== "outcome") {
      throw new Error("Type must be income or outcome");
    }
  }

  /**
   * Validates that a date range contains valid Date objects in order.
   * @param {Date} startDate - First date in the range.
   * @param {Date} endDate - Last date in the range.
   */
  #validateDateRange(startDate, endDate) {
    if (!(startDate instanceof Date) || Number.isNaN(startDate.getTime())) {
      throw new Error("Start date must be a valid Date");
    }
    if (!(endDate instanceof Date) || Number.isNaN(endDate.getTime())) {
      throw new Error("End date must be a valid Date");
    }
    if (startDate > endDate) {
      throw new Error("Start date must not be after end date");
    }
  }

  /**
   * Adds a transaction to the budget.
   * @param {string} description - Description of the transaction.
   * @param {number} amount - Amount to add; negative values are stored as positive.
   * @param {"income"|"outcome"} type - Whether the transaction is income or expense.
   * @param {string} category - Category assigned to the transaction.
   * @returns {Transaction} The transaction that was added.
   */
  addTransaction(description, amount, type, category) {
    this.#validateDescription(description);
    this.#validateAmount(amount);
    this.#validateType(type);

    const storedAmount = Math.abs(amount);
    const transaction = new Transaction(
      this.#nextId,
      description,
      storedAmount,
      type,
      category,
      new Date(),
    );

    this.#nextId += 1;
    this.#transactions.push(transaction);
    return transaction;
  }

  /**
   * Removes a transaction using its ID.
   * @param {number} id - ID of the transaction to remove.
   * @returns {boolean} True when a transaction was removed.
   */
  removeTransaction(id) {
    const index = this.#transactions.findIndex(
      (transaction) => transaction.id === id,
    );

    if (index === -1) {
      return false;
    }

    this.#transactions.splice(index, 1);
    return true;
  }

  /**
   * Calculates the current balance.
   * @returns {number} Income minus expenses.
   */
  getBalance() {
    let balance = 0;

    for (const transaction of this.#transactions) {
      if (transaction.type === "income") {
        balance += transaction.amount;
      } else if (transaction.type === "outcome") {
        balance -= transaction.amount;
      }
    }

    return balance;
  }

  /**
   * Calculates the total income.
   * @returns {number} Sum of all income transactions.
   */
  getTotalIncome() {
    let totalIncome = 0;

    for (const transaction of this.#transactions) {
      if (transaction.type === "income") {
        totalIncome += transaction.amount;
      }
    }

    return totalIncome;
  }

  /**
   * Calculates the total expenses.
   * @returns {number} Sum of all expense transactions.
   */
  getTotalExpenses() {
    let totalExpenses = 0;

    for (const transaction of this.#transactions) {
      if (transaction.type === "outcome") {
        totalExpenses += transaction.amount;
      }
    }

    return totalExpenses;
  }

  /**
   * Returns transactions assigned to a category.
   * @param {string} category - Category to match.
   * @returns {Transaction[]} Matching transactions.
   */
  getTransactionsByCategory(category) {
    const matchingTransactions = [];

    for (const transaction of this.#transactions) {
      if (transaction.category === category) {
        matchingTransactions.push(transaction);
      }
    }

    return matchingTransactions;
  }

  /**
   * Calculates the total amount for a category.
   * @param {string} category - Category to total.
   * @returns {number} Sum of amounts in the category.
   */
  getTotalByCategory(category) {
    let total = 0;

    for (const transaction of this.#transactions) {
      if (transaction.category === category) {
        total += transaction.amount;
      }
    }

    return total;
  }

  /**
   * Returns transactions whose amount is greater than the given amount.
   * @param {number} amount - Amount threshold.
   * @returns {Transaction[]} Transactions above the threshold.
   */
  getTransactionsAboveAmount(amount) {
    const matchingTransactions = [];

    for (const transaction of this.#transactions) {
      if (transaction.amount > amount) {
        matchingTransactions.push(transaction);
      }
    }

    return matchingTransactions;
  }

  /**
   * Returns transactions whose amount is below the given amount.
   * @param {number} amount - Amount threshold.
   * @returns {Transaction[]} Transactions below the threshold.
   */
  getTransactionsBelowAmount(amount) {
    const matchingTransactions = [];

    for (const transaction of this.#transactions) {
      if (transaction.amount < amount) {
        matchingTransactions.push(transaction);
      }
    }

    return matchingTransactions;
  }

  /**
   * Returns a summary containing balance, income and expenses in that order.
   * @returns {number[]} Summary values.
   */
  getSummary() {
    return [
      this.getBalance(),
      this.getTotalIncome(),
      this.getTotalExpenses(),
    ];
  }

  /**
   * Filters transactions by an inclusive date range.
   * @param {Date} startDate - First date in the range.
   * @param {Date} endDate - Last date in the range.
   * @returns {Transaction[]} Transactions within the range.
   */
  getTransactionsByDateRange(startDate, endDate) {
    this.#validateDateRange(startDate, endDate);
    const matchingTransactions = [];

    for (const transaction of this.#transactions) {
      if (transaction.date >= startDate && transaction.date <= endDate) {
        matchingTransactions.push(transaction);
      }
    }

    return matchingTransactions;
  }

  /**
   * Returns transactions matching a transaction type.
   * @param {"income"|"outcome"} type - Type to match.
   * @returns {Transaction[]} Matching transactions.
   */
  getTransactionsByType(type) {
    this.#validateType(type);
    const matchingTransactions = [];

    for (const transaction of this.#transactions) {
      if (transaction.type === type) {
        matchingTransactions.push(transaction);
      }
    }

    return matchingTransactions;
  }

  /**
   * Finds the largest expense amount.
   * @returns {number} Largest expense, or zero if there are no expenses.
   */
  getLargestExpense() {
    let largestExpense = 0;

    for (const transaction of this.#transactions) {
      if (
        transaction.type === "outcome" &&
        transaction.amount > largestExpense
      ) {
        largestExpense = transaction.amount;
      }
    }

    return largestExpense;
  }

  /**
   * Totals transaction amounts for each category.
   * @returns {Object<string, number>} Category names mapped to totals.
   */
  getCategorySummary() {
    const categorySummary = {};

    for (const transaction of this.#transactions) {
      const category = transaction.category;

      if (Object.hasOwn(categorySummary, category)) {
        categorySummary[category] += transaction.amount;
      } else {
        categorySummary[category] = transaction.amount;
      }
    }

    return categorySummary;
  }

  /**
   * Finds the category with the highest total transaction amount.
   * @returns {string} Category name, or an empty string when no categories exist.
   */
  getLargestExpenseCategory() {
    const categorySummary = this.getCategorySummary();
    let largestCategory = "";
    let largestAmount = 0;

    for (const [category, amount] of Object.entries(categorySummary)) {
      if (amount > largestAmount) {
        largestAmount = amount;
        largestCategory = category;
      }
    }

    return largestCategory;
  }

  /**
   * Calculates the average expense amount.
   * @returns {number} Average expense, or zero when there are no expenses.
   */
  getAverageExpense() {
    let total = 0;
    let count = 0;

    for (const transaction of this.#transactions) {
      if (transaction.type === "outcome") {
        total += transaction.amount;
        count += 1;
      }
    }

    if (count === 0) {
      return 0;
    }

    return total / count;
  }

  /**
   * Checks whether the budget contains any transactions.
   * @returns {boolean} True when at least one transaction exists.
   */
  hasTransactions() {
    return this.#transactions.length > 0;
  }
}
