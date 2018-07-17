import React from 'react';
import './App.css';
import logo from './poker-icon.png';
import Lander from './components/Lander'
import CalendarComponent from './components/CalendarComponent';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {BrowserRouter} from 'react-router-dom';

// Implement Navigation Routing. 
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Poker-App</h1>
        </header>
        <div className="tempBox">
          <h6>Home - Login - Signup - Locations - Contact Us</h6>
        </div>
        <div className="App-lander">
          <Lander />
        </div>
        <CalendarComponent />
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <h1>Profile Modal Component</h1>
            </div>
            <div className="col-xs-6">
              <h1>Activity Component</h1>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
