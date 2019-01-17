import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h2>Welcome to Simply Hire</h2>
        <p>We've got expert advice, best practices, and tools to <br />help you start, manage and grow your career.</p>
        <Link to="/register" className="btn btn-dark" type="button">Sign Up</Link>
        {' '}
        <Link to="/login" className="btn btn-dark">Log In</Link>
      </div>
    )
  }
}

export default Landing;

