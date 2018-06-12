import React, { Component } from 'react';
import '../css/App.css';
import Address from './Address';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import GetFile from './GetFile';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import dataManager from '../tools/PouchDbManager';
import InitializeDatabase from './InitializeDatabase';

const styles = theme => ({
    container: {
        flexGrow: 1
    }
});

class App extends Component {

    componentDidMount() {
        this.db = dataManager.init();
    }

    render() {
        const { classes } = this.props;
        return (
            <BrowserRouter>
                <div className={classes.container}>
                    <Header />
                    <Route id="home" exact path="/" component={Home} />
                    <Route id="getFile" path="/get-file" component={GetFile} />
                    <Route
                        id="address"
                        path="/address"
                        render={props => (
                            <Address {...props} dataManager={dataManager} />
                        )}
                    />
                    <Route
                        id="initDb"
                        path="/init-db"
                        render={props => (
                            <InitializeDatabase
                                {...props}
                                dataManager={dataManager}
                            />
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default withStyles(styles)(App);