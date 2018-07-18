import React from 'react';
import './App.css';
import logo from './poker-icon.png';
import Lander from './components/Lander'
import CalendarComponent from './components/CalendarComponent';
import Navigation from './components/Navigation';
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';
import "react-big-calendar/lib/css/react-big-calendar.css";
// import {BrowserRouter} from 'react-router-dom';


// Implement Navigation Routing. 
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navigation />
        </header>
        <Lander />
        <div className="App-signup">
          <UserSignup />
        </div>
        <div className="App-footer">
          
        </div>
    </div>
    );
  }
}

export default App;
