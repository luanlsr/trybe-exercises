const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name} </br> ${img.outerHTML}`;

  ul.appendChild(li);
};

const getPokemonPromise = async () => {
  const response = await fetch("https://dragon-ball-api.herokuapp.com/api/character")
  const movies = await response.json()
    console.log(movies);
    
}  

getPokemonPromise();
