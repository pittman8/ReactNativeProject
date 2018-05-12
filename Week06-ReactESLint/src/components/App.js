import React, { Component } from 'react';
import '../App.css';
import Address from './Address';
import Header from './Header';
import GetFile from './GetFile';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <GetFile />
                <Address />
            </div>
        );
    }
}

export default App;
