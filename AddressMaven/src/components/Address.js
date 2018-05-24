import React, { Component } from 'react';
import '../css/App.css';
import AddressShow from './AddressShow';
import tempAddressList from '../address-list';

class Address extends Component {
    constructor(props) {
        super(props);

        this.debug = false;
        this.addressIndex = 0;
        this.addressList = null;
        this.state = {
            address: tempAddressList[this.addressIndex]
        };

        this.getAddress();
    }

    render() {
        if (!this.debug) {
            console.log('ADDRESS RENDER');
        }
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress}
                    nextAddress={this.nextAddress}
                    previousAddress={this.previousAddress}
                />
            </div>
        );
    }

    getAddress = () => {
        fetch('/address-list')
            .then(response => response.json())
            .then(addressListFromServer => {
                console.log(addressListFromServer);
                this.addressList = addressListFromServer;
            })
            .catch(ex => {
                console.log(ex);
            });
    };

    setAddress = () => {
        this.setState({
            address: this.addressList[this.addressIndex]
        });
    };

    nextAddress = () => {
        if (this.addressIndex !== 99) {
            // don't go after array ends
            this.setState({
                address: this.addressList[(this.addressIndex += 1)]
            });
        }
    };

    previousAddress = () => {
        if (this.addressIndex > 0) {
            // don't go before array starts
            this.setState({
                address: this.addressList[(this.addressIndex -= 1)]
            });
        }
    };
}

export default Address;
