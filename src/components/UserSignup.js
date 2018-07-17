// https://www.youtube.com/watch?v=HuPTBtEa-qk
// Used this video as reference.
import React from "react";
// import { firebaseApp } from '../firebase';
// Use HEROKU instead.


class UserSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signUp() {
    console.log('this.state', this.state)
    // Using ES6 to declare two variables from this.state object. 
    const { email, password } = this.state;
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            style={{marginRight: '5px'}}
            placeholder='email'
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className='form-control'
            type='password'
            style={{marginRight: '5px'}}
            placeholder='password'
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type='button'
            onClick={() => this.signUp()}
          > 
          Sign Up
          </button>
        </div>
        {/* <div>{this.state.error.message} </div> */}
      </div>
    )
  }
}

export default UserSignup;