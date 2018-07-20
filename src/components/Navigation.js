import React from "react";
// import { NavLink} from "react-douter-dom";
// import Route from "react-router-dom/Route";
// import { Router, Route, broswerHistory } from "react-router";
// import { Link } from "react-router";

class Navigation extends React.Component {
  render() {
    return (
      <div className="uk-position-relative">
        <div className="uk-position-right">
          <nav className="uk-navbar-container uk-navbar-transparent">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav" color="red">
                <li className="uk-active">
                  <a href="/">Home.</a>
                </li>
                <li color="#2d2d2d">
                  <a href="/signup">Signup.</a>
                </li>
                <li color="#2d2d2d">
                  <a href="/login">Login.</a>
                </li>
                <li color="#2d2d2d">
                  <a href="/contact">Contact.</a>
                </li>
                <li color="#2d2d2d">
                  <a href="/dashboard">Dashboard.</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
