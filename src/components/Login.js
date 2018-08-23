import React, { Component } from "react";
// import { Link } from "react-router-dom";
import fire from "../config/Fire";

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => console.log(u))
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <h1 className="h3 mb-3 font-weight-normal">Please Sign In </h1>
            <label>Email Address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Email Here"
              // required
              // autofocus
            />
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />

            <button
              type="submit"
              onClick={this.login}
              className="btn btn-primary"
            >
              Login
            </button>
            <button
              onClick={this.signup}
              style={{ marginLeft: "25px" }}
              className="btn btn-success"
            >
              Sign Up
            </button>
            <p className="mt-5 mb-3 text-muted">"2018"</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

// {/* <div>
//   <body className="uk-height-1-1">
//     <div className="uk-flex uk-flex-center uk-flex-middle uk-background-secondary uk-height-viewport uk-light">
//       <div className="uk-position-bottom-center uk-position-small uk-visible@m">
//         {/* <span className="uk-text-small uk-text-muted">
//           © 2018 Company Name -
//           <a href="https://github.com/zzseba78/Kick-Off">
//             Created by KickOff
//           </a>{" "}
//           | Built with
//           <a
//             href="http://getuikit.com"
//             title="Visit UIkit 3 site"
//             data-uk-tooltip
//           >
//             <span data-uk-icon="uikit" />
//           </a>
//         </span> */}
//       </div>
//       {/* Form  */}
//       <div className="uk-width-medium uk-padding-small">
//         <form action="login-dark.html">
//           <fieldset className="uk-fieldset">
//             <legend className="uk-legend">Login</legend>
//             <div className="uk-margin">
//               <div className="uk-inline uk-width-1-1">
//                 <span
//                   className="uk-form-icon uk-form-icon-flip"
//                   data-uk-icon="icon: user"
//                 />
//                 <input
//                   value={this.state.email}
//                   onChange={this.handleChange}
//                   type="email"
//                   name="email"
//                   className="uk-input uk-form-large"
//                   placeholder="Email"
//                 />
//               </div>
//             </div>

//             <div className="uk-margin">
//               <div className="uk-inline uk-width-1-1">
//                 <span
//                   className="uk-form-icon uk-form-icon-flip"
//                   data-uk-icon="icon: lock"
//                 />
//                 <input
//                   value={this.state.password}
//                   onChange={this.handleChange}
//                   type="password"
//                   name="password"
//                   className="uk-input uk-form-large form-control"
//                   id="exampleInputPassword1"
//                   required
//                   placeholder="Password"
//                 />
//               </div>
//             </div>

//             <div className="uk-margin">
//               <input className="uk-checkbox" type="checkbox">
//                 Keep me logged in
//               </input>
//             </div>
//             <div className="uk-margin">
//               <button
//                 type="submit"
//                 onClick={this.login}
//                 className="uk-button uk-button-primary uk-button-primary uk-button-large uk-width-1-1"
//               >
//                 LOG IN
//               </button>
//             </div>
//           </fieldset>
//         </form>
//         <div>
//           <div className="uk-text-center">
//             <a
//               className="uk-link-reset uk-text-small"
//               data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small"
//             >
//               Forgot your password?
//             </a>
//           </div>
//           <div className="uk-margin-small-top" id="recover" hidden>
//             <form action="login-dark.html">
//               <div className="uk-margin-small">
//                 <div className="uk-inline uk-width-1-1">
//                   <span
//                     className="uk-form-icon uk-form-icon-flip"
//                     data-uk-icon="icon: mail"
//                   />
//                   <input
//                     className="uk-input"
//                     placeholder="E-mail"
//                     required
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="uk-margin-small">
//                 <button
//                   type="submit"
//                   className="uk-button uk-button-primary uk-button-primary uk-width-1-1"
//                 >
//                   SEND PASSWORD
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </body>
// </div> */}
