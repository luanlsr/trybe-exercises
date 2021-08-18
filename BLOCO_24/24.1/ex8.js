db.movies.update({
  title: "Home Alone"
}, {
  $min: {
    budget: 5
  }
})