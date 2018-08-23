import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Navigation />
        </header>
        <Lander>
          <Navigation />
        </Lander>
        <div className="App-signup">
          <UserSignup />
        </div>
      </div>
    );
  }
}

export default Welcome;
