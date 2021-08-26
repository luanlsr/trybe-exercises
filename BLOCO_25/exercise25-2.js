db.transactions.aggregate([{
  $group: {
    _id: "$bank"
  }
}]);

db.transactions.aggregate([{
  $group: {
    _id: "$bank",
    totalValue: {$sum: "$value"},
    count: {$sum: 1}
  },
}]);