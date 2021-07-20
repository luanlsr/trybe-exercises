import React, { Component } from 'react'
import './App.css';
import Home from './components/MyHomepage'
import BrowserRouter from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </div>
    );
  }
}
