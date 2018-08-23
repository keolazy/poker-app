// Firebase configurated Login + Routing
import React, { Component } from "react";
import fire from "../config/Fire";

class Home extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.state = {
      username: ""
    };
  }

  showObject() {
    console.log(`props passed to this component should show here: `);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="col-md-6">
        <h1>Welcome Home {this.props.email}</h1>
        <button onClick={this.showObject}>Show Object</button>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
