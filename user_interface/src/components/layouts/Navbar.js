import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container">
            
            <ul className="nav navbar-nav">
              <li><Link to="/">Simply Hire</Link></li>
              <li><Link to="#">Developers</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/register">Sign Up</Link></li>
              <li><Link to="/login">Log In</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
