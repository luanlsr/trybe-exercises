const getPokemon = (pokemonName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => {
    response.json().then((data) => {
      appendPokemon(data);
      callback();
    });
  });
};

const fetchPokemon = () => {
  getPokemon('squirtle')
};
///////////////////////////////////////


const getPokemon = (pokemonName) => {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      response.json().then((data) => {
        appendPokemon(data);
        callback();
      });
    });
  })
};

const fetchPokemon = () => {
  getPokemon('squirtle')
    .then(() => getPokemon('rattata'))
    .then(() => getPokemon('bulbasaur'))
    .then(() => getPokemon('charizard'))
    .catch((error) => console.log(error));
};


//////////////////////////////////////////
const fetchPokemon = async () => {
  try {
    await getPokemon('squirtle');
    await getPokemon('bulbasaur');
    await getPokemon('charizard');
  } catch (error) {
    console.log(error);
  }
};
