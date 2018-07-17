import React from "react";
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login.js'

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
    }

    isValid() {
      const {errors, isValid } = validateInput(this.state);
      if(!isValid) {
        this.setState( {errors });
      }
      return isValid;
    }

    this.onSubmit(e) {
      e.preventDefault();
      if(this.isValid() {

      })
    }

    this.onChange(e) {
      this.setState( { [e.target.name] : e.target.value})
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  render() {
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <form>
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
    )
  }
}



export default UserLogin;