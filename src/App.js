// Stock Imports
import React, { Component } from 'react';
import './App.css';
import logo from './poker-icon.png';
import Jumbotron from './components/Jumbotron'



// Implement Navigation Routing. 
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Poker-App</h1>
        </header>
        <p className="App-intro">
          Add Components appropriately to <code>src/App.js</code> and save to reload.
        </p>
        <div className="tempBox">
          <h1>Jumbotron goes here.</h1>
          <Jumbotron image={this.props.image} />
        </div>
        <div className="row">
          <div className="tempBox">
            <h1>Calendar Component goes here.</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <h1>User-Card Profile Component goes here.</h1>
            </div>
            <div className="col-xs-6">
              <h1>Other Dashboard Component goes here.</h1>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
