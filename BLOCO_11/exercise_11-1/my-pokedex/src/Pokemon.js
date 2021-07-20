import React, { Fragment, Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image} = this.props.xablau
    return(
      <Fragment>
      <div className="App">
        <h1>{ name }</h1>
        <h2>{ type }</h2>
        <h2>{ `${averageWeight.value} ${averageWeight.measurementUnit}` }</h2>
        <img src={image} alt={`imagem do ${name}`}></img>
      </div>
      </Fragment>
    )
  }
}

export default Pokemon;