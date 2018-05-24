import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './elf-styles';
import AddressShow from './AddressShow';
import tempAddressList from './address-list';

export default class Address extends React.Component {
    constructor(props) {
        super(props);
        this.addressIndex = 0;
        this.addressList = null;
        this.state = {
            address: tempAddressList[this.addressIndex]
        };

        this.getAddress();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <AddressShow
                        address={this.state.address}
                        setAddress={this.setAddress}
                        previousAddress={this.previousAddress}
                        nextAddress={this.nextAddress}
                    />
                </View>

            </View>
        );
    }

    getAddress = () => {
        fetch('http://10.11.1.49:30026/address-list')
            .then((response) => response.json())
            .then((addressListFromServer) => {
                console.log(addressListFromServer);
                this.addressList = addressListFromServer;
            })
            .catch((ex) => {
                console.log(ex);
            });
    };

    setAddress = () => {
        this.setState({
            address: this.addressList[this.addressIndex]
        });
    };

    nextAddress = () => {
        if(this.addressIndex !== 99) { // don't go after array ends
            this.setState({
                address: this.addressList[this.addressIndex += 1]
            });
        }
    };

    previousAddress = () => {
        if(this.addressIndex > 0) { // don't go before array starts
            this.setState({
                address: this.addressList[this.addressIndex -= 1]
            });
        }
    };
}