import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0'
        };

    }

  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h1 className="App-title">Address Maven</h1>
              </header>
              <p className="App-intro">
                  Nine: {this.state.nine}
              </p>
              <button className="elf" onClick={this.getNine}>Get Nine</button>
              <hr>
              </hr>
          </div>
      );
  }

    getNine = () => {
        this.setState({
            nine: '9'
        })
    };

}

export default App;
