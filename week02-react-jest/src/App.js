import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',
            firstName: 'unknown',
            lastName: 'unknown',
            street: 'unknown'
        };

    }

  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                  Nine: {this.state.nine}
              </p>
              <p className="App-intro">
                  firstName: {this.state.firstName}
              </p>
              <p className="App-intro">
                  lastName: {this.state.lastName}
              </p>
              <p className="App-intro">
                  street: {this.state.street}
              </p>

              <button className="elf" onClick={this.getNine}>Get Nine</button>
              <button className="setAddress" onClick={this.setAddress}>Set Address</button>
          </div>

      );
  }

    getNine = () => {
        this.setState({
            nine: '9'
        })
    };

    setAddress = () => {
        this.setState({
            firstName: 'Patty',
            lastName: 'Murray',
            street: '154 Russell Senate Office Building'
        })
    };
}

export default App;
