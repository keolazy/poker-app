import React, { Component } from "react";
import "./App.css";
import fire from "./config/Fire";
// import Login from "./components/Login";
// import Home from "./components/Home";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import HomeTest from "./components/Home";
import About from "./components/About";
import Messages from "./components/Messages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }
  // Insert Auth Logic Below
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={HomeTest} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// // return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
