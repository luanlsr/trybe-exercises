import React from 'react';
import cores from './cores'
import './App.css';


class App extends React.Component {
  constructor (){
    super()

    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeClicks: 0,
      color: '',
    }
    this.resetValue = this.resetValue.bind(this)
    this.state = {
      numeroDeClicks: 0,
      color: '',
    }

    this.mudarCor = this.mudarCor.bind(this)
    this.state = {
      numeroDeClicks: 0,
      color: '',
    }
  }

  mudarCor(event) {
    this.setState({
      color: event.target.value,
    })
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeClicks:estadoAnterior.numeroDeClicks + 1,
    }))
  }

  resetValue() {
    this.setState(() => ({
      numeroDeClicks: 0,
      color: 'black'
    }))
  }
  
  render() {
    const inputColor = cores.filter(cor => cor.color.includes(this.state.color))
    const cor = inputColor.map((cor) => cor.value )
    return(
      <div className="container">
        <h1 style={{color: cor}}>Escolha uma cor</h1>
        <input onChange={this.mudarCor} />
        <button className="botao1" style={{backgroundColor: cor}} onClick={this.handleClick}>{this.state.numeroDeClicks}</button>
        <button className="botao2" onClick={this.resetValue}>RESET</button>
      </div>

    ) 
  }
}

export default App;

// import React from 'react'
// import './App.css';
// import cores from './cores';



// class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       color: ''
//     }

//     this.mudarLista = this.mudarLista.bind(this)
//   }

//   mudarLista(event) {
//     this.setState({ color: event.target.value })
//   }

//   render() {

//     const inputColor = cores
//     .filter((cor) => cor.color
//       .includes(this.state.color))

//     console.log(this.state.color);
//     return (
//       <div className="App">
//         <input onChange={ this.mudarLista }/>
//         <h1>{ this.state.color }</h1>
//         <ul>
//           { inputColor.map((cor) => <li style={ { color: cor.value } }>{ cor.color }</li>) }
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;
