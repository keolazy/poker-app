import React from "react";
// import { NavLink} from "react-douter-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="uk-position-relative">
          <div className="uk-position-top">
              <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                  <div className="uk-navbar-right">
                      <ul className="uk-navbar-nav">
                          <li className="uk-active"><a href="#">Home.</a></li>
                          <li><a href="#">Signup.</a></li>
                          <li><a href="#">Login.</a></li>
                          <li><a href="#">Contact.</a></li>
                      </ul>
                  </div>
              </nav>
          </div>
      </div>      
    )
  }
}

export default Navigation;
