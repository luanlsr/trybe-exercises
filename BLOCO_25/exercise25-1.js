db.transactions.aggregate([{
  $match: {
    from: "Lisa Simpson"
  }
}]);


db.transactions.aggregate([{
  $match: {
    $or: [
      {
        value: {$lt: 700, $gt: 6000}
      },
      {
        from: "Lisa Simpson"
      }
    ]
  }
}]);

db.transactions.aggregate([{
  $match: {
    value: { $gt: 1000}
  },
},
{$limit: 3},
]
).sort({value: 1});
