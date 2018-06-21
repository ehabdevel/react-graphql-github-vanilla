import React, { Component } from 'react';
import logo from '../logo.svg';
import Org from './Org'

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the React GraphQL GitHub Client</h1>
        </header>
        <div className="App-intro">
          <Org />
        </div>
      </div>
    );
  }
}

export default App;
