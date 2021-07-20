const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name} </br> ${img.outerHTML}`;

  ul.appendChild(li);
};

// const fetchPokemon = () => {
//   fetch('https://pokeapi.co/api/v2/pokemon/squirtle') // Promise
//     .then((response) => { // Resposta completa do servidor
//       response.json().then((data) => {
//         appendPokemon(data);

//         fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur') // Promise
//         .then((response) => { // Resposta completa do servidor
//           response.json().then((data) => {
//             appendPokemon(data);

//             fetch('https://pokeapi.co/api/v2/pokemon/pikachu') // Promise
//             .then((response) => { // Resposta completa do servidor
//               response.json().then((data) => {
//                 appendPokemon(data);

//                 fetch('https://pokeapi.co/api/v2/pokemon/rattata') // Promise
//                 .then((response) => { // Resposta completa do servidor
//                   response.json().then((data) => {
//                     appendPokemon(data);
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
// };

// JSON - JavaScript Object Notation

// const requestPokemon = (callback) => {
//   setTimeout(() => {
//     callback('Squirtle');
//   }, 3000);
// };

// const getPokemon = (pokemonName, callback) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)  // retorna uma promise
//     .then((response) => {
//       response.json().then((data) => {
//         appendPokemon(data);
//         callback ? callback() : undefined;
//       });
//     });
// };

// const fetchPokemon = () => {
//   getPokemon('squirtle', 
//     getPokemon('pikachu'),
//       getPokemon('rattata'),
//     );
// };

const getPokemonPromise = (pokemonName) => {
  return new Promise((resolve, reject) => {
      fetch("http://www.omdbapi.com/?t=matrix")
      .then(response => {
        console.log(response);
        resolve(response)
      })
      .catch(err => {
        console.error(err);
      });
  })
}  

const fetchPokemon = async () => {
  try {
    await getPokemonPromise('pikachu');
    await getPokemonPromise('bulbasaur');
    await getPokemonPromise('rattata');
    await getPokemonPromise('charizard');
  } catch (error) {
    console.log(error);
  }

  // getPokemonPromise('pikachu')
  //   .then(() => getPokemonPromise('bulbasaur'))
  //   .then(() => getPokemonPromise('rattata'))
  //   .then(() => getPokemonPromise('charizard'))
  //   .catch((error) => console.log(error));
};

window.onload = fetchPokemon();
