import React, { Component } from 'react';
import { Route, Switch, NavLink} from 'react-router-dom';
import loading from './img/loading.png';
import './App.css';
import Eye from './Eye.js';
import ServerList from './ServerList.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    };
  }

  componentDidMount () {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading === true) {
      return (
          <div className="App-body App-body-loading">
            <Eye alt="animated eye"></Eye>
            <h1>
              Welcome
            </h1>
            <img src={loading} className="App-loading" alt="spinning loading symbol" />
          </div>
      )
    } else {
      return (
          <div className="App-body">
            <div class="App-header">
              <h1>
                IRIS
              </h1>
              <p>
                Create account
              </p>
            </div>
            <div class="App-main">
              <ServerList></ServerList>
            </div>
          </div>
      )
    }
  }
}

export default App;
