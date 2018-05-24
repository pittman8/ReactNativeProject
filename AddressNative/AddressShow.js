import React, { Component } from 'react';
import  { Text, View, Button } from 'react-native';
import styles from './elf-styles';
import PropTypes from 'prop-types';

class AddressShow extends Component {
    render() {
        return (
            <View className="App">
                <Text>
                    First Name: {this.props.address.firstName}
                </Text>
                <Text>
                    Last Name: {this.props.address.lastName}
                </Text>
                <Text>
                    Address: {this.props.address.address}
                </Text>
                <Text>City: {this.props.address.city}</Text>
                <Text>State: {this.props.address.state}</Text>
                <Text>Zip: {this.props.address.zip}</Text>
                <Text>Phone: {this.props.address.phone}</Text>
                <Text>Website: {this.props.address.website}</Text>
                <Text>
                    Contact: {this.props.address.contact}
                </Text>
                <View style={styles.buttonView} >
                    <Button
                        onPress={this.props.previousAddress}
                        title="Previous"
                        color="#841584"
                    />
                </View>
                <View style={styles.buttonView} >
                    <Button
                        onPress={this.props.setAddress}
                        title="Set Address"
                        color="#841584"
                    />
                </View>
                <View style={styles.buttonView} >
                    <Button
                        onPress={this.props.nextAddress}
                        title="Next"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}

AddressShow.propTypes = {
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
        phone: PropTypes.string,
        website: PropTypes.string,
        contact: PropTypes.string
    }),
    setAddress: PropTypes.func
};

export default AddressShow;
