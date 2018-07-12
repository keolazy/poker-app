import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class CalendarComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.event = 
  // }


  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title",
        startTime: '7:00pm',
        headerImage: 'headerImage goes here',
        iconImage: 'url2 goes here',
        description: 'description goes here',
        showEventPopup: false,
      }
    ]
  };

  // Figure out what methods I need for this particular app.
  // Add event. Delete Event. Read Event. Edit Event.
  // RSVP to event. Pass this.props data to users & admin.


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

// API Notes:
// events - array of event objects to display on calendar.
// 