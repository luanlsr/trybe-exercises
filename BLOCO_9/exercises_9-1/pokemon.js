const fetchPokemon = () => {
  requestPokemon ((pokemon) => {
    console.log(pokemon);
  })
};

const requestPokemon = (callback) => {
  setTimeout(() => {
    callback('Squirtle')
  }, 3000);
}

fetchPokemon();