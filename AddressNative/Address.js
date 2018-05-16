import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './elf-styles';
import AddressShow from './AddressShow';
import addresses from './address-list';

export default class Address extends React.Component {
    constructor(props) {
        super(props);
        this.addressIndex=0;
        this.state = {
            address: addresses[this.addressIndex]
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <AddressShow address={this.state.address}
                                 setAddress={this.setAddress}
                    />
                </View>

            </View>
        );
    }
    setAddress = () => {
        this.addressIndex = 1;

        this.setState({
            address: addresses[this.addressIndex]
        })
    };
}