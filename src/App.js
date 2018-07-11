// Stock Imports
import React, { Component } from 'react';
// React-Big-Calendar stuff.

import './App.css';
import logo from './poker-icon.png';
// import "react-big-calendar/lib/addsons/dragAndDrop/styles.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// Calendar.setLocalizer(BigCalendar.momentLocalizer(moment))
// const DnDCalendar = withDragAndDrop(Calendar);


class App extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
  };

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
        <DnDCalendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }

}

export default App;
