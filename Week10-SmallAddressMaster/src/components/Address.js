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
        this.db = new PouchDB('addresses');
        this.remoteCouch = 'http://10.11.3.94:5984/addresses';
        //this.remoteCouch = false;
        this.syncDom = document.getElementById('sync-wrapper');
        this.db.changes({
            since: 'now',
            live: true
        }).on('change', this.showAddress);
    }

    addAddress = (data) => {
        const indexValue = this.state.addressIndex + 1;
        this.setState({addressIndex: indexValue});
        const address = {
            _id: new Date().toISOString(),
            firstName: data.firstName,
            lastName: data.lastName,
            completed: false
        };
        this.db.put(address, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a r!');
            }
        });
    };

    showAddress = () => {
        const that = this;
        let ids = [];
        const getIds = this.state.ids.length === 0;
        this.db.allDocs({include_docs: true, descending: true}, function(err, doc) {
            console.log(doc.rows);
            if (getIds) {
                ids = doc.rows.map((row) => {
                    return row.id;
                });
                that.setState({ids: ids});
            }
        });
    };

    setAddress = () => {};
    save = () => {};
    delete = () => {};

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