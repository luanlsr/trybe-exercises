import { Component } from "react";

class Div extends Component {
  render() {
    const {name, email, password, onChange} = this.props

    let error = undefined
    name.length > 10 ? error = 'maior que 10' : error = ''
    return (
      <div>
        <div className="input-group">
          {/* <label>Nome</label> */}
          <input
            placeholder='Nome do usuário'
            value={name}
            type="text"
            onChange={onChange}
            name="name"
          />
          <span>{error ? error : ''}</span>
        </div>
        <div className="input-group">
          {/* <label>Email</label> */}
          <input
            placeholder="Endereço de e-mail"
            value={email}
            type="text"
            onChange={onChange}
            name="email"
          />
          {/* <span>{errorName}</span> */}
        </div>
        <div className="input-group">
          {/* <label>Password</label> */}
          <input 
            placeholder="Senha"
            value={password} 
            type="password" 
            onChange={onChange}
            name="password"
          />
          {/* <span>{errorName}</span> */}
        </div>
      </div>
    );
  }
}

export default Div;