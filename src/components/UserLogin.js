import React from "react";
// import LoginForm from './components/LoginForm';
import LoginForm from "/Users/keolazy/Desktop/poker-app/src/components/UserLogin.js";

class UserLogin extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1>User Login Page</h1>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default UserLogin;
