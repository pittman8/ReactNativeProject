import React, { Component } from 'react';
import '../App.css';
import AddressShow from './AddressShow';
import addresses from '../address-list';

class Address extends Component {
    constructor(props) {
        super(props);

        this.addressIndex=0;
        this.state = {
            address: addresses[this.addressIndex]
        };
        this.debug = true;
    }

    render() {
        if (!this.debug) { console.log("ADDRESS RENDER"); }
        return (
            <div className="App">
                <AddressShow address={this.state.address}
                    setAddress={this.setAddress}
                />
            </div>

        );
    }

    setAddress = (event) => {
        this.addressIndex = 1;

        this.setState({
            address: addresses[this.addressIndex]
        })
    };
}

export default Address;