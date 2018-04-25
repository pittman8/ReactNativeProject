import React, { Component } from 'react';
import addresses from '../address-list';

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
    }

    log(message, message2 = '', message3 = '') {
        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    render() {
        if (!this.quiet) { this.log("SHOW ADDRESS RENDER"); }
        return (
            <div className="App">
                <p className="App-intro">
                    firstName: {this.props.address.firstName}
                </p>
                <p className="App-intro">
                    lastName: {this.props.address.lastName}
                </p>
                <p className="App-intro">
                    address: {this.props.address.address}
                </p>
                <p className="App-intro">
                    city: {this.props.address.city}
                </p>
                <p className="App-intro">
                    state: {this.props.address.state}
                </p>
                <p className="App-intro">
                    zip: {this.props.address.zip}
                </p>
                <p className="App-intro">
                    phone: {this.props.address.phone}
                </p>
                <p className="App-intro">
                    fax: {this.props.address.fax}
                </p>
                <p className="App-intro">
                    tollfree: {this.props.address.tollfree}
                </p>
                <p className="App-intro">
                    website: {this.props.address.website}
                </p>
                <button id="setAddress" onClick={this.props.onAddressChange}>Show Address</button>
            </div>
        );
    }

    onAddressChange = (event) => {
        this.addressIndex = 1;
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        })
    };
}

export default AddressShow;