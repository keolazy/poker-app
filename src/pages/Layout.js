import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  navigate() {
    console.log(this.props);
    this.props.history.pushState(null, '/');
  }
  render() {
    return (
      <div>
        <h1>RiverCityCardRoom.com</h1>
        {this.props.children}
        <Link to="home"><button class='btn btn-success'>home</button</Link>
        <Link to="login"><button class='btn btn-success'>login</Link></button></Link>
        <Link to="signup"><button class='btn btn-success'>signup</Link></button></Link>
        <button onClick={this.navigate.bind(this)}>Home </button>
      </div>
    );
  }
}