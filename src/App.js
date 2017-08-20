import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const helloWhale = <h2> Whale, hello </h2>;
      function formatName(user) {
          return user.firstName + ' ' + user.lastName
      }
      const user = {
          firstName: 'Melis',
          lastName: 'Oner',
      };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {helloWhale}<h2>{formatName(user)} ! </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
