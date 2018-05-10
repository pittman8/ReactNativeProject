import React, { Component } from 'react';

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.debug = true;
        if (this.debug) {
            console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
        }
    }

    log(message, message2 = '', message3 = '') {
        if (!this.debug) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    render() {
        this.log('SHOW ADDRESS RENDER', this.props);
        return (
            <div className="App">
                <p className="App-intro">
                    First Name: {this.props.address.firstName}
                </p>
                <p className="App-intro">
                    Last Name: {this.props.address.lastName}
                </p>
                <p className="App-intro">
                    Address: {this.props.address.address}
                </p>
                <p className="App-intro">City: {this.props.address.city}</p>
                <p className="App-intro">State: {this.props.address.state}</p>
                <p className="App-intro">Zip: {this.props.address.zip}</p>
                <p className="App-intro">Phone: {this.props.address.phone}</p>
                <p className="App-intro">Fax: {this.props.address.fax}</p>
                <p className="App-intro">
                    Toll Free: {this.props.address.tollfree}
                </p>
                <button id="showAddressClick" onClick={this.props.setAddress}>
                    Show Address
                </button>
            </div>
        );
    }
}

export default AddressShow;
