import React, { Component } from 'react';
import '../App.css';

class Address extends Component {
    constructor(props) {
        super(props);
        const address = this.props.addressList[0];
        this.state = {
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree,
            website: address.website
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
                    address: {this.state.address}
                </p>
                <p className="App-intro">
                    city: {this.state.city}
                </p>
                <p className="App-intro">
                    state: {this.state.state}
                </p>
                <p className="App-intro">
                    zip: {this.state.zip}
                </p>
                <p className="App-intro">
                    phone: {this.state.phone}
                </p>
                <p className="App-intro">
                    fax: {this.state.fax}
                </p>
                <p className="App-intro">
                    tollfree: {this.state.tollfree}
                </p>
                <p className="App-intro">
                    website: {this.state.website}
                </p>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>

        );
    }

    setAddress = () => {
        const address = this.props.addressList[1];
        this.setState({
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree,
            website: address.website
        })
    };
}

export default Address;