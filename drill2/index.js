var register = {
  transactions: []
};

function addTransaction(transaction) {
  register.transactions.push(transaction);
};

function countSalesOfType(item) {
  var totalSales = 0; // set totalPrice variable to begin mathematical operator below
  for (var i = 0; i < register.transactions.length; i++) { // loop through the transactions array to identify items
    var sale = register.transactions[i];
    for (var j = 0; j < sale.items.length; j++) { // loop through the items array to identify name
      if (item === sale.items[j].description) {
        totalSales += sale.items[j].quantity; // update quantity
      }
    }
  }
  return totalSales;
};


function getTransactionsBetween(dateOne, dateTwo) { // declare a function that takes two dates
  firstDate = new Date(dateOne);                   // format first date argument

  secondDate = new Date(dateTwo);                  // format second date argument

  var transactionList = []                               // declare an array before for loop
  for (var i = 0; i < register.transactions.length; i++) { // iterate over transactions object
    var sale = register.transactions[i];
    if (firstDate < sale.date && secondDate > sale.date) { // if/else to compare date ranges. return items array if true, if not return false
      transactionList.push(sale);
    }
  }
  return transactionList;
};


function reset() {
  register.transactions = []
};


module.exports = {
  // Uncomment these as you define them
  register,
  addTransaction,
  countSalesOfType,
  getTransactionsBetween,
  reset

};
