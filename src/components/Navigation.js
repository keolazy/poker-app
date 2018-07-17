import React from "react";
// import { NavLink} from "react-douter-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="uk-position-relative">
          <img src="../docs/images/light.jpg" alt=""></img>
          <div className="uk-position-top">
              <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                  <div className="uk-navbar-left">
                      <ul className="uk-navbar-nav">
                          <li className="uk-active"><a href="#">Active</a></li>
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Parent</a></li>
                      </ul>
                  </div>
              </nav>
          </div>
      </div>      
    )
  }
}

export default Navigation;
