import React, { Component } from 'react';
import './App.css';

class Address extends Component {
    constructor() {
        super();
        this.state = {
            firstName: 'unknown',
            lastName: 'unknown',
            street: 'unknown',
            boxNumber: 'unknown',
            city: 'unknown',
            state: 'unknown',
            zipCode: 'unknown'
        };

    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    firstName: {this.state.firstName}
                </p>
                <p className="App-intro">
                    lastName: {this.state.lastName}
                </p>
                <p className="App-intro">
                    street: {this.state.street}
                </p>
                <p className="App-intro">
                    boxNumber: {this.state.boxNumber}
                </p>
                <p className="App-intro">
                    city: {this.state.city}
                </p>
                <p className="App-intro">
                    state: {this.state.state}
                </p>
                <p className="App-intro">
                    zipCode: {this.state.zipCode}
                </p>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>

        );
    }

    setAddress = () => {
        this.setState({
            firstName: 'Patty',
            lastName: 'Murray',
            street: '915 Second Avenue',
            boxNumber: '2988',
            city: 'Seattle',
            state: 'Washington',
            zipCode: '98174'
        })
    };
}

export default Address;