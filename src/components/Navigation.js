import React from "react";
// import { NavLink} from "react-douter-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div class="uk-position-relative">
          <img src="../docs/images/light.jpg" alt=""></img>
          <div class="uk-position-top">
              <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                  <div class="uk-navbar-left">
                      <ul class="uk-navbar-nav">
                          <li class="uk-active"><a href="#">Active</a></li>
                          <li><a href="#">Item</a></li>
                          <li>
                              <a href="#">Parent</a>
                              <div class="uk-navbar-dropdown">
                                  <ul class="uk-nav uk-navbar-dropdown-nav">
                                      <li class="uk-active"><a href="#">Active</a></li>
                                      <li><a href="#">Home</a></li>
                                      <li class="uk-nav-header">Header</li>
                                      <li><a href="#">Item</a></li>
                                      <li><a href="#">Item</a></li>
                                      <li class="uk-nav-divider"></li>
                                      <li><a href="#">Item</a></li>
                                  </ul>
                              </div>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
      </div>      
    )
  }
}

export default Navigation;
