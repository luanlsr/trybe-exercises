db.movies.update({title: "Batman"}, {$rename: {"budget": "estimatedBudget"}})