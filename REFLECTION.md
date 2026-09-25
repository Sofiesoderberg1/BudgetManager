# Reflection

## Naming

The names of the classes, methods and variables are intended to describe their purpose clearly.

For example, the class `Budget` represents the budget and `Transaction` represents a single transaction. Method names such as `getBalance()`, `getTotalIncome()` and `getTransactionsByCategory()` describe what each method does.

I have tried to use descriptive names instead of short or unclear names. For example, `totalExpenses` is clearer than a name such as `x`.

One possible improvement is that some names could be made more consistent if the module is expanded in the future. I would review the naming again when adding new functionality.

| Identifier | Rule from Clean Code | Reflection |
|---|---|---|
| `Budget` | Use Problem Domain Names | `Budget` clearly describes the main object in the module. A programmer can understand that the class represents the budget without reading the implementation. |
| `Transaction` | Use Problem Domain Names | `Transaction` is a common concept in the problem domain of personal budgeting. The name makes it clear that the object represents one financial transaction. |
| `getBalance` | Intention-Revealing Names | The name clearly reveals what the method does. It returns the current balance of the budget. |
| `getTransactionsByCategory` | Pick One Word per Concept | The method uses consistent terminology with `transactions` and `category`. The name also clearly describes that transactions are selected based on their category. |
| `getLargestExpense` | Avoid Disinformation | The name does not suggest that the method does something different from what it actually does. It clearly indicates that the method finds the largest expense. |


### Chapter 4 Reflection

I have learned that names are important because they help other programmers understand the code without having to read the implementation first. During the project, I have tried to use names that describe the purpose of classes, methods and variables clearly. For example, `getTransactionsByCategory()` tells the programmer what information the method returns and how the transactions are selected.

I also noticed that some names could be more descriptive. For example, `id` could be changed to `transactionId` because this makes it clearer what the ID belongs to. I think good names should be meaningful and simple, but they should also give enough information to understand the code. I would review the names again if I expanded the module in the future.

| Method | Rule from Clean Code | Reflection |
|---|---|---|
| `addTransaction` | Small Functions | The method has one main responsibility: adding a transaction. It also validates the transaction type and handles the amount before creating the transaction. It is one of the longer methods in the module, so it could potentially be divided into smaller methods in the future. |
| `getLargestExpenseCategory` | One Thing | The method has one clear responsibility: finding the category with the largest total. It uses `getCategorySummary()` to get the category totals instead of calculating them again. |
| `getBalance` | Small Functions | The method is relatively short and has one clear purpose: calculating the current balance. It goes through the transactions and adds or subtracts the amounts depending on the transaction type. |
| `getCategorySummary` | One Thing | The method creates a summary of transaction amounts grouped by category. It has one main responsibility, but the repeated access to `categorySummary` makes the method slightly harder to read. |
| `getTotalExpenses` | Small Functions | The method is short and has one clear purpose. It goes through the transactions and calculates the total expenses. I do not think it needs to be divided into smaller methods. |

### Reflection on Method Length

I think a good method should have a reasonable length and be easy to understand. It should be clear what the method does and its name should describe its purpose. A meaningful name helps other programmers understand the code without having to read the whole method. I also think that shorter is not always better if making a method shorter would make it less clear. The most important thing is that the method is understandable and not unnecessarily complicated.

### Chapter 7–11 Reflection

I have learned that methods should be small and have a clear purpose. Looking at my own code, I can see that most of my methods do one main thing, such as calculating the total expenses or finding the largest expense. I have also learned that the number of arguments should be considered when designing a method. For example, `getTransactionsByDateRange()` needs both a start date and an end date because both are required to describe the range.

The idea of One Thing was useful when looking at my own methods. I think `getLargestExpense()` follows this idea because it only searches for the largest expense. `getCategorySummary()` is also focused on one task, although I think it could be made easier to read in the future.

I have also learned that methods should be predictable and easy for another programmer to understand. This is something I want to think about when I add more functionality to the module.

### Overall Reflection

During the project, I have started to think more about code quality and how other programmers can understand my code. At the beginning, I mainly focused on making the code work. During the project, I have learned that it is also important to think about names, method responsibilities and how easy the code is to follow.

One thing I have improved is my use of descriptive names. For example, I understand why `getTransactionsByCategory()` is clearer than a more general name such as `getTransactions()`. I have also become more aware that methods should have a clear responsibility. Looking at my own code has helped me identify areas that could be improved, such as using a more descriptive name than `id`.

I have also learned that code does not have to be perfect to be understandable. It is important that another programmer can understand what the code does and how to use the module. In the future, I want to think about code quality while writing the code instead of only reviewing it afterwards.

## 4. Writing a Module

Writing a module for other programmers was different from writing an application for end users. I had to think more about how another programmer would use the code and what information they would need in order to understand the module. This made the README and the method names more important because there is no graphical interface explaining how the module works.

I also had to think about what the module should and should not do. BudgetManager is intended to provide functionality for managing budget transactions, but it does not provide a user interface, database or bank connection. The programmer using the module provides the transaction data.

The USP did not change significantly during the project. The main idea was from the beginning to create a simple JavaScript module for programmers to manage income and expenses. During the development, I added more functionality such as filtering transactions, category summaries and finding the largest expense category. These additions expanded the functionality of the module, but they did not change its main purpose.

## AI Collaboration

I used AI as a sounding board during the development of the module. I used it to get ideas, understand different steps, decide what to work on next, troubleshoot problems and ask questions.

It was important to me that I learned the code myself instead of receiving the complete solution directly. I therefore used AI more like a teacher who could guide me and help me understand the problems step by step. I wanted to understand why the code worked and be able to explain the code myself.

I used AI differently in this laboratory compared with laboratory 1. Since this was a larger module, I used AI more for discussing design decisions, testing and code quality. I also used it to review my code and help me identify possible improvements. At the same time, I tried to avoid using AI to write complete solutions because I wanted to understand and be able to explain the code myself.