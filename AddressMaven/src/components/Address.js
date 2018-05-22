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
                />
            </div>
        );
    }

    getAddress = () => {
        fetch('/address-list')
            .then((response) => response.json())
            .then((addressListFromServer) => {
                console.log(addressListFromServer);
                this.addressList = addressListFromServer;
            })
            .catch((ex) => {
                console.log(ex);
            });
    };


    setAddress = (offset) => {
        this.addressIndex += offset;
        this.setState({
            address: this.addressList[this.addressIndex]
        });
    };
}

export default Address;
