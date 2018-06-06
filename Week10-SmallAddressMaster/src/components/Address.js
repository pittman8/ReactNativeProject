import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import PouchDB from 'pouchdb';
import AddressShow from './AddressShow';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    container: {
        flexGrow: 1,
        textAlign: 'center'
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

class Address extends Component {

    constructor(props) {
        super(props);
        this.canceled = false;
        this.state = {
            editOpen: false,
            namesIndex: 0,
            names: [{
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown'
            }]
        };
    }

    componentDidMount() {
        this.props.dataManager.watchChanges(this.watcher);
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    watcher = event => {
        console.log('Watch Change', event);
        this.showAddress();
    };

    showAddress = () => {
        const that = this;
        return that.props.dataManager.db
            .find({
                selector: { lastName: { $gt: null } },
                sort: ['lastName']
            })
            .then(response => {
                console.log('RECORD COUNT:', response.docs.length);
                const names = response.docs.map(address => {
                    return {
                        _id: address._id,
                        _rev: address._rev,
                        firstName: address.firstName,
                        lastName: address.lastName
                    };
                });
                if (!this.canceled) {
                    that.setState({ names: names });
                }
            });
    };

    setAddress = (offset) => {
        const value = this.state.namesIndex + offset;
        if (value >= 0 && value <= this.state.names.length - 1) {
            this.setState({ namesIndex: value, open: this.state.editOpen });
        }
    };

    save = (name) => {
        console.log(name);
        this.props.dataManager
            .save(name)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    delete = (name) => {
        this.props.dataManager
            .delete(name._id)
            .then(function(result) {
                console.log('BAR', result);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    render() {
        const {classes} = this.props;
        return (
            <AddressShow
                name={this.state.names[this.state.namesIndex]}
                showAddress={this.showAddress}
                setAddress={this.setAddress}
                save={this.save}
                delete={this.delete}
            />
        );
    }
}

export default withStyles(styles)(Address);