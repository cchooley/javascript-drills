var register = {
  transactions: []
};

function addTransaction(transaction) {
  register.transactions.push(transaction);
};


function getTotal() {
  var totalPrice = 0;
  for (var i = 0; i < register.transactions.length; i++) {
    register.transactions[i];
    for (var j = 0; j < register.transactions[i].items.length; j++) {
      totalPrice += register.transactions[i].items[j].price * register.transactions[i].items[j].quantity;
   }
  }
  return totalPrice;
}

function getFormattedTotal() {
  var formattedPrice = getTotal();
  return formattedPrice.toFixed(2);
}

function reset() {
  register.transactions = [];
};


  module.exports = {
  // Uncomment these as you define them
  register,
  addTransaction,
  getTotal,
  getFormattedTotal,
  reset

};
