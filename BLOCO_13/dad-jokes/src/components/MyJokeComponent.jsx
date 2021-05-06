import React, { Component } from 'react';
import DadJoke from './DadJoke'

export default class MyJokeComponent extends Component {
  constructor() {
    super()
    console.log('constructor');
    
    this.state = {
      piada: 'Minha piada'
    }
  }

  componentDidMount = () => {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return(
      <DadJoke />
    )
  }

}
