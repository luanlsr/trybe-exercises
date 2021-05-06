import React, { Component } from 'react';

export default class DadJoke extends Component {
  constructor() {
    super()

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: []
    }
  }

  fetchJoke = async () => {
    //lógica da fetch
    this.setState(
      {loading: true}, 
      async () => {
      const requestHeaders = {headers: {Accept: 'application/json'}}
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json()
      this.setState({
        loading: false,
        jokeObj: requestObject,
      })
    })
  }

  componentDidMount = () => {
    // 
    this.fetchJoke()
  }


  saveJoke = () => {
    //Salvando a piada no state com array de piadas 
    this.setState(({ storedJokes, jokeObj}) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))
    this.fetchJoke()
  }

  renderJokeElement = () => {
    return(
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>Salvar Piada!</button>
      </div>
    )
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <img width="50px" src="https://i.pinimg.com/originals/4d/72/60/4d7260d218aad66fd0d8aa84a6c2bbd7.gif" alt="loading"></img>
    return(
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        <p>{ loading ?  loadingElement : this.renderJokeElement() }</p>

      </div>
    )
  }

}
