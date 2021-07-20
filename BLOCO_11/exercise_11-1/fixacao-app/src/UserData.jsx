// arquivo UserProfile.js
import React from 'react';
// import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { nome, idade, email, time, endereço, telefone } = this.props.xablau
    return (
      <div>
        <h1> {nome} </h1>
        <p> {idade} </p>
        <p> {email} </p>
        <p> {time} </p>
        <p> {endereço.rua} </p>
        <p> {endereço.numero} </p>
        <p> {endereço.cidade} </p>
        <p> {endereço.estado} </p>
        <p> {telefone} </p>
      </div>
    );
  }
}

export default UserProfile;