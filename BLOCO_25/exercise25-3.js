db.clients.aggregate([{
  $lookup: {
    from: "transactions",
    localField: "name",
    foreignField: "to",
    as: "clients"
  }
}]);

  db.clients.aggregate([{
      $lookup: {
        from: "transactions",
        localField: "name",
        foreignField: "to",
        as: "clients"
      }
    },
    {
      $match: {
        State: "Florida"
      }
    },
    {$unwind: "$clients"},
    {
      $project: {
        _id: 0,
        "clients.to": 1,
        "clients.value": 1
      }
    }]);