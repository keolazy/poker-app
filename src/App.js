// Stock Imports
import React, { Component } from 'react';
import './App.css';
import logo from './poker-icon.png';

// Implement Navigation Routing. 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Poker-App</h1>
        </header>
        <p className="App-intro">
          To get started, Add Components appropriately to <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
