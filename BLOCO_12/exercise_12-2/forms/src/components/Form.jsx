import React, { Component } from "react";
import Div from "./Div";
import PropTypes from 'prop-types'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      errorName: "",
    };
  }

  handleValue = (event) => {
    const { name, value } = event.target;

    if (value.lengh >   10 && name === "name") {
      this.setState({ errorName: "Não pode maior que 10" });
      return; //evita else
    }
    if (value.lengh > 10 && name === "senha") {
      this.setState({ errorName: "Senha inválida" });
      return; //evita else
    }

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name } = this.state;
    alert(`Pessoa ${name} cadastrada com sucesso`);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <img
          width="120px"
          src="https://logopng.net/wp-content/uploads/2020/07/logo-airbnb-png-1.png      "
          alt="airbnb-logo"
        ></img>
        <Div
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          onChange={this.handleValue}
          errorName={this.state.errorName}
        />
        <button className="button" type="submit">
          Cadastrar grátis
        </button>
        <hr className="hr"></hr>
        <h3>Fazer login</h3>
      </form>
    );
  }
}

Form.propTypes = {
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		errorName: PropTypes.string.isRequired,
} 

export default Form;
