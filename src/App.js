// Stock Imports
import React, { Component } from 'react';
import './App.css';
import logo from './poker-icon.png';
// import Jumbotron from './components/Jumbotron'
import CalendarComponent from './components/CalendarComponent';
import "react-big-calendar/lib/css/react-big-calendar.css";



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
        </div>
        <CalendarComponent />
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
