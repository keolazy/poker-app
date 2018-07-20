import React from "react";
import "./App.css";
// import logo from "./poker-icon.png";
import Lander from "./components/Lander";
import Navigation from "./components/Navigation";

import UserSignup from "./components/UserSignup";
import Slider from "./components/Slider";
// import CalendarComponent from "./components/CalendarComponent";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>

        <Lander>
          <Navigation />
        </Lander>

        <div className="App-signup">
          <UserSignup />
        </div>
        <div className="App-slider">
          <Slider />
        </div>

        <div className="App-footer" />
      </div>
    );
  }
}

export default App;
