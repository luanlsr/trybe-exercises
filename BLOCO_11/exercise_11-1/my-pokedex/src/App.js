import React, { Component } from 'react';
import './App.css';
import pokemons from './data'
import Pokemon from './Pokemon'
// import Xablau from './Xablau'


class App extends Component {
  constructor(){
    super()

    this.filterPokemon = this.filterPokemon.bind(this)
    this.state = {
      pokemonEscolhido: ''
    }
  }

  filterPokemon(event) {
    this.setState({
      pokemonEscolhido: event.target.value,
    })
  }


  render() {
    const pokeFilter = pokemons.filter((pokemon) => pokemon.name.includes(this.state.pokemonEscolhido));
    const pokeMap = pokeFilter.map(poke => <Pokemon xablau={ poke } />)
    return (
      <>
        <input onChange={this.filterPokemon}></input>
        {pokeMap}
        {/* <Xablau /> */}
      </>
    );
  }
}

export default App;
