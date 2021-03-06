import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar.js';
import Footer from './components/layouts/Footer.js';
import Landing from './components/layouts/Landing.js';
import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Landing}/>
        <div className="container">
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
