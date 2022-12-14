import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              Welcome
            </h1>
          </header>
      )
    } else {
      return (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Welcome
            </p>
          </header>
      )
    }
  }
}

export default App;
