import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";



Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class CalendarComponent extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div>
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default CalendarComponent;