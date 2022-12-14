import React, { Component } from 'react';
import loading from './img/loading.png';
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
            <Eye></Eye>
            <h1>
              Welcome
            </h1>
            <img src={loading} className="App-loading" alt="spinning loading symbol" />
          </div>
      )
    } else {
      return (
          <div className="App-body">
            <p>
              Welcome
            </p>
          </div>
      )
    }
  }
}

export default App;
