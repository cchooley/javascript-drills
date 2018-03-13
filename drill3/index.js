var register = {
  transactions: []
};

function addTransaction(transaction) {
  register.transactions.push(transaction);
}

function getTransactionsBySalesperson(name) {                 // declare function that takes salesperson name
  var cashierSales = [];
  for (var i = 0; i < register.transactions.length; i++) {  // loop through array to find trans. object
    var totalSales = register.transactions[i]
    if (name === totalSales.cashier) {
      cashierSales.push(totalSales);
    }
  }
  return cashierSales;
}

function removeLastTransaction() {
  register.transactions.pop();
}

function reset() {
  register.transactions = [];
}

module.exports = {
    // Uncomment these as you define them
    register,
    addTransaction,
    getTransactionsBySalesperson,
    removeLastTransaction,
    reset,
};
