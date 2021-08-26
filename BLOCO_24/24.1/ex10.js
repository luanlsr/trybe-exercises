db.movies.updateOne({
  title: "Godzilla"
}, {
  $currentDate: {
    lastUpdated: {
      $type: "timestamp"
    },
  }
})