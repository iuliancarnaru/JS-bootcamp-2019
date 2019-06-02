let myAccount = {
  name: "Iulian Carnaru",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  // account = {}; // <--- we break the binding with the myAccount object
  account.expenses = account.expenses + amount;
  //console.log(account);
};

let addIncome = function(account, amount) {
  account.income = account.income + amount;
};

let resetAccount = function(account) {
  account.income = 0;
  account.expenses = 0;
};

let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${
    account.income
  } in income. $${account.expenses} in expenses`;
};

addExpense(myAccount, 12.5);
addIncome(myAccount, 1200);
addExpense(myAccount, 450);

console.log(getAccountSummary(myAccount));

resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

// When we pass an object in as a function parameter, we don't create a clone of that oject is actualy a reference to actual object (the same point in memory)
// When we pass an object in as a function parameter, we can manipulate it's properties (the object originaly passed in), BUT if we assign a new value to that parameter (like an empty object) we break that binding completely
