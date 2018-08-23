import React, { Component } from "react";
import fire from "../config/Fire";

class Login2 extends Component {
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
      <div class="uk-height-1-1">
        <div class="uk-flex uk-flex-center uk-flex-middle uk-background-secondary uk-height-viewport uk-light">
          <div class="uk-position-bottom-center uk-position-small uk-visible@m">
            <span class="uk-text-small uk-text-muted">
              © 2018 Company Name -
              <a href="https://github.com/zzseba78/Kick-Off">
                Created by KickOff
              </a>{" "}
              | Built with
              <a
                href="http://getuikit.com"
                title="Visit UIkit 3 site"
                // target="_blank"
                data-uk-tooltip
              >
                <span data-uk-icon="uikit" />
              </a>
            </span>
          </div>
          <div class="uk-width-medium uk-padding-small">
            <form action="login-dark.html">
              <fieldset class="uk-fieldset">
                <legend class="uk-legend">Login</legend>
                <div class="uk-margin">
                  <div class="uk-inline uk-width-1-1">
                    <span
                      class="uk-form-icon uk-form-icon-flip"
                      data-uk-icon="icon: user"
                    />
                    <input
                      value={this.state.email}
                      onChange={this.handleChange}
                      type="text"
                      name="email"
                      class="uk-input uk-form-large form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      required
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div class="uk-margin">
                  <div class="uk-inline uk-width-1-1">
                    <span
                      class="uk-form-icon uk-form-icon-flip"
                      data-uk-icon="icon: lock"
                    />
                    <input
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="password"
                      name="password"
                      class="uk-input uk-form-large form-control"
                      id="exampleInputPassword1"
                      required
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div class="uk-margin">
                  <label>
                    <input class="uk-checkbox" type="checkbox" /> Keep me logged
                    in
                  </label>
                </div>
                <div class="uk-margin">
                  <button
                    type="submit"
                    onClick={this.login}
                    class="uk-button uk-button-primary uk-button-primary uk-button-large uk-width-1-1"
                  >
                    LOG IN
                  </button>
                </div>

                <div class="uk-margin">
                  <button
                    type="submit"
                    onClick={this.signup}
                    class="uk-button uk-button-secondary uk-button-secondary uk-button-large uk-width-1-1"
                  >
                    SIGNUP
                  </button>
                </div>
              </fieldset>
            </form>
            <div>
              <div class="uk-text-center">
                <a
                  class="uk-link-reset uk-text-small"
                  data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small"
                >
                  Forgot your password?
                </a>
              </div>
              <div class="uk-margin-small-top" id="recover" hidden>
                <form action="login-dark.html">
                  <div class="uk-margin-small">
                    <div class="uk-inline uk-width-1-1">
                      <span
                        class="uk-form-icon uk-form-icon-flip"
                        data-uk-icon="icon: mail"
                      />
                      <input
                        class="uk-input"
                        placeholder="E-mail"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="uk-margin-small">
                    <button
                      type="submit"
                      class="uk-button uk-button-primary uk-button-primary uk-width-1-1"
                    >
                      SEND PASSWORD
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login2;
