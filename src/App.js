import React, { Component } from "react";
import "./App.css";
import fire from "./config/Fire";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Home from "./components/Home";
// Navbar routing from tutorial
// import { Route, Link, Switch, Redirect } from "react-router-dom";
// import HomeTest from "./components/Home";
// import About from "./components/About";
// import Messages from "./components/Messages";

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
    return <div className="App">{this.state.user ? <Home /> : <Login2 />}</div>;
  }
}

export default App;
