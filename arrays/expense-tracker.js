const account = {
  name: "Iulian Carnaru",
  expenses: [],
  income: [],

  addExpense: function(description, amount) {
    this.expenses.push({ description, amount });
  },

  addIncome: function(description, amount) {
    this.income.push({ description, amount });
  },

  getAccountSummary: function() {
    let totalExpenses = 0;
    let totalIncome = 0;

    this.expenses.forEach(function(expense) {
      totalExpenses += expense.amount;
    });

    this.income.forEach(function(income) {
        totalIncome += income.amount;
    });

    let balance = totalIncome - totalExpenses;

    return `${this.name} has a balance of ${balance}. ${totalIncome} in income and ${totalExpenses} in expenses.`;
  }
};

// Expense -> description:string , amount:number

// addExpense (description, amount)

// getAccountSummary --> total up all expenses: `Iulian Carnaru has $1250 in expenses`

account.addExpense("Rent", 950);
account.addExpense("Coffe", 2);

account.addIncome("Salary", 1000);

account.addExpense("Uber", 35);

console.log(account.getAccountSummary());
