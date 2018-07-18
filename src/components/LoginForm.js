// https://www.youtube.com/watch?v=tIajENrOJ0o
// Inspired this Login Form.
import React from "react";
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login'
import React, { connect } from 'react-redux';
import React, { login } from '../../actions/login';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    isValid() {
      const { errors, isValid } = validateInput(this.state);
      if(!isValid) {
        this.setState( { errors });
      }
      return isValid;
    }

    onSubmit(e) {
      e.preventDefault();
      if (this.isValid()) {
        this.setState( { errors: {}, isLoading: true });
        this.props.login(this.state).then(
          (res) => this.context.router.push('/'),
          (err) => this.setState( { errors: err.data.errors, isLoading: false })
        )
      }
    }

    onChange(e) {
      this.setState( { [e.target.name] : e.target.value})
    }

  }
  render() {
    // deconstruct variables from state.
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <TextFieldGroup
          field="identifier"
          label="Email / Username"
          value={identifier}
          errors={errors.identifier}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          errors={errors.password}
          onChange={this.onChange}
          type="password"
        />
      <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div> 
      </form>
    )
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

// connecting LoginForm with redux
export default connect(null, { login }) (LoginForm);