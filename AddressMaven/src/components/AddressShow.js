import React, { Component } from 'react';
import '../css/App.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import AddressEdit from './AddressEdit';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    container: {
        flexGrow: 1,
        textAlign: 'center',
        color: 'white'
    },
    rootBar: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3
    }),
});

class AddressShow extends Component {

    constructor(props) {
        super(props);
        this.canceled = false;
        this.state = {
            editOpen: false,
            edits: {
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown',
                street: 'unknown',
                city: 'unknown',
                state: 'unknown',
                zip: 'unknown',
                phone: 'unknown',
                website: 'unknown',
                contact: 'unknown'
            }
        };
    }

    setEdits = (name, event) => {
        var data = this.props.name;
        data[name] = event.target.value;
        this.setState({edits: data});
    };

    addressEdit = address => {
        console.log(address);

        if (!address) {
            return this.setState({editOpen: false});
        }

        this.setState({
            edits: address,
            editOpen: false
        });
    };

    save = () => {
        this.props.save(this.state.edits);
    };

    render() {
        const {classes} = this.props;
        const editDialog = this.state.editOpen ? (
            <AddressEdit
                address={this.props.address}
                open={this.state.editOpen}
                addressEdit={this.addressEdit}
            />
        ) : (
            <div/>
        );

        return (
            <div className={classes.container}>
                <Paper className={classes.rootBar}>
                    <p className="App-intro">First Name: {this.props.address.firstName}</p>
                    <p className="App-intro">Last Name: {this.props.address.lastName}</p>
                    <p className="App-intro">Street: {this.props.address.street}</p>
                    <p className="App-intro">City: {this.props.address.city}</p>
                    <p className="App-intro">State: {this.props.address.state}</p>
                    <p className="App-intro">Zip: {this.props.address.zip}</p>
                    <p className="App-intro">Phone: {this.props.address.phone}</p>
                    <p className="App-intro">Website: {this.props.address.website}</p>
                    <p className="App-intro">Contact: {this.props.address.contact}</p>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.props.showAddress}
                    >
                        Show
                    </Button>

                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setAddress(-1, event)}
                    >
                        Back
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setAddress(1, event)}
                    >
                        Forward
                    </Button>
                    <div>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={() => this.setState({editOpen: true})}
                        >
                            Edit
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={this.save}
                        >
                            Save
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={event =>
                                this.props.delete(this.props.name, event)
                            }
                        >
                            Delete
                        </Button>
                        {editDialog}
                    </div>
                </Paper>
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
    setAddress: PropTypes.func,
    setEdits: PropTypes.func,
    addressEdit: PropTypes.func,
    save: PropTypes.func
};

export default withStyles(styles)(AddressShow);
