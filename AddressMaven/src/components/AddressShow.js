import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import styles from './elf-styles';
import PropTypes from 'prop-types';

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
                    Address: {this.props.address.street}
                </p>
                <p className="App-intro">City: {this.props.address.city}</p>
                <p className="App-intro">State: {this.props.address.state}</p>
                <p className="App-intro">Zip: {this.props.address.zip}</p>
                <p className="App-intro">Phone: {this.props.address.phone}</p>
                <p className="App-intro">Website: {this.props.address.website}</p>
                <p className="App-intro">
                    Contact: {this.props.address.contact}
                </p>
                <RaisedButton
                    id="setAddress"
                    primary={true}
                    onClick={(event) => this.props.setAddress(-1, event)}>
                    Previous
                </RaisedButton>
                <RaisedButton
                    label="Set Address"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionAndroid />}
                    style={styles.button}
                    onClick={this.props.setAddress}
                />
                <RaisedButton
                    id="setAddress"
                    primary={true}
                    onClick={(event) => this.props.setAddress(1, event)}>
                    Next
                </RaisedButton>
            </div>
        );
    }
}

AddressShow.propTypes = {
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        street: PropTypes.string,
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
