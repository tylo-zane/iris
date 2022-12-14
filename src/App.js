import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eye from './Eye.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    };
  }

  render() {
    if (this.state.loading === true) {
      return (
          <div className="App-body">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              Welcome
            </h1>
          </div>
      )
    } else {
      return (
          <div className="App-body">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Welcome
            </p>
          </div>
      )
    }
  }
}

export default App;
