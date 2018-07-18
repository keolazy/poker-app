import React from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarComponent from './components/CalendarComponent';


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Lander />
        <CalendarComponent />
        <div className="container">
          <Lander />
          <div className="row">
            <div className="col-xs-6">
              <h1>Profile Modal Component</h1>
            </div>
            <div className="col-xs-6">
              <h1>Activity Component</h1>
            </div>
          </div>
          <div className="row">
            <div className='custom-footer'>
              <h6>Insert Footer Component</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

exports default Dashboard;