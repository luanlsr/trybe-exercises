import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shape } from 'prop-types';
import './List.css'

class List extends Component {

  render() {
    const { list } = this.props;
    
    return(
      <div>
        <div>
          {list.map((element, index) => 
          <div className="tarefas">
            <p key={index}>{element}</p>
            <button type="button">Excluir</button>
          </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer,
})

List.propTypes = {
  list: shape,
}.isRequired

export default connect(mapStateToProps)(List)