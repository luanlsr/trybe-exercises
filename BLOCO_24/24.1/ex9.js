db.movies.update({
  title: "Godzilla"
}, {
  $max: {
    imdbRating: 8.6
  },
  $set: {
    "category.1": "thriller"
  }
})