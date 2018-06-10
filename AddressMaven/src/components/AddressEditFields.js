import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class AddressFields extends Component {
    render() {
        return (
            <div>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="First Name"
                    type="string"
                    value={this.props.address.firstName}
                    onChange={e => this.props.addressChangedByUser('firstName', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Last Name"
                    type="string"
                    value={this.props.address.lastName}
                    onChange={e => this.props.addressChangedByUser('lastName', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Street"
                    type="string"
                    value={this.props.address.street}
                    onChange={e => this.props.addressChangedByUser('street', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="City"
                    type="string"
                    value={this.props.address.city}
                    onChange={e => this.props.addressChangedByUser('city', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="State"
                    type="string"
                    value={this.props.address.state}
                    onChange={e => this.props.addressChangedByUser('state', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Zip"
                    type="string"
                    value={this.props.address.zip}
                    onChange={e => this.props.addressChangedByUser('zip', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Phone"
                    type="string"
                    value={this.props.address.phone}
                    onChange={e => this.props.addressChangedByUser('phone', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Website"
                    type="string"
                    value={this.props.address.website}
                    onChange={e => this.props.addressChangedByUser('website', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Contact"
                    type="string"
                    value={this.props.address.contact}
                    onChange={e => this.props.addressChangedByUser('contact', e)}
                    fullWidth
                />
            </div>
        );
    }
}

AddressFields.propTypes = {
    addressChangedByUser: PropTypes.func,
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
    })
};

export default AddressFields;