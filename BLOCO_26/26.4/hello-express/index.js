// const express = require('express');

// const app = express(); // 1

// app.get('/', handleHelloWorldRequest); // 2

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Hello, world!'); 
// }

/* index.js */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const cors = require('cors');

app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 20.0, waitTime: 25 },
];

const sortedRecipes = recipes.sort((a,b) => {
  if(a.name > b.name){
    return 1
  }
  if(a.name < b.name){
    return -1
  }
  return 0
})

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const sortedDrinks = drinks.sort((a,b) => {
  if(a.name > b.name){
    return 1
  }
  if(a.name < b.name){
    return -1
  }
  return 0
})


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/recipes', getRecipes);

function getRecipes(req, res) {
  res.json(sortedRecipes);
};

app.get('/drinks', getDrinks);

function getDrinks(req, res) {
  res.json(sortedDrinks);
};

app.get('/recipes/search', getRecipesSearch);

function getRecipesSearch (req, res) {
  const { name } = req.query;
  console.log(name);
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
};

app.get('/prices/search', getPricesSearch)

function getPricesSearch (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) || r.price <= parseInt(maxPrice) || r.price >= parseInt(minPrice));
  res.status(200).json(filteredRecipes);
};


// fetch('http://localhost:3001/recipes')
// .then(resp => resp.json())
app.get('/drinks/search', getDrinksSearch);

function getDrinksSearch (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((r) => r.name.includes(name));
  res.status(200).json(filteredDrinks);
};

app.post('/recipes', getRecipesBody);

function getRecipesBody (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
}

app.post('/drinks', getDrinksBody);

function getDrinksBody (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price});
  res.status(201).json({ message: 'Drink created successfully!'});
}

app.get('/recipes/:id', getRecipesId);

function getRecipesId(req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
}

app.get('/drinks/:id', getDrinksId);

function getDrinksId (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(drink);
}

app.get('/validateToken', validaToken)

function validaToken (req, res) {
  const { id, nome, preco } = req.body;
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})

  res.status(200).json({message: 'Valid Token!'})
};

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

// fetch(`http://localhost:3001/recipes/2`, {
//   method: 'PUT',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Macarrão ao alho e óleo',
//     price: 40
//   })
// });

// // Requisição do tipo DELETE
// fetch(`http://localhost:3001/recipes/4`, {
//   method: 'DELETE',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }
// });