import React, { Component } from 'react';
// logo.svg contains premade code for the spinning icon.
import logo from './poker-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Poker-App</h1>
        </header>
        <p className="App-intro">
          Start adding Components in ./src/App.js
        </p>
      </div>
    );
  }
}

export default App;
